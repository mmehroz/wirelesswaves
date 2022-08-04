<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Srmklive\PayPal\Services\PayPal as PayPalClient;

class CheckoutController extends Controller
{
    public function submitcheckout(Request $request){
        $index=0;
        foreach (session('cart') as $id => $details) {
            $productdetails[$index]['productid'] = $id;
            $productdetails[$index]['productqty'] = $details['quantity'];
            $productdetails[$index]['productprice'] = $details['price'];
            $index++;
        }
        if ($request->shipping_method == "local_pickup") {
            $shipping_cost = 0;
        }else{
            $shipping_cost = 20;
        }
        $total = 0;
        foreach((array) session('cart') as $id => $details){
             $total += $details['price'] * $details['quantity'];
        }
        $nettotal = $total + $shipping_cost;
        $adds = array(
            'customer_email' => $request->customer_email,
            'customer_phone' => $request->customer_phone,
            'customer_first_name' => $request->customer_fname,
            'customer_last_name' => $request->customer_lname,
            'billing_first_name' => $request->billing['first_name'],
            'billing_last_name' => $request->billing['last_name'],
            'billing_address_1' => $request->billing['address_1'],
            'billing_address_2' => $request->billing['address_2'],
            'billing_city' => $request->billing['city'],
            'billing_state' => $request->billing['state'],
            'billing_zip' => $request->billing['zip'],
            'billing_country' => $request->billing['country'],
            'shipping_first_name' => $request->ship_to_a_different_address == 1 ? $request->shipping['first_name'] : null,
            'shipping_last_name' => $request->ship_to_a_different_address == 1 ? $request->shipping['last_name'] : null,
            'shipping_address_1' => $request->ship_to_a_different_address == 1 ? $request->shipping['address_1'] : null,
            'shipping_address_2' => $request->ship_to_a_different_address == 1 ? $request->shipping['address_2'] : null,
            'shipping_city' => $request->ship_to_a_different_address == 1 ? $request->shipping['city'] : null,
            'shipping_state' => $request->ship_to_a_different_address == 1 ? $request->shipping['state'] : null,
            'shipping_zip' => $request->ship_to_a_different_address == 1 ? $request->shipping['zip'] : null,
            'shipping_country' => $request->ship_to_a_different_address == 1 ? $request->shipping['country'] : null,
            'payment_method' => $request->payment_method,
            'currency' => "USD",
            'shipping_method' => $request->shipping_method,
            'shipping_cost' => $shipping_cost,
            'status' => "pending_payment",
            'sub_total' => $total,
            'total' => $nettotal,
            'created_at' => date('Y-m-d h:i:s'),
        );
        DB::table('orders')->insert($adds);
        $order_id = DB::getPdo()->lastInsertId();
        foreach ($productdetails as $productdetailss) {
            $details = array(
                'order_id'      => $order_id,
                'product_id'    => $productdetailss['productid'],
                'unit_price'    => $productdetailss['productprice'],
                'qty'           => $productdetailss['productqty'],
                'line_total'    => $productdetailss['productprice'],
                'created_at'    => date('Y-m-d h:i:s'),
                'updated_at'    => date('Y-m-d h:i:s'),
            );
            DB::table('order_products')->insert($details);
        }
        if ($request->create_an_account == 1) {
            $checkemil = DB::table('customer')
            ->select('id')
            ->where('email','=',$request->customer_email)
            ->count();
            if ($checkemil == 0) {
             $addcustomer = array(
            'first_name'        => $request->customer_fname,
            'last_name'         => $request->customer_lname,
            'email'             => $request->customer_email,
            'password'          => $request->password,
            'customer_type'     => 1,
            'state'             => $request->billing['state'],
            'country'           => $request->billing['country'],
            'city'              => $request->billing['city'],
            'zip'               => $request->billing['zip'],
            'status'            => 1,
            'created_at'        => date('Y-m-d h:i:s'),
            );
            DB::table('customer')->insert($addcustomer);
            $customer_id = DB::getPdo()->lastInsertId();
             session()->put([
                'id'            => $customer_id,
                'email'         => $request->customer_email,
                'name'          => $request->customer_fname,
                'lastname'      => $request->customer_lname,
                'customertype'  => 1,
            ]);
            }
        }
        return redirect('/')->with('message', 'Order Submited Successfully');
    }
    public function createTransaction()
    {
        return view('transaction');
    }

    /**
     * process transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function processTransaction(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();

        $response = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('successTransaction'),
                "cancel_url" => route('cancelTransaction'),
            ],
            "purchase_units" => [
                0 => [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => "1000.00"
                    ]
                ]
            ]
        ]);

        if (isset($response['id']) && $response['id'] != null) {

            // redirect to approve href
            foreach ($response['links'] as $links) {
                if ($links['rel'] == 'approve') {
                    return redirect()->away($links['href']);
                }
            }

            return redirect()
                ->route('createTransaction')
                ->with('error', 'Something went wrong.');

        } else {
            return redirect()
                ->route('createTransaction')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    /**
     * success transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function successTransaction(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();
        $response = $provider->capturePaymentOrder($request['token']);

        if (isset($response['status']) && $response['status'] == 'COMPLETED') {
            return redirect()
                ->route('createTransaction')
                ->with('success', 'Transaction complete.');
        } else {
            return redirect()
                ->route('createTransaction')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }

    /**
     * cancel transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function cancelTransaction(Request $request)
    {
        return redirect()
            ->route('createTransaction')
            ->with('error', $response['message'] ?? 'You have canceled the transaction.');
    }
}