<?php
  
namespace App\Http\Controllers;
  
use App\Http\Controllers\Controller;
use Socialite;
use Auth;
use Exception;
use DB;
  
class GoogleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }
      
    /**
     * Create a new controller instance.b
     *
     * @return void
     */
    public function handleGoogleCallback()
    {
        try {
    
            $user = Socialite::driver('google')->stateless()->user();
            $finduser = DB::table('customer')
            ->select('*')
            ->where('email','=',$user->email)
            ->where('status','=',1)
            ->first();
            if($finduser == null){
                $adds = array(
                'first_name'        => $user->name,
                'last_name'         => $user->name,
                'email'             => $user->email,
                'password'          => "wireless-123",
                'customer_type'     => 1,
                'state'             => "",
                'country'           => "",
                'city'              => "",
                'zip'               => "",
                'status'            => 1,
                'created_at'        => date('Y-m-d h:i:s'),
                );
                DB::table('customer')->insert($adds);
                $customer_id = DB::getPdo()->lastInsertId();
                session()->put([
                'id'            => $customer_id,
                'email'         => $user->email,
                'name'          => $user->name,
                'lastname'      => $user->name,
                'customertype'  => 1,
                ]);
                return redirect('/');
            }else{
                session()->put([
                'id'            => $finduser->id,
                'email'         => $finduser->email,
                'name'          => $finduser->first_name,
                'lastname'      => $finduser->last_name,
                'customertype'  => $finduser->customer_type,
                ]);
                return redirect('/');
            }
    
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}