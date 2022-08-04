@extends('layouts.apptheme')
@section('appcontent')
<body class="theme-blue slider_with_banners ltr ask-register">
<div class="content-wrapper clearfix ">
  <div class="container">
      <section class="product-list">
      <div class="row">
        @include('customfilter')
        <div class="col-md-9 col-sm-12 mt-30">
          <div class="clearfix"></div>
          <div class="product-list-result clearfix">
            <div class="product-list-header clearfix">
              <div class="search-result-title pull-left">
                <h3>{{$categorytitle}}</h3> <span>{{$productcount}} Products Found</span> </div>
              <div class="search-result-right pull-right">
                <ul class="nav nav-tabs">
                  <li class="view-mode active">
                    @if(isset($searchname))
                    <a href="{{url('/products')}}/{{$categoryid}}/{{$searchname}}" title="Grid view"> <i class="fa fa-th-large" aria-hidden="true"></i> </a>
                    @else
                    <a href="{{url('/products')}}/{{$categoryid}}/1" title="Grid view"> <i class="fa fa-th-large" aria-hidden="true"></i> </a>
                    @endif
                  </li>
                  <li class="view-mode ">
                    @if(isset($searchname))
                    <a href="{{url('/productlist')}}/{{$categoryid}}/{{$searchname}}" title="List view"> <i class="fa fa-th-list" aria-hidden="true"></i> </a>
                    @else
                    <a href="{{url('/productlist')}}/{{$categoryid}}/1" title="List view"> <i class="fa fa-th-list" aria-hidden="true"></i> </a>
                    @endif
                  </li>
                </ul>
              </div>
            </div>
            <div class="tab-content">
              <div id="grid-view" class="tab-pane ">
                <div class="row">
                  <div class="grid-products separator"> </div>
                </div>
              </div>
              <div id="list-view" class="tab-pane active">
                @foreach($phone as $phones)
                <?php
                  if(session()->get('customertype') == 2){
                    if (session()->get('tier') >= 1) {
                      $decodeprice =json_decode($phones->retailer_prices[session()->get('tier')]);;
                      if ($decodeprice == null) {
                        $price = $phones->price;
                      }else{
                        $price = $decodeprice;
                      }
                    }else{
                      $price = $phones->price;
                    }
                  }else{
                     $price = $phones->price;
                  }
                  ?>
                <div class="product-card-list clearfix">
                  <a class="product-image pull-left" href="{{url('productdetail')}}/{{$phones->id}}">
                    <ul class="product-ribbon list-inline"> </ul>
                    <div class="image-holder"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$phones->image}}"> </div>
                  </a>
                  <div class="product-content clearfix">
                    <div class="product-content-inner">
                      <a href="products/verizon-qi-wireless-charging-pad.html" class="product-name">
                        <h5>{{$phones->name}}</h5> </a> <span class="product-price">{{$price}}</span>
                      <p></p>
                    </div>
                    <div class="product-card-buttons">
                    @if(session()->get('id'))
                    <button type="submit" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" class="btn btn-wishlist" onclick="addproducttowishlist({{$phones->id}})"> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
                    @else
                    <button type="submit" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" class="btn btn-wishlist" onclick="addtowishlist()"> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
                    @endif
                    <button type="submit" data-toggle="tooltip" data-placement="top" title="Add to Compare" class="btn btn-compare" onclick="addtocompare({{$phones->id}})"> <i class="fa fa-bar-chart" aria-hidden="true"></i> </button>
                    <button id="button" type="submit" class="add-to-cart btn btn-primary" data-loading onclick="addtocart({{$phones->id}})"> Add to Cart </button>
                     </div>
                  </div>
                </div>
                @endforeach
                <p id="toasts" class ='toggle-btn'>  </p>
              </div>
            </div>
          </div>
          <div class="pull-right"> </div>
        </div>
      </div>
    </section>
  </div>
</div>
@endsection  