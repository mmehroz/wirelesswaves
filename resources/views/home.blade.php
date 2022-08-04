@extends('layouts.apptheme')
@section('appcontent')      
<body class="theme-blue slider_with_banners ltr">   
      <div class="content-wrapper clearfix ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <section id="top-sec">
                <div class="container">
                  <div class="row">

                     <div class=" col-md-8">
                          <div class="new-top-home-slider">
                            <div class="ffslider-image" style="border-radius:25px;">
                            <a href="https://wirelesswavestx.com/products/52/1"><img src="{!! asset('public/assets/img/home-banner/slide1.jpg')!!}" alt="slide" style="border-radius:25px;"></a>
                          </div>

                           <div class="ffslider-image" style="border-radius:25px;">
                            <a href="https://wirelesswavestx.com/products/43/1"><img src="{!! asset('public/assets/img/home-banner/slide2.jpg')!!}" alt="slide" style="border-radius:25px;"></a>
                          </div>

                           <div class="ffslider-image" style="border-radius:25px;">
                            <a href="https://wirelesswavestx.com/products/37/1"><img src="{!! asset('public/assets/img/home-banner/slide3.jpg')!!}" alt="slide" style="border-radius:25px;"></a>
                          </div>

                          </div>       
                     </div>
                    <div class=" col-md-4">
                      <div class="righ-header">
                        <div class=""> <a href="https://wirelesswavestx.com/products/50/1"><img src="{!! asset('public/assets/img/home-banner/mobslide1.jpg') !!}" class=" img-fluid img-responsive" alt="scrool" style="border-radius:25px;"></a> </div>
                        <div class=""> <a href="https://wirelesswavestx.com/products/39/1"><img src="{!! asset('public/assets/img/home-banner/gamesslide1.jpg') !!}" class="my-4 img-fluid img-responsive" alt="scrool" style="border-radius:25px;"></a> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div class="container">
        @if (Session::has('message'))
            <div class="alert alert-success">
                <ul>
                    <li>{{Session::get('message')}}</li>
                </ul>
            </div>
        @endif
          <section class="tab-products clearfix">
            <div class="section-header clearfix">
              <h3 class="pull-left">Featured</h3>
              <ul class="nav nav-tabs pull-right"> </ul>
            </div>
            <div class="row">
              <div class="tab-content"> </div>
            </div>
          </section> 
          <a href="https://www.allwirelessexpo.com/exhibitors/virtual-exhibit-hall/398/wireless-waves" target="_blank"><img src="{!! asset('public/assets/img/banner-lg.png') !!}" class="img-responsive"></a>
          <section id="latest-products">
            <ul class="section-header nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Latest Phones </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Latest Accessories</button>
            </li>
          
          </ul>
        <p id="toasts" class ='toggle-btn'>  </p>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">             
              <div class="row">
  <div class="grid-products separator">
    @foreach($latestphone as $latestphones)
        <?php
        if(session()->get('customertype') == 2){
          if (session()->get('tier') >= 1) {
            $decodeprice =json_decode($latestphones->retailer_prices[session()->get('tier')]);;
            if ($decodeprice == null) {
              $price = $latestphones->price;
            }else{
              $price = $decodeprice;
            }
          }else{
            $price = $latestphones->price;
          }
        }else{
           $price = $latestphones->price;
        }
        ?>
    <a  class="product-card" href="{{url('productdetail')}}/{{$latestphones->id}}">
      <div class="product-card-inner">
        <div class="product-image clearfix">
          <ul class="product-ribbon list-inline"> </ul>
          <div class="image-holder"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$latestphones->image}}"> </div>
          
          <div onclick='return false' class="quick-view-wrapper" data-toggle="tooltip" data-placement="top" title="Quick View">
            <button type="button" class="btn btn-quick-view" id ="quick-view-btns" onclick="getproductdetails({{$latestphones->id}})"> <i class="fa fa-eye" aria-hidden="true"></i></button>
          </div> 
        </div>
        <div class="product-content clearfix"> <span class="product-price">${{$price}}</span> <span class="product-name">{{$latestphones->name}}</span> </div>
        <div class="add-to-actions-wrapper">
          <div onclick='return false'>
          @if(session()->get('id'))
          <button type="submit" class="btn btn-wishlist" data-toggle="tooltip" data-placement="right" title="Add to Wishlist" onclick="addproducttowishlist({{$latestphones->id}})"> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
          @else
          <button type="submit" class="btn btn-wishlist" data-toggle="tooltip" data-placement="right" title="Add to Wishlist" onclick="addtowishlist()"> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
          @endif
           <button class="btn btn-default btn-add-to-cart" onclick="addtocart({{$latestphones->id}})"> Add to Cart </button>
           <button type="button" class="btn btn-compare" data-toggle="tooltip" data-placement="left" title="Add to Compare" onclick="addtocompare({{$latestphones->id}})"> <i class="fa fa-bar-chart" aria-hidden="true"></i> </button>
         </div>
        </div>
      </div>
    </a>
<div class="modal fade in product-discription-popup" id="quick-view-modal{{$latestphones->id}}" role="dialog" style=" padding-right: 17px;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body clearfix zoom">
        <button type="button" class="btn-close" onclick="modalclose({{$latestphones->id}})"> × </button>
        <div class="quick-view clearfix">
          <div class="col-md-4 col-sm-7">
            <div class="quick-view-image">
              <div class="base-image slick-initialized slick-slider">
                <div class="slick-list">                    

                  <div class="slick-track" style="opacity: 1; width: 347px; transform: translate3d(0px, 0px, 0px);">
                    <a class="base-image-inner slick-slide slick-current slick-active" href="http://wirelesswavestx.com/storage/app/public/media/1646742657.png" data-slick-index="0" aria-hidden="false" style="width: 347px;"> 
                      <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$latestphones->image}}"> <span><i class="fa fa-search-plus" aria-hidden="true"></i></span> </a>
                  </div>
              
                </div>
              </div>
              <div class="additional-image slick-initialized slick-slider">
                <div class="slick-list draggable">
                  <div class="slick-track" style="opacity: 1; width: 164px; transform: translate3d(0px, 0px, 0px);">
                    <div class="thumb-image slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 154px;"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$latestphones->image}}"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-sm-12 col-xs-12"> 
            <div class="quick-view-details">
              <div class="product-details text-left">
                <h2 class="product-name">{{$latestphones->name}}</h2> <span class="product-rating">
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                </span> <span class="product-review">
                        (0 customer reviews)
                    </span>
                <div class="sku">
                  <label>SKU: </label> <span>{{$latestphones->sku}}</span> </div> <span class="left-in-stock">
                        Only
                        <span class="red">{{$latestphones->quantity}}</span> left </span>
                <div class="clearfix"></div>
                <h4 class="product-price pull-left">${{$price}}</h4>
                <div class="availability pull-left">
                  <label>Availability:</label> <span class="in-stock">In Stock</span> </div>
                <div class="clearfix"></div>
               <button type="submit" onclick="addtocart({{$latestphones->id}})" class="add-to-cart btn btn-primary pull-left" data-loading=""> Add to cart </button>
               <div class="clearfix"></div>
                <div class="add-to clearfix">
                  <button class ="add-to-compare-btn" type="button" onclick="addtocompare({{$latestphones->id}})">+ Add  to Compare</button>
                  @if(session()->get('id'))
                  <button onclick="addproducttowishlist({{$latestphones->id}})" class ="add-to-compare-btn" type="button">+ Add to Wishlist</button>
                  <button onclick="addtowishlist()" class ="add-to-compare-btn" type="button">+ Add to Wishlist</button>
                  @else
                  @endif
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    @endforeach
  </div>
</div>
</div>
<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
<div class="row">
  <div class="grid-products separator">
    @foreach($latestaccessory as $latestaccessorys)
    <?php
        if(session()->get('customertype') == 2){
          if (session()->get('tier') >= 1) {
            $decodeprice =json_decode($latestaccessorys->retailer_prices[session()->get('tier')]);;
            if ($decodeprice == null) {
              $price = $latestaccessorys->price;
            }else{
              $price = $decodeprice;
            }
          }else{
            $price = $latestaccessorys->price;
          }
        }else{
           $price = $latestaccessorys->price;
        }
        ?>
    <a class="product-card" href="{{url('productdetail')}}/{{$latestaccessorys->id}}">
      <div class="product-card-inner">
        <div class="product-image clearfix">
          <ul class="product-ribbon list-inline"> </ul>
          <div class="image-holder"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$latestaccessorys->image}}"> </div>
          <div onclick="return false" class="quick-view-wrapper" data-toggle="tooltip" data-placement="top" title="Quick View">
            <button type="button" class="btn btn-quick-view" data-slug="2.4a-qc-3.0-single-black-car-adapter-with-dual-usb-ports" onclick="getproductdetails({{$latestaccessorys->id}})"> <i class="fa fa-eye" aria-hidden="true"></i> </button>
          </div>
        </div> 
        <div class="product-content clearfix"> <span class="product-price">${{$price}}</span> <span class="product-name">{{$latestaccessorys->name}}</span> </div>
         <div onclick="return false">
        <div class="add-to-actions-wrapper">
         @if(session()->get('id'))
         <button onclick="addproducttowishlist({{$latestaccessorys->id}})" type="submit" class="btn btn-wishlist" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
         @else
         <button onclick="addtowishlist()" type="submit" class="btn btn-wishlist" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
         @endif
            <button onclick="addtocart({{$latestaccessorys->id}})"  class="btn btn-default btn-add-to-cart">  Add to Cart </button>
          <button  type="button" class="btn btn-compare" data-toggle="tooltip" data-placement="left" title="Add to Compare" onclick="addtocompare({{$latestaccessorys->id}})"> <i class="fa fa-bar-chart" aria-hidden="true"></i> </button>
          </div>
        </div>
      </div>
    </a>
<div class="modal product-discription-popup fade in" id="quick-view-modal{{$latestaccessorys->id}}" role="dialog" style=" padding-right: 17px;">
  <div class="modal-dialog  ">
    <div class="modal-content">
      <div class="modal-body clearfix ">
        <button type="button" class="btn-close" onclick="modalclose({{$latestaccessorys->id}})"> × </button>
        <div class="quick-view clearfix">
          <div class="col-md-4 col-sm-7">
            <div class="quick-view-image">
              <div class="base-image slick-initialized slick-slider">
                <div class="slick-list">
                  <div class="slick-track" style="opacity: 1; width: 347px; transform: translate3d(0px, 0px, 0px);">
                    <a class="base-image-inner slick-slide slick-current slick-active" href="http://wirelesswavestx.com/storage/app/public/media/1646742657.png" data-slick-index="0" aria-hidden="false" style="width: 347px;"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$latestaccessorys->image}}"> <span><i class="fa fa-search-plus" aria-hidden="true"></i></span> </a>
                  </div>
                </div>
              </div>
              <div class="additional-image slick-initialized slick-slider">
                <div class="slick-list draggable">

                  <div class="slick-track" style="opacity: 1; width: 164px; transform: translate3d(0px, 0px, 0px);">
                    <div class="thumb-image slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 154px;"> 
                      <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$latestaccessorys->image}}"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="quick-view-details">
              <div class="product-details text-left">
                <h2 class="product-name">{{$latestaccessorys->name}}</h2> <span class="product-rating">
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                </span> <span class="product-review">
                        (0 customer reviews)
                    </span>
                <div class="sku">
                  <label>SKU: </label> <span>{{$latestaccessorys->sku}}</span> </div> <span class="left-in-stock">
                        Only
                        <span class="red">{{$latestaccessorys->quantity}}</span> left </span>
                <div class="clearfix"></div>
                <h4 class="product-price pull-left">${{$price}}</h4>
                <div class="availability pull-left">
                  <label>Availability:</label> <span class="in-stock">In Stock</span> </div>
                <div class="clearfix"></div>
                <button type="submit" onclick="addtocart({{$latestaccessorys->id}})" class="add-to-cart btn btn-primary pull-left" data-loading=""> Add to cart </button>
                <div class="clearfix"></div>
                <div class="add-to clearfix">
                   <button class="add-to-compare-btn" type="button" onclick="addtocompare({{$latestaccessorys->id}})">+ Add to Compare</button>
                  @if(session()->get('id'))
                  <button onclick="addproducttowishlist({{$latestaccessorys->id}})" type="submit">+ Add to Wishlist</button>
                  @else
                  <button onclick="addtowishlist()" type="submit">+ Add to Wishlist</button>
                  @endif
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    @endforeach
  </div>
</div>
            </div>
          </div>
         <section>
          <section class="scp-sec">
            <div class="col-md-6"> <img src="{!! asset('public/assets/img/banner-md01.png') !!}" alt="slide" class="img-responsive"> </div>
            <div class="col-md-6"> <img src="{!! asset('public/assets/img/banner-md02.png') !!}" alt="slide" class="img-responsive"> </div>
          </section>
          <section class="subscribe-section">
            <div class="container">
              <div class="row">
                <div class="col-md-8 _subscribe-col">
                  <div class="_promo-detail">
                    <a href="#"><img src="public/storage/media/750x183-newsletter.png" class="img-responsive"></a>
                  </div>
                </div>
                <div class="col-md-4 _subscribe-col">
                  <div class="_news-letter">
                    <h4> Subscribe to our news and be aware of <strong>all sales!</strong></h4>
                    <div class="form-group">
                      <input id="newsletter-input" class="newsletters__text form-control form-control--skin-one" type="text" name="email" size="18" placeholder="Your e-mail">
                      <button type="submit" name="submitNewsletter" class="newsletters__btn btn"> <span>Subscribe</span> </button>
                      <input type="hidden" name="action" value="0">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section class="brands-wrapper">
        <div class="container">
          <div class="row">
            <div class="brands">
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand2.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand3.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand4.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand5.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand6.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand7.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand8.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand9.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand10.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand11.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand12.png') !!}"> </div>
              </div>
              <div class="col-md-3">
                <div class="brand-image"> <img src="{!! asset('public/assets/img/brand-slider/brand13.png') !!}"> </div>
              </div>
            </div>
          </div>
        </div>
      </section>





<script>
 function getproductdetails($id){
     $('#quick-view-modal'+$id).modal('show');
 }
 function modalclose($id){
     $('#quick-view-modal'+$id).modal('hide');  
 }

</script>
@endsection