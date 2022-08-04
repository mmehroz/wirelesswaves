<div class="cart-total">
		@php $total = 0 @endphp
        @foreach((array) session('cart') as $id => $details)
            @php $total += $details['price'] * $details['quantity'] @endphp
        @endforeach 
		<h3>Cart Totals</h3> <span class="item-amount">
		Subtotal
		<span>$ {{ $total }}</span> </span>
		<div class="available-shipping-methods"> <span>Shipping Method</span>
			<div class="form-group">
				<div class="radio">
					<input type="radio" name="shipping_method" class="shipping-method" value="local_pickup" id="local_pickup" checked="">
					<label for="local_pickup">Local Pickup</label> <span class="pull-right">$0.00</span> </div>
				<div class="radio">
					<input type="radio" name="shipping_method" class="shipping-method" value="flat_rate" id="flat_rate">
					<label for="flat_rate">Flat Rate Shipping</label> <span class="pull-right">$20.00</span> </div>
			</div>
			<input type="hidden" id="hdntotalamount" value="{{$total}}">
			<input type="hidden" id="hdnshippingamount" value="20">
		</div> 
		<span class="total">Total
			<span id="grosstotal">$ {{ $total }}</span>
		</span>
		@if(isset($coupon))
		<span class="total">Coupon Verified?
			<span id="verify">{{$coupon['isverify']}}</span>
		</span>
		@endif
		<span class="total">Discount
			@if(isset($coupon))
			<span id="total-discount">{{$coupon['disscount']}} %</span>
			@else
			<span id="total-discount">0</span>
			@endif
		</span>
		<span class="total">Net Total
			@if(isset($coupon))
			@if($coupon['disscount'] == 0)
			<span id="total-amount">$ {{ $total }}</span>
			@else
			<?php
			$netamount = $coupon['disscount'] / 100 * $total;
			$finalnetamount = $total - $netamount;
			?>
			<span id="total-amount">$ {{$finalnetamount}}</span>
			@endif
			@else
			<span id="total-amount">$ {{ $total }}</span>
			@endif
		</span>
		<a href="{{url('/checkout')}}" class="btn btn-primary btn-checkout " data-loading="">
Checkout
</a> 
</div>