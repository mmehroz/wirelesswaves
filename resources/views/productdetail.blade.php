<style type="text/css">
    .sku.mb-10 {
    position: relative;
    top: 70px;
}

span.product-rating {
    position: relative;
    top: -35px;
}

span.product-review.mb-10 {
    position: relative;
    top: -34px;
}

.product-details > .product-price {
    background: unset !important;
    color: #555555 !important;
    position: relative;
    top: -83px;
    font-size: 26px !important;
    left: -4px;
}

.product-details .left-in-stock {
    position: relative;
    bottom: -28px;
}

.product-details .availability {
    position: relative;
    left: -80px;
    top: 15px;
}

.product-details .availability {
    margin-left: 9px;
}

.sku.mb-10 {position: relative;top: 52px;}

.availability.pull-left {margin: 0;}
.average-rating .product-rating {
    margin-top: 44px !important;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

 
 #description{
 	display: none;
 	width: 56%;
 }


 
.sku.mb-10 {
	position: relative;top: 52px !important;
}

.availability.pull-left {
	margin: 0 !important;
}
.average-rating .product-rating {
    margin-top: 44px !important;
    -webkit-box-pack: center !important;
    -ms-flex-pack: center !important;
    justify-content: center !important;
}


@media screen and (max-width: 991px){
img#base_image_path {
    position: relative !important;
    width: inherit !important;
    top: 160px !important;
}

.product-details .availability {

    margin: 0 0 10px;
    clear: inherit !important;
}

.product-details > .product-price {
    top: -65px !important;
}
}
</style>
@extends('layouts.apptheme')
@section('appcontent')
<?php
if(session()->get('customertype') == 2){
  if (session()->get('tier') >= 1) {
    $decodeprice =json_decode($product->retailer_prices[session()->get('tier')]);;
    if ($decodeprice == null) {
      $price = $product->price;
    }else{
      $price = $decodeprice;
    }
  }else{
    $price = $product->price;
  }
}else{
   $price = $product->price;
}
?>
<body class="theme-blue slider_with_banners ltr">
    
        <div class="content-wrapper clearfix  single-procuct-page">
            <div class="container">
                <div class="breadcrumb">
                    <ul class="list-inline">
                        <li><a href="{{url('/')}}"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                        <li class="active">{{$product->name}}</li>
                    </ul>  
                </div>
                <div class="product-details-wrapper">
                 <div class="row">
                    <input type="hidden" name="hiddenid" id="hiddenid" value="{{ $product->id }}">
                        <div class="col-lg-5 col-md-6 col-sm-5 col-xs-7" id="load_color_images">
                            <div class="product-image">
                                <div class="base-image">
                                    <a class="base-image-inner" href="https://wirelesswavestx.com/pos/public/assets/images/{{$product->image}}"> <img id="base_image_path" src="https://wirelesswavestx.com/pos/public/assets/images/{{$product->image}}"> <span><i class="fa fa-search-plus" aria-hidden="true"></i></span> </a>
                                </div>
                                <div class="additional-image">
                                    <div class="thumb-image"> 
                                    <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$product->image}}">
                                    </div>
                                    @foreach($productgallery as $productgallerys)
                                    <div class="thumb-image"> 
                                    <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$productgallerys->image}}">
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-7 col-xs-12">
                            <div class="product-details">
                                <h1 class="product-name">{{$product->name}}</h1>
                                <div class="sku mb-10">
                                    <label>SKU: </label> <span>{{$product->sku}}</span> </div> <span class="product-rating">
                                    <i class="fa fa-star-o color-star"></i>
                                    <i class="fa fa-star-o color-star"></i>
                                    <i class="fa fa-star-o color-star"></i>
                                    <i class="fa fa-star-o color-star"></i>
                                    <i class="fa fa-star-o color-star"></i>
                               </span> <span class="product-review mb-10">
                                    (107 customer reviews)
                                    </span> <span class="left-in-stock mb-10">
                                    Only
                                    <span class="red">{{$product->quantity}}</span> left </span>
                                                    <div class="clearfix"></div> <span class="product-price pull-left">${{$price}}</span>
                                <div class="availability pull-left">
                                    <label>Availability:</label> <span class="in-stock">In Stock</span> </div>
                                <div class="clearfix"></div>
                                    <div class="product-variants clearfix"> </div>
                                   <div class="quantity pull-left clearfix">
                                        <div class="input-group-quantity pull-left clearfix">
                                            <input type="text" name="quantity" id="quantity" value="1" class="input-number input-quantity pull-left qty-0 quantitycart" min="1" max="10"> <span class="pull-left btn-wrapper">
                                             <!-- <button type="button" class="btn btn-number update-cart"> Update </button> -->
                                    <button type="button" class="btn btn-number btn-plus update-cart" data-type="plus"> + </button>
                                    <button type="button" class="btn btn-number btn-minus update-cart-negative" data-type="minus"> – </button>
                                </span> </div>
                                    </div>
                                    <button type="submit" class="add-to-cart btn btn-primary pull-left" data-loading onclick="addtocart({{$product->id}})"> Add to cart </button>
                                <div class="clearfix"></div>
                                <div class="add-to clearfix">
                                    @if(session()->get('id'))
                                    <button type="submit" onclick="addproducttowishlist({{$product->id}})">+ Add to Wishlist</button>
                                    @else
                                    <button type="submit" onclick="addtowishlist()">+ Add to Wishlist</button>
                                    @endif
                                    <button type="submit" onclick="addtocompare({{$product->id}})">+ Add to Compare</button>
                                </div>
                            </div>
                        </div>
                    </div>
                  <div class="row">
                        <div class="col-md-12">
                            <div class="tab product-tab clearfix">
                                <ul class="nav nav-tabs">
                                    <li class="active"> <a data-toggle="tab" href="#reviews" onclick="viewreview()">Reviews</a> </li>
                                    <li class=" "> <a data-toggle="tab" href="#description" onclick="viewdescription()">Description</a> </li>
                                </ul>
                                <div class="tab-content">
                                                      
<div id="reviews" class="reviews tab-pane fade in clearfix active in">
    <div class="row">
        <div class="col-lg-4 col-md-5" id="rating-reviews-div">
    <div class="rating">
        <div id="average-rating-id" class="average-rating clearfix">
            <div class="average">
                <span>107</span>
            </div>
            <span class="product-rating">
                <i class="fa fa-star-o color-star"></i>
                <i class="fa fa-star-o color-star"></i>
                <i class="fa fa-star-o color-star"></i>
                <i class="fa fa-star-o color-star"></i>
                <i class="fa fa-star-o color-star"></i>
            </span>
            <span class="rate-of-average">
                5 out of 5
            </span>
            <span class="reviews-total">107 customer reviews</span>
        </div>
        <div class="rating-bars-wrapper clearfix">
            <div class="rating-bar">
                <span class="rating-label">5 star</span>
                <div class="progress">
                    <div class="progress-bar 100-percent" style="width: 0%"></div>
                </div>
                <span class="rating-percentage ">100%</span>
            </div>
            <div class="rating-bar">
                <span class="rating-label">4 star</span>
                <div class="progress ">
                    <div class="progress-bar 80-percent" style="width: 0%"></div>
                </div>
                <span class="rating-percentage">80%</span>
            </div>
            <div class="rating-bar">
                <span class="rating-label">3 star</span>
                <div class="progress">
                    <div class="progress-bar 60-percent" style="width: 0%"></div>
                </div>
                <span class="rating-percentage ">60%</span>
            </div>
            <div class="rating-bar">
                <span class="rating-label">2 star</span>
                <div class="progress ">
                    <div class="progress-bar 40-percent" style="width: 0%"></div>
                </div>
                <span class="rating-percentage  ">40%</span>
            </div>
            <div class="rating-bar">
                <span class="rating-label">1 star</span>
                <div class="progress ">
                    <div class="progress-bar 20-percent" style="width: 0%"></div>
                </div>
                <span class="rating-percentage">30%</span>
            </div>
        </div>
    </div>
</div>
        <div class="col-lg-8 col-md-7">
            <div class="review-form clearfix">
                <form method="POST" action="{{url('/submitreview')}}" class="clearfix">
                    {{ csrf_field() }}
                    <h3>Add a Review</h3>
                    <span>
                        Your Rating
                        <span class="rating-required">*</span>
                    </span>
                <div class="clearfix"></div>
                    <fieldset class="rating">
                        <input type="radio" id="star-5" name="review_rating" value="5">
                        <label class="full" for="star-5" data-toggle="tooltip" title="5 star"></label>

                        <input type="radio" id="star-4" name="review_rating" value="4">
                        <label class="full" for="star-4" data-toggle="tooltip" title="4 star"></label>

                        <input type="radio" id="star-3" name="review_rating" value="3">
                        <label class="full" for="star-3" data-toggle="tooltip" title="3 star"></label>

                        <input type="radio" id="star-2" name="review_rating" value="2">
                        <label class="full" for="star-2" data-toggle="tooltip" title="2 star"></label>

                        <input type="radio" id="star-1" name="review_rating" value="1">
                        <label class="full" for="star-1" data-toggle="tooltip" title="1 star"></label>
                    </fieldset>
                <div class="clearfix"></div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label for="reviewer-name">
                                    Name<span>*</span>
                                </label>
                                <input type="text" name="reviewer_name" class="form-control" id="review_name"  required>
                            </div>
                        </div>
                       <div class="col-md-12">
                            <div class="form-group ">
                                <label for="comment">
                                    Your Review<span>*</span>
                                </label>
                                <textarea name="review_comment" class="form-control" id="comment" cols="30" rows="10" required></textarea>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <button type="submit" class="btn btn-primary review-submit" data-loading>
                            Add Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div id="description" class="description tab-pane fade in clearfix">
     <div class="description-para">
    	<p>
    	   {!!$product->content!!}
        </p>
     </div>
</div>

                    </div>
                </div>
            </div>
        </div>
</div>
</div>
</div>            
 <script>
     $(".update-cart").click(function (e) {
        e.preventDefault();

        var ele = $(this);

        $.ajax({
            url: '{{ url("/updatecartdetail") }}',
            method: "patch",
            data: {
                _token: '{{ csrf_token() }}', 
                id:document.getElementById("hiddenid").value,
                quantity:parseInt(document.getElementById("quantity").value)+1
            },

            success: function (data) {
                $('#modals').empty().append(data);
               // window.location.reload();
            }
        });
    });
    $(".update-cart-negative").click(function (e) {
        e.preventDefault();

        var ele = $(this);

        $.ajax({
            url: '{{ url("/updatecartdetail") }}',
            method: "patch",
            data: {
                _token: '{{ csrf_token() }}', 
                id:document.getElementById("hiddenid").value,
                quantity:parseInt(document.getElementById("quantity").value)-1
            },

            success: function (data) {
                $('#modals').empty().append(data);
               // window.location.reload();
            }
        });
    });

 // Ratings and description tabs script

function viewdescription() {
  document.getElementById("description").style.display = "block";
  document.getElementById("rating-reviews-div").style.display = "none";
}
function viewreview() {
  document.getElementById("description").style.display = "none";
  document.getElementById("rating-reviews-div").style.display = "block";
}
</script>       
@endsection  