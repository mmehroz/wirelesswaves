<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class CartController extends Controller
{
    public function addToCart($id)
    {
       $product = DB::table('products')
        ->select('*')
        ->where('id','=',$id)
        ->first();
        $cart = session()->get('cart', []);
  
        if(isset($cart[$id])) {
            $cart[$id]['quantity']++;
        } else {
            $cart[$id] = [
                "name" => $product->name,
                "quantity" => 1,
                "price" => $product->price,
                "image" => $product->image
            ];
        }    
        session()->put('cart', $cart);
        return view('cartheader');
    }
    public function addproducttowishlist($id)
    {
       $adds = array(
            'product_id'        => $id,
            'customer_id'       => session()->get('id'),
            'status_id'         => 1,
        );
        DB::table('wishlist')->insert($adds);
    }
    public function removefromcart(Request $request)
    {
        if($request->id) {
            $cart = session()->get('cart');
            if(isset($cart[$request->id])) {
                unset($cart[$request->id]);
                session()->put('cart', $cart);
            }
            return view('cartheader');
        }
    }
    public function removefromviewcart(Request $request)
    {
        if($request->id) {
            $cart = session()->get('cart');
            if(isset($cart[$request->id])) {
                unset($cart[$request->id]);
                session()->put('cart', $cart);
            }
            return view('viewcart');
        }
    }
    public function updatecart(Request $request)
    {
        if($request->id && $request->quantity){
            $cart = session()->get('cart');
            $cart[$request->id]["quantity"] = $request->quantity;
            session()->put('cart', $cart);
            return view('carttotal');
        }
    }
    public function updatecartdetail(Request $request)
    {
        if($request->id && $request->quantity){
            $cart = session()->get('cart');
            $cart[$request->id]["quantity"] = $request->quantity;
            session()->put('cart', $cart);
            return view('cartheader');
        }
    }
      public function verifycoupon($code)
    {
        $verifycoupon = DB::table('coupens')
        ->select('value')
        ->where('code','=',$code)
        ->first();
        if (isset($verifycoupon->value)) {
            $coupon = array(
                'isverify'      => "Successfully Verified",
                'disscount'     => $verifycoupon->value
            );
        }else{
            $coupon = array(
                'isverify'      => "Not Verified",
                'disscount'     => 0
            );
        }
        return view('carttotal',['coupon' => $coupon]);
    }
}