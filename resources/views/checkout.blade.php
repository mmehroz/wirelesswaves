@extends('layouts.apptheme')
@section('appcontent')
<script src="https://www.paypal.com/sdk/js?client-id={{ env('PAYPAL_SANDBOX_CLIENT_ID') }}"></script>
<style>
	a.btn.btn-primary.m-3 {
    margin-left: 58px;
}

.payment .payment-method>li {
    display: block;
    margin-bottom: 15px;
    padding: 16px;
}
ul.list-inline.payment-method.clearfix {
	display: inline-table;
}

i.fa.fa-address-card-o {padding: 12px;}

i.fa.fa-credit-card {padding: 12px;}

ul.list-inline.payment-method.clearfix {display: inline-table;}
</style>
</head>
	<body class="theme-blue slider_with_banners ltr">
		<div class="content-wrapper clearfix ">
			<div class="container">
				@if(\Session::has('error'))
			        <div class="alert alert-danger">{{ \Session::get('error') }}</div>
			        {{ \Session::forget('error') }}
			    @endif
			    @if(\Session::has('success'))
			        <div class="alert alert-success">{{ \Session::get('success') }}</div>
			        {{ \Session::forget('success') }}
			    @endif
				<section class="checkout">
					<form method="POST" action="{{ url('submitcheckout') }}" id="checkout-form">
						{{ csrf_field() }}
						<div class="row">
							<div class="col-md-8">
								<div class="wizard">
									<div class="wizard-inner">
										<div class="progress" style="width:49.33%!important">
											<div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="3"></div>
										</div>
										<ul class="nav nav-tabs" role="tablist">
											<li role="presentation" class="address-tab active" style="width:48.33%!important"> <a href="#address" data-toggle="tab" aria-controls="step1" role="tab" data-step="1">
				Address

				<span class="round-tab"><i class="fa fa-address-card-o" aria-hidden="true"></i></span>
			</a> </li>
											<li role="presentation" class="disabled payment-tab" style="width:48.33%!important"> <a href="#payment" data-toggle="tab" aria-controls="step2" role="tab" data-step="2">
				Payment

				<span class="round-tab"><i class="fa fa-credit-card" aria-hidden="true"></i></span>
			</a> </li>
										</ul>
									</div>
									<div class="tab-content">
										<div id="address" class="tab-pane active" role="tabpanel">
											<div class="box-wrapper address clearfix">
												<div class="box-header">
													<h4>Address</h4> </div>
												<div class="personal-information clearfix">
													<h5>Personal Information</h5>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="customer-email"> First Name<span>*</span> </label>
															<input type="text" required="" name="customer_fname" class="form-control" id="customer-customer_fname" value=""> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="customer-phone"> Last Name </label>
															<input type="text" name="customer_lname" class="form-control" id="customer-lname" value=""> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="customer-email"> Email<span>*</span> </label>
															<input type="email" required="" name="customer_email" class="form-control" id="customer-email" value=""> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="customer-phone"> Phone </label>
															<input type="text" name="customer_phone" class="form-control" id="customer-phone" value=""> </div>
													</div>
													<div class="clearfix"></div>
													<div class="col-md-6">
														<div class="create-account clearfix">
															<div class="checkbox">
																<input type="hidden" name="create_an_account" value="0">
																<input type="checkbox" name="create_an_account" id="create-an-account" value="1">
																<label for="create-an-account"> Create an account? </label>
															</div>
															<div class="form-group hide">
																<label for="password"> Password<span>*</span> </label>
																<div class="col-md-12">
																	<div class="row">
																		<div class="form-group">
																			<input type="password" name="password" class="form-control" id="password"> </div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div class="billing-address clearfix">
													<h5>Billing Address</h5>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="billing-first-name"> First Name<span>*</span> </label>
															<input type="text" required="" name="billing[first_name]" value="" class="form-control" id="billing-first-name"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="billing-last-name"> Last Name<span>*</span> </label>
															<input type="text" required="" name="billing[last_name]" value="" class="form-control" id="billing-last-name"> </div>
													</div>
													<div class="col-md-12">
														<div class="form-group ">
															<label for="billing-1"> Address 1<span>*</span> </label>
															<input type="text" required="" name="billing[address_1]" value="" class="form-control" id="billing-address-1"> </div>
													</div>
													<div class="col-md-12">
														<div class="form-group ">
															<label for="billing-2"> Address 2 </label>
															<input type="text" name="billing[address_2]" value="" class="form-control" id="billing-address-2"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="billing-city"> City<span>*</span> </label>
															<input type="text" required="" name="billing[city]" value="" class="form-control" id="billing-city"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="billing-zip"> Postcode / ZIP<span>*</span> </label>
															<input type="text" required="" name="billing[zip]" value="" class="form-control" id="billing-zip"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="billing-country"> Country<span>*</span> </label>
															<select name="billing[country]" required="" class="custom-select-black" id="billing-country">
																<option value="US"> United States </option>
															</select>
														</div>
													</div>
													<div class="col-md-6 Test-aurangzeb">
														<div class="form-group ">
															<label for="billing-state"> State / Province<span>*</span> </label>
															<input type="text" required="" name="billing[state]" value="" class="form-control" id=""> </div>
													</div>
												</div>
												<div class="checkbox ship-to-a-different-address">
													<input type="hidden" name="ship_to_a_different_address" value="0">
													<input type="checkbox" name="ship_to_a_different_address" id="ship-to-a-different-address" value="1">
													<label for="ship-to-a-different-address"> Ship to a different address </label>
												</div>
												<div class="shipping-address clearfix hide">
													<h5>Shipping Address</h5>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="shipping-first-name"> First Name<span>*</span> </label>
															<input type="text" name="shipping[first_name]" value="" class="form-control" id="shipping-first-name"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="shipping-last-name"> Last Name<span>*</span> </label>
															<input type="text" name="shipping[last_name]" value="" class="form-control" id="shipping-last-name"> </div>
													</div>
													<div class="col-md-12">
														<div class="form-group ">
															<label for="shipping-1"> Address 1<span>*</span> </label>
															<input type="text" name="shipping[address_1]" value="" class="form-control" id="shipping-address-1"> </div>
													</div>
													<div class="col-md-12">
														<div class="form-group ">
															<label for="shipping-2"> Address 2 </label>
															<input type="text" name="shipping[address_2]" value="" class="form-control" id="shipping-address-2"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="shipping-city"> City<span>*</span> </label>
															<input type="text" name="shipping[city]" value="" class="form-control" id="shipping-city"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="shipping-zip"> Postcode / ZIP<span>*</span> </label>
															<input type="text" name="shipping[zip]" value="" class="form-control" id="shipping-zip"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="shipping-country"> Country<span>*</span> </label>
														<input type="text" name="shipping[country]" value="" class="form-control" id="shipping-country"> </div>
													</div>
													<div class="col-md-6">
														<div class="form-group ">
															<label for="shipping-state"> State / Province<span>*</span> </label>
															<input name="shipping[state]" class="form-control" id="shipping-state"> </div>
													</div>
												</div>
												<button type="button" class="btn btn-primary next-step continue-button pull-right"> Continue </button>
											</div>
										</div>
										<div id="payment" class="tab-pane" role="tabpanel">
											<div class="box-wrapper payment clearfix">
												<div class="box-header">
													<h4>Payment Method</h4> </div>
												<ul class="list-inline payment-method clearfix">
													<li>
														<div class="form-group radio">
															<input type="radio" name="payment_method" value="paypal_express" id="paypal_express" checked="">
															<label for="paypal_express">PayPal</label>
														</div>
														
														
													</li>

													<li>
														<div class="form-group radio">
															<input type="radio" name="payment_method" value="credit_card" id="credit_card">
															<label for="credit_card">Credit Card</label>
														</div>

														<div class="creditdebit_form payment-gateway" data-key="credit_card" style="display:none">
															<label>Credit / Debit Card Details</label>
															<br>
															<div class="row">
																<div class="col-md-12">
																	<div class="form-group">
																		<div class="block">
																			<label>* Card Number</label>
																		</div>
																		<input type="text" id="ccnum" class="input-form form-control" name="cardNumber" placeholder="Card Number"> </div>
																</div>
															</div>
															<div class="row">
																<div class="col-md-6">
																	<div class="form-group">
																		<div class="block">
																			<label>* Expiration Date</label>
																		</div>
																		<input type="text" id="expiry" class="input-form form-control" name="expirationDate" placeholder="MM/YY"> </div>
																</div>
																<div class="col-md-6">
																	<div class="form-group">
																		<div class="block">
																			<label>* Security Code (CVV)</label>
																		</div>
																		<input type="text" id="cvc" class="input-form form-control" name="cardCode" placeholder="Security Code CVV"> </div>
																</div>
															</div>
															<div class="row">
																<div class="col-md-12">
																	<div class="form-group">
																		<div class="block">
																			<label>* Card Holder Name</label>
																		</div>
																		<input type="text" class="input-form form-control" name="cardName" placeholder="Card Holder Name"> </div>
																</div>
															</div>
														</div>
														<?php
															$customer_credit = DB::table('customer')
													        ->select('retailer_customer.credit_usage','retailer_customer.credit_limit','retailer_customer.credit_line_status')
													        ->join('retailer_customer', 'retailer_customer.customer_id', '=', 'customer.id')
													        ->where('retailer_customer.customer_id','=',session()->get('id'))
													        ->where('customer.status','=',1)
													        ->first();
													        if (isset($customer_credit)) {
													        	if ($customer_credit->credit_line_status == 1) {
													        		$limit 	= $customer_credit->credit_limit == NULL ? 0 : $customer_credit->credit_limit;
													        		$usage 	= $customer_credit->credit_usage == NULL ? 0 : $customer_credit->credit_usage;
													        		$status = 1;
													        	}else{
													        		$limit 	= 0;
													        		$usage 	= 0;
													        		$status = 0;
													        	}
													        }else{
													        		$limit 	= 0;
													        		$usage 	= 0;
													        		$status = 0;
													        }
															?>
													</li>
													<a class="btn btn-primary m-3" href="{{ route('processTransaction') }}">Pay Now</a>
													@if($status == 1)
													<li>
														<div class="form-group radio">
															<input type="radio" name="payment_method" value="credit_line" id="credit_line">
															<label for="credit_line">Credit Line</label>
														</div>
														<div class="creditdebit_form creditline-gateway" data-key="credit_card" style="display:none">
															
															<label>Allowed Credit Line Details</label>
															<br>
															<div class="row">
																<div class="col-md-6">
																	<div class="form-group">
																		<div class="block">
																			<label>Credit Limit</label>
																		</div>
																		<label>{{$limit}}</label>
																</div>
																<div class="col-md-6">
																	<div class="form-group">
																		<div class="block">
																			<label>Credit Usage</label>
																		</div>
																		<label>{{$usage}}</label>
																</div>
													</li>
													@endif
												</ul>
												<label for="credit_line">Coupon No</label>
												<input type="text" name="chkcoupon" id="chkcoupon">
												<button type="button" onclick="verifycoupon()">Verify</button>
												<div class="available-shipping-methods">
													<div class="box-header"> <span style="font-weight:700">Shipping Method</span> </div>
												</div>
												<div class="checkout-terms checkbox text-center">
													<input type="checkbox" name="terms_and_conditions" id="terms-and-conditions">
													<label for="terms-and-conditions"> I agree to the <a href="{{url('/termsofuse')}}">terms &amp; conditions</a> </label>
												</div>
												<div class="checkout-terms checkbox text-center">
													<button type="submit" style="margin-top:15px;" class="btn btn-primary btn-checkout  " data-loading="" disabled=""> Place Order </button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="checkout-sidebar order-review">
									@include('carttotal')
								</div>
							</div>
						</div>
					</form>
				</section>
			</div>
		</div>
<script>
	function verifycoupon(){
		var code = $('#chkcoupon').val();
    	$.get('{{ URL::to("/verifycoupon")}}/'+code,function(data){
        $('.cart-total').empty().append(data);
      });
  	}
	var total = $('#hdntotalamount').val();
	var shipping = $('#hdnshippingamount').val();
	var netamount = parseInt(total)+parseInt(shipping);
	$('input[name=shipping_method]').on('change', function(){
		 if (this.value == 'flat_rate') {
	    	$('#total-amount').html(netamount);
	    }else{
	    	$('#total-amount').html(total);
	    }
	});
	$('input[name=payment_method]').on('change', function(){
		 if (this.value == 'credit_card') {
	    	$('.payment-gateway').show();
	    	$('.m-3').hide();
	    	$('.creditline-gateway').hide();
	    }else if (this.value == 'credit_line') {
	    	$('.creditline-gateway').show();
	    	$('.payment-gateway').hide();
	    	$('.m-3').hide();
	    }else{
	    	$('.m-3').show();
	    	$('.creditline-gateway').hide();
	    	$('.payment-gateway').hide();
	    }
	});
</script>
		@endsection
		