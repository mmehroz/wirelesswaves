<style>

.alert-success {
    color: #0f5132;
       background: #3c763d14;
    border-color: #badbcc;
}

.alert-success {
    margin-top: 45px;
}

.compare  {
    overflow: scroll;
    width: 1400px;
}

.container.compare-section {
    width: 80% !important;
}

</style>
@extends('layouts.apptheme')
@section('appcontent')
<body class="theme-blue slider_with_banners ltr">
	@if(session()->get('iscompare') == 0)
	<div class="content-wrapper clearfix ">
		<div class="container">
			<div class="content-wrapper clearfix ">
				<div class="container">
                           
     
					<section class="compare">
						<h2 class="text-center">There are no product in compare list.</h2>
						<a href="{{url('/')}}" class="go-back-link"> <i class="fa fa-reply" aria-hidden="true"></i> Go Back </a>
					</section>
				</div>
			</div>
		</div>
	</div>
	@endif
  <div class="container compare-section">
	<section class="compare">
		<div class="table-responsive">
			<table class="table table-bordered">
				<tbody>
					<tr>
					<td>Product Overview</td>
					<?php
						$product = 4500;
				     ?>
					@for ($i = 1000; $i <= $product; $i++)
					<?php 
					$mergecomparesession = session()->get('compareid'.$i);
					?>
					@if($mergecomparesession == $i)
						<td class="product-overview">
							<div class="image-holder"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{session()->get('compareimage'.$i)}}"> </div>
							<h5>
                        		<a href="{{url('productdetail')}}/{{$i}}">{{session()->get('comparename'.$i)}}</a>
                        	</h5>
							<h5>
                        		<a href="{{url('productdetail')}}/{{$i}}">{{session()->get('compareprice'.$i)}}</a>
                        	</h5>
						</td>
					@endif
					@endfor
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</div>
@endsection