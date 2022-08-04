<tbody>
@if(session('cart'))
@foreach(session('cart') as $id => $details)
<tr class="cart-item" data-id="{{ $id }}">
	<input type="hidden" name="hdnid" id="hdnid" value="{{ $id }}">
	<td>
		<div class="image-holder"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$details['image']}}"> </div>
	</td>
	<td>
		<h5>
	    <a href="">{{ $details['name'] }}</a>
	</h5>
		<div class="option"> </div>
	</td>
	<td>
		<label>Price:</label> <span>${{ $details['price'] }}</span> </td>
	<td class="clearfix" data-th="Quantity">
		<div class="quantity pull-left clearfix">
			<div class="input-group-quantity pull-left clearfix">
				<input type="text" name="quantity" value="{{ $details['quantity'] }}" class="input-number input-quantity pull-left qty-0 quantitycart" min="1" max="10"> <span class="pull-left btn-wrapper">
				 <!-- <button type="button" class="btn btn-number update-cart"> Update </button> -->
        <button type="button" class="btn btn-number btn-plus update-cart" data-type="plus"> + </button>
        <button type="button" class="btn btn-number btn-minus update-cart-negative" data-type="minus"> – </button>
    </span> </div>
		</div>
	</td>
	<td>
	<button class="btn btn-danger btn-sm remove-from-viewcart"><i class="fa fa-trash-o"></i></button>
	</td>
	</td>
</tr>
@endforeach
@endif
</tbody>