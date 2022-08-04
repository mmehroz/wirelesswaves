<style>
.product-archive-page {
    width: 1530px !important;
    max-width: 1530px !important;
    margin: auto;
    margin-bottom: 60px;
    margin-top: 40px;
}


a.product-card {
    cursor: pointer;
}

.additional-image .thumb-image {
    height: 100px !important;
}

.modal-open .modal {
    background: #00000061;
}

.modal-dialog {
    align-items: center;
    justify-content: center;
    display: flex;
    height: 95%;
    width: 60%;
}

</style>
@extends('layouts.apptheme')
@section('appcontent')
  <body class="theme-blue slider_with_banners ltr">
      <div class  =" content-wrapper.clearfix ">
    <section class="product-archive-page">
      <div class="row">
        @include('customfilter')
        <div class="col-md-9 col-sm-12 mt-30">
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
          <div class="clearfix"></div>
          <div class="product-list-result clearfix">
            <div class="tab-content">
              <div id="grid-view" class="tab-pane active">
                <div class="row">
                  <div class="grid-products separator">
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
                    <a class="product-card" href="{{url('productdetail')}}/{{$phones->id}}">
                      <div class="product-card-inner">
                        <div class="product-image clearfix">
                          <ul class="product-ribbon list-inline"> </ul>
                          <div class="image-holder"><img src="https://wirelesswavestx.com/pos/public/assets/images/{{$phones->image}}"></div>
                          <div class="quick-view-wrapper" data-toggle="tooltip" data-placement="top" title="Quick View" onclick="return false">
                            <button type="button" class="btn btn-quick-view" data-slug="scp-zag-ivsglassp-iph6s-7-clr" onclick="getproductdetails({{$phones->id}})"> <i class="fa fa-eye" aria-hidden="true"></i> </button>
                          </div>
                        </div>
                        <div class="product-content clearfix"> <span class="product-price">${{$price}}</span> <span class="product-name">{{$phones->name}}</span> </div>
                        <div class="add-to-actions-wrapper">
                          <div onclick="return false">
                          @if(session()->get('id'))
                          <button type="submit" class="btn btn-wishlist" data-toggle="tooltip" data-placement="right" title="Add to Wishlist" onclick="addproducttowishlist({{$phones->id}})"> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
                          @else
                          <button type="submit" class="btn btn-wishlist" data-toggle="tooltip" data-placement="right" title="Add to Wishlist" onclick="addtowishlist()"> <i class="fa fa-heart-o" aria-hidden="true"></i> </button>
                          @endif
                          <button class="btn btn-default btn-add-to-cart" onclick="addtocart({{$phones->id}})"> Add to Cart </button>
                          <button type="submit" class="btn btn-compare" data-toggle="tooltip" data-placement="left" title="Add to Compare"  onclick="addtocompare({{$phones->id}})">  <i class="fa fa-bar-chart" aria-hidden="true"></i>  </button>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="modal fade in" id="quick-view-modal{{$phones->id}}" role="dialog" style=" padding-right: 17px;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body clearfix">
        <button type="button" class="btn-close" onclick="modalclose({{$phones->id}})"> × </button>
        <div class="quick-view clearfix">
          <div class="col-md-4 col-sm-7">
            <div class="quick-view-image">
              <div class="base-image slick-initialized slick-slider">
                <div class="slick-list">
                  <div class="slick-track" style="opacity: 1; width: 347px; transform: translate3d(0px, 0px, 0px);">
                    <a class="base-image-inner slick-slide slick-current slick-active" href="https://wirelesswavestx.com/pos/public/assets/images/{{$phones->image}}" data-slick-index="0" aria-hidden="false" style="width: 347px;"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$phones->image}}"> <span><i class="fa fa-search-plus" aria-hidden="true"></i></span> </a>
                  </div>
                </div>
              </div>
              <div class="additional-image slick-initialized slick-slider">
                <div class="slick-list draggable">
                  <div class="slick-track" style="opacity: 1; width: 164px; transform: translate3d(0px, 0px, 0px);">
                    <div class="thumb-image slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 154px;"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$phones->image}}"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-sm-12 col-xs-12">
            <div class="quick-view-details">
              <div class="product-details text-left">
                <h2 class="product-name">{{$categorytitle}}</h2> <span class="product-rating">
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                <i class="fa fa-star-o" aria-hidden="true"></i>
                </span> <span class="product-review">
                        (0 customer reviews)
                    </span>
                <div class="sku">
                  <label>SKU: </label> <span>{{$phones->sku}}</span> </div> <span class="left-in-stock">
                        Only
                        <span class="red">{{$phones->quantity}}</span> left </span>
                <div class="clearfix"></div>
                <h4 class="product-price pull-left">${{$price}}</h4>
                <div class="availability pull-left">
                  <label>Availability:</label> <span class="in-stock">In Stock</span> </div>
                <div class="clearfix"></div>
                  <div class="product-variants clearfix"> </div>
                  <button type="submit" class="add-to-cart btn btn-primary pull-left" data-loading="" onclick="addtocart({{$phones->id}})"> Add to cart </button>
                </form>
                <div class="clearfix"></div>
                <div class="add-to clearfix">
                  <button class ="add-to-compare-btn" type="submit" onclick="addtocompare({{$phones->id}})">+ Add to Compare</button>
                   <button class ="add-to-compare-btn" type="submit" onclick="addtowishlist()">+ Add to Wishlist</button>
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
                    <p id="toasts" class ='toggle-btn'>  </p>
                  </div>
                </div>
              </div>
              <div id="list-view" class="tab-pane "> </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
        </div>  
<script>
function getproductdetails($id){
     $('#quick-view-modal'+$id).modal('show');
}
function modalclose($id){
     $('#quick-view-modal'+$id).modal('hide');  
}
</script>
@endsection