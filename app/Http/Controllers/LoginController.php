<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class LoginController extends Controller
{
    public function index(Request $request){
        session()->forget('id');
        session()->forget('email');
        session()->forget('name');
        session()->forget('lastname');
        session()->forget('customertype');
        return view('/login');
    }
    public function submitlogin(Request $request){
        $this->validate($request, [
            'email'     =>'required',
            'password'  => 'required',
        ]);
        $task = DB::table('customer')
        ->select('*')
        ->where('email','=',$request->email)
        ->where('password','=',$request->password)
        ->where('status','=',1)
        ->first();
        if($task){
            session()->put([
                'id'            => $task->id,
                'email'         => $task->email,
                'name'          => $task->first_name,
                'lastname'      => $task->last_name,
                'customertype'  => $task->customer_type,
            ]);
            if ($task->customer_type == 2) {
                $retailer = DB::table('retailer_customer')
                ->select('retailer_list_id')
                ->where('customer_id','=',$task->id)
                ->first();
                if ($retailer->retailer_list_id == null) {
                     session()->put([
                    'tier'        => 0,
                    ]);
                }else{
                    session()->put([
                    'tier'        => $retailer->retailer_list_id,
                    ]);
                }
            }
                return redirect('/');
        }else{
            return redirect('/login')->with('message', 'Login Failed, Please Try Again!');
        }
    }
    public function logout(){
        session()->forget('id');
        session()->forget('email');
        session()->forget('name');
        session()->forget('lastname');
        session()->forget('customertype');
        return redirect('/login')->with('message', 'Logout Successfully');
    }
}
