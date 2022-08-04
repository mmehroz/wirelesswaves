<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\GoogleController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::any('/clear-cache', function() {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    return "Cache is cleared";
});
Route::any('/404', function() {
    return view('404');
});
Route::any('/aboutus', function() {
    return view('aboutus');
});
Route::any('/compare', function() {
    return view('compare');
});
Route::any('/contact', function() {
    return view('contact');
});
Route::any('/privacypolicy', function() {
    return view('privacypolicy');
});
Route::any('/register', function() {
    return view('register');
});
Route::any('/termsofuse', function() {
    return view('termsofuse');
});
Route::any('/reset', function() {
    return view('reset');
});

Route::any('/cart', function() {
    return view('cart');
});

Route::any('/checkout', function() {
    return view('checkout');
});
Route::any('/', [HomeController::class,'home']);
Route::get('/verifycoupon/{code}', [CartController::class, 'verifycoupon']);
Route::any('/products/{id}/{type}', [HomeController::class,'products']);
Route::any('/productlist/{id}/{type}', [HomeController::class,'productlist']);
Route::any('/searchproduct', [HomeController::class,'searchproduct']);
Route::any('/filteredproduct', [HomeController::class,'filteredproduct']);
Route::any('/productdetail/{id}', [HomeController::class,'productdetail']);
Route::any('/addtocompare/{id}', [HomeController::class,'addtocompare']);
Route::get('/addtocart/{id}', [CartController::class, 'addtocart']);
Route::delete('/removefromcart', [CartController::class, 'removefromcart']);
Route::delete('/removefromviewcart', [CartController::class, 'removefromviewcart']);
Route::patch('/updatecart', [CartController::class, 'updatecart']);
Route::patch('/updatecartdetail', [CartController::class, 'updatecartdetail']);
Route::any('/submitcheckout', [CheckoutController::class,'submitcheckout']);
Route::any('/submitreview', [CustomerController::class,'submitreview']);
Route::any('/submitregister', [CustomerController::class,'submitregister']);
Route::any('/login', [LoginController::class,'index']);
Route::any('/submitlogin', [LoginController::class,'submitlogin']);
Route::middleware('login.check')->group(function(){
    Route::any('/profile', [CustomerController::class,'profile']);
    Route::get('/addproducttowishlist/{id}', [CartController::class, 'addproducttowishlist']);
    Route::any('/logout', [LoginController::class,'logout']);
    Route::any('/updatecustomerinfo', [CustomerController::class,'updatecustomerinfo']);
    Route::any('/updatecustomerpassword', [CustomerController::class,'updatecustomerpassword']);
});
    Route::get('create-transaction', [CheckoutController::class, 'createTransaction'])->name('createTransaction');
    Route::get('process-transaction', [CheckoutController::class, 'processTransaction'])->name('processTransaction');
    Route::get('success-transaction', [CheckoutController::class, 'successTransaction'])->name('successTransaction');
    Route::get('cancel-transaction', [CheckoutController::class, 'cancelTransaction'])->name('cancelTransaction');

    Route::any('/auth/google', [GoogleController::class,'redirectToGoogle']);
    Route::any('/auth/google/callback', [GoogleController::class,'handleGoogleCallback']);