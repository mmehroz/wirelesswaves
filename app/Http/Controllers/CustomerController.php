<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class CustomerController extends Controller
{
    public function submitreview(Request $request){
        $details = array(
            'review_rating'     => $request->review_rating,
            'review_name'       => $request->review_name,
            'review_comment'    => $request->review_comment,
        );
            DB::table('review')->insert($details);
        return redirect('/')->with('message', 'Thank You For Submiting');
    }
    public function submitregister(Request $request){
        $adds = array(
            'first_name'        => $request->first_name,
            'last_name'         => $request->last_name,
            'email'             => $request->email,
            'password'          => $request->password,
            'customer_type'     => $request->customer_type,
            'state'             => $request->state,
            'country'           => $request->country,
            'city'              => $request->city,
            'zip'               => $request->zip,
            'status'            => $request->customer_type == 1 ? 1 : 0,
            'created_at'        => date('Y-m-d h:i:s'),
        );
        DB::table('customer')->insert($adds);
        $customer_id = DB::getPdo()->lastInsertId();
        if ($request->customer_type == 2) {
            $addretailer = array(
            'business_name'     => $request->business_name,
            'business_number'   => $request->business_number,
            'business_website'  => $request->business_website,
            'referral_code'     => $request->referral_code,
            'address_line_1'    => $request->address_line_1,
            'customer_id'       => $customer_id,
            'created_at'        => date('Y-m-d h:i:s'),
            );
            DB::table('retailer_customer')->insert($addretailer);
            return redirect('/')->with('message', 'Your Request Sent To Admin For Approval');
        }else{
            session()->put([
            'id'            => $customer_id,
            'email'         => $request->email,
            'name'          => $request->first_name,
            'lastname'      => $request->last_name,
            'customertype'  => $request->customer_type,
            ]);
            return redirect('/')->with('message', 'Thank You For Registration');
        }
    }
    public function profile(){
        $personal = DB::table('customer')
        ->select('customer.*','retailer_customer.credit_line_status','retailer_customer.credit_limit','retailer_customer.credit_usage')
        ->leftjoin('retailer_customer', 'retailer_customer.customer_id', '=', 'customer.id')
        ->where('customer.id','=',session()->get('id'))
        ->first();
        $wishlist = DB::table('wishlist')
        ->select('products.*')
        ->join('products', 'products.id', '=', 'wishlist.product_id')
        ->where('customer_id','=',session()->get('id'))
        ->where('status_id','=',1)
        ->get();
        $order = DB::table('orders')
        ->select('order_products.order_id','products.name','order_products.created_at','order_products.qty','orders.status')
        ->join('order_products', 'order_products.order_id', '=', 'orders.id')
        ->join('products', 'products.id', '=', 'order_products.product_id')
        ->where('customer_email','=',session()->get('email'))
        ->get();
        return view('profile',['personal' => $personal, 'wishlist' => $wishlist, 'order' => $order]);
    }
    public function updatecustomerinfo(Request $request){
        $adds = array(
            'first_name'        => $request->first_name,
            'last_name'         => $request->last_name,
            'email'             => $request->email,
        );
        DB::table('customer')
        ->where('id', session()->get('id'))
        ->update($adds);
        return redirect('/profile')->with('message', 'Updated Successfully');
    }
    public function updatecustomerpassword(Request $request){
        $adds = array(
            'password'       => $request->newpassword,
        );
        DB::table('customer')
        ->where('id', session()->get('id'))
        ->update($adds);
        return redirect('/profile')->with('message', 'Updated Successfully');
    }
}