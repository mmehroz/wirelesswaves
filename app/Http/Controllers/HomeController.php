<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class HomeController extends Controller
{
    public function home(){
        $phoneproduct = DB::table('category_product')
        ->select('product_id')
        ->where('category_id','=',50)
        ->get();
        $sortphoneproduct = array();
        foreach($phoneproduct as $phoneproducts){
            $sortphoneproduct[] = $phoneproducts->product_id;
        }
        $latestphone = DB::table('products')
        ->select('*')
        ->whereIn('id',$sortphoneproduct)
        ->where('quantity','>',0)
        ->where('status','=',1)
        ->orderBy('id', 'DESC')
        ->limit(10)
        ->get();
        $accessorycategory = DB::table('categories')
        ->select('id')
        ->where('parent_id','=',52)
        ->get();
        $sortaccessorycategory = array();
        foreach($accessorycategory as $accessorycategorys){
            $sortaccessorycategory[] = $accessorycategorys->id;
        }
        $accessoryproduct = DB::table('category_product')
        ->select('product_id')
        ->whereIn('category_id',$sortaccessorycategory)
        ->get();
        $sortaccessoryproduct = array();
        foreach($accessoryproduct as $accessoryproducts){
            $sortaccessoryproduct[] = $accessoryproducts->product_id;
        }
        $latestaccessory = DB::table('products')
        ->select('*')
        ->whereIn('id',$sortaccessoryproduct)
        ->where('quantity','>',0)
        ->where('status','=',1)
        ->orderBy('id', 'DESC')
        ->limit(10)
        ->get();
        return view('home',['latestphone' => $latestphone, 'latestaccessory' => $latestaccessory]);
    }
    public function products($id,$type){
        $sortphoneproduct = array();
        if ($id ==  52) {
            $accessorycategory = DB::table('categories')
            ->select('id')
            ->where('parent_id','=',52)
            ->get();
            $sortaccessorycategory = array();
            foreach($accessorycategory as $accessorycategorys){
                $sortaccessorycategory[] = $accessorycategorys->id;
            }
            $accessoryproduct = DB::table('category_product')
            ->select('product_id')
            ->whereIn('category_id',$sortaccessorycategory)
            ->get();
            foreach($accessoryproduct as $accessoryproducts){
                $sortphoneproduct[] = $accessoryproducts->product_id;
            }
        }elseif ($id == 0){
            $phoneproduct = DB::table('category_product')
            ->select('product_id')
            ->get();
            foreach($phoneproduct as $phoneproducts){
                $sortphoneproduct[] = $phoneproducts->product_id;
            }
        }else{
             $phoneproduct = DB::table('category_product')
            ->select('product_id')
            ->where('category_id','=',$id)
            ->get();
            foreach($phoneproduct as $phoneproducts){
                $sortphoneproduct[] = $phoneproducts->product_id;
            }
        }
         if ($id == 0) {
            $categoryid = 0;
            $categorytitle = "All";    
        }else{
            $category = DB::table('categories')
            ->select('id','title')
            ->where('id','=',$id)
            ->first();
            $categoryid = $category->id;
            $categorytitle = $category->title;
        }
        if ($type == 1) {
            $phone = DB::table('products')
            ->select('*')
            ->whereIn('id',$sortphoneproduct)
            ->where('quantity','>',0)
            ->where('status','=',1)
            ->orderBy('id', 'DESC')
            ->get();
            $productcount = DB::table('products')
            ->select('id')
            ->whereIn('id',$sortphoneproduct)
            ->where('quantity','>',0)
            ->where('status','=',1)
            ->orderBy('id', 'DESC')
            ->count();    
        }else{
             $phone = DB::table('products')
            ->select('*')
            ->whereIn('id',$sortphoneproduct)
            ->where('name','like','%'.$type.'%')
            ->where('quantity','>',0)
            ->where('status','=',1)
            ->orderBy('id', 'DESC')
            ->get();
            $productcount = DB::table('products')
            ->select('id')
            ->whereIn('id',$sortphoneproduct)
            ->where('name','like','%'.$type.'%')
            ->where('quantity','>',0)
            ->where('status','=',1)
            ->orderBy('id', 'DESC')
            ->count();
        }
        return view('products',['phone' => $phone, 'categoryid' => $categoryid , 'categorytitle' => $categorytitle, 'searchname' => $type, 'productcount' => $productcount]);
    }
    public function productlist($id,$type){
        $sortphoneproduct = array();
        if ($id ==  52) {
            $accessorycategory = DB::table('categories')
            ->select('id')
            ->where('parent_id','=',52)
            ->get();
            $sortaccessorycategory = array();
            foreach($accessorycategory as $accessorycategorys){
                $sortaccessorycategory[] = $accessorycategorys->id;
            }
            $accessoryproduct = DB::table('category_product')
            ->select('product_id')
            ->whereIn('category_id',$sortaccessorycategory)
            ->get();
            foreach($accessoryproduct as $accessoryproducts){
                $sortphoneproduct[] = $accessoryproducts->product_id;
            }
        }elseif ($id == 0){
             $phoneproduct = DB::table('category_product')
            ->select('product_id')
            ->get();
            foreach($phoneproduct as $phoneproducts){
                $sortphoneproduct[] = $phoneproducts->product_id;
            }
        }else{
             $phoneproduct = DB::table('category_product')
            ->select('product_id')
            ->where('category_id','=',$id)
            ->get();
            foreach($phoneproduct as $phoneproducts){
                $sortphoneproduct[] = $phoneproducts->product_id;
            }
        }
         if ($id == 0) {
            $categoryid = 0;
            $categorytitle = "All";    
        }else{
            $category = DB::table('categories')
            ->select('id','title')
            ->where('id','=',$id)
            ->first();
            $categoryid = $category->id;
            $categorytitle = $category->title;
        }
        if ($type == 1) {
            $phone = DB::table('products')
            ->select('*')
            ->whereIn('id',$sortphoneproduct)
            ->where('quantity','>',0)
            ->where('status','=',1)
            ->orderBy('id', 'DESC')
            ->get();
            $productcount = DB::table('products')
            ->select('id')
            ->whereIn('id',$sortphoneproduct)
            ->where('quantity','>',0)
            ->where('status','=',1)
            ->orderBy('id', 'DESC')
            ->count();    
        }else{
            $phone = DB::table('products')
            ->select('*')
            ->whereIn('id',$sortphoneproduct)
            ->where('name','like','%'.$type.'%')
            ->where('quantity','>',0)
            ->where('status','=',1)
            ->orderBy('id', 'DESC')
            ->get();
            $productcount = DB::table('products')
            ->select('id')
            ->whereIn('id',$sortphoneproduct)
            ->where('name','like','%'.$type.'%')
            ->where('quantity','>',0)
            ->where('status','=',1)
            ->orderBy('id', 'DESC')
            ->count();
        }
        return view('productlist',['phone' => $phone, 'categoryid' => $categoryid, 'categorytitle' => $categorytitle, 'searchname' => $type, 'productcount' => $productcount]);
    }
    public function searchproduct(Request $request){
        $sortphoneproduct = array();
        if ($request->searchcategory ==  52) {
            $accessorycategory = DB::table('categories')
            ->select('id')
            ->where('parent_id','=',52)
            ->get();
            $sortaccessorycategory = array();
            foreach($accessorycategory as $accessorycategorys){
                $sortaccessorycategory[] = $accessorycategorys->id;
            }
            $accessoryproduct = DB::table('category_product')
            ->select('product_id')
            ->whereIn('category_id',$sortaccessorycategory)
            ->get();
            foreach($accessoryproduct as $accessoryproducts){
                $sortphoneproduct[] = $accessoryproducts->product_id;
            }
        }elseif ($request->searchcategory == 0){
            $phoneproduct = DB::table('category_product')
            ->select('product_id')
            ->get();
            foreach($phoneproduct as $phoneproducts){
                $sortphoneproduct[] = $phoneproducts->product_id;
            }
        }else{
             $phoneproduct = DB::table('category_product')
            ->select('product_id')
            ->where('category_id','=',$request->searchcategory)
            ->get();
            foreach($phoneproduct as $phoneproducts){
                $sortphoneproduct[] = $phoneproducts->product_id;
            }
        }
        if ($request->searchcategory == 0) {
            $categoryid = 0;
            $categorytitle = "All";    
        }else{
            $category = DB::table('categories')
            ->select('id','title')
            ->where('id','=',$request->searchcategory)
            ->first();
            $categoryid = $category->id;
            $categorytitle = $category->title;
        }
        $phone = DB::table('products')
        ->select('*')
        ->where('name','like','%'.$request->searchname.'%')
        ->whereIn('id',$sortphoneproduct)
        ->where('quantity','>',0)
        ->where('status','=',1)
        ->orderBy('id', 'DESC')
        ->get();
        $productcount = DB::table('products')
        ->select('id')
        ->whereIn('id',$sortphoneproduct)
        ->where('name','like','%'.$request->searchname.'%')
        ->where('quantity','>',0)
        ->where('status','=',1)
        ->orderBy('id', 'DESC')
        ->count();
        return view('products',['phone' => $phone, 'categoryid' => $categoryid, 'categorytitle' => $categorytitle, 'searchname' => $request->searchname, 'productcount' => $productcount]);
    }
    public function productdetail($id){
         $product = DB::table('products')
        ->select('*')
        ->where('id','=',$id)
        ->first();
        $productgallery = DB::table('product_galleries')
        ->select('image')
        ->where('product_id','=',$id)
        ->get();
        return view('productdetail',['product' => $product, 'productgallery' => $productgallery]);
    }
    public function addtocompare($id){
         $product = DB::table('products')
        ->select('*')
        ->where('id','=',$id)
        ->first();
        session()->put([
            'compareid'.$id     => $product->id,
            'comparename'.$id   => $product->name,
            'compareimage'.$id  => $product->image,
            'compareprice'.$id  => $product->price,
            'iscompare'         => 1,
        ]);
    }
     public function filteredproduct(Request $request){
        $phone = DB::table('products')
        ->select('*')
        ->where('brand_id','=',$request->productbrand)
        ->where('brandmodel_id','=',$request->model)
        ->where('accessorybrand_id','=',$request->accessorybrand)
        ->where('accessorytype_id','=',$request->accessorytype)
        ->where('carier_id','=',$request->carrier)
        ->where('quantity','>',0)
        ->where('status','=',1)
        ->orwhereBetween('price',[$request->fromPrice,$request->toPrice])
        ->orderBy('id', 'DESC')
        ->limit(50)
        ->get();
        $categoryid = 0;
        $categorytitle = "Fileter Product";
        $productcount = DB::table('products')
        ->select('*')
        ->where('brand_id','=',$request->productbrand)
        ->where('brandmodel_id','=',$request->model)
        ->where('accessorybrand_id','=',$request->accessorybrand)
        ->where('accessorytype_id','=',$request->accessorytype)
        ->where('carier_id','=',$request->carrier)
        ->where('quantity','>',0)
        ->where('status','=',1)
        ->orwhereBetween('price',[$request->fromPrice,$request->toPrice])
        ->orderBy('id', 'DESC')
        ->count();
        return view('products',['phone' => $phone, 'categoryid' => $categoryid, 'categorytitle' => $categorytitle, 'productcount' => $productcount]);
    }
    public function cartheader(){
       return view('cartheader');
    }
}