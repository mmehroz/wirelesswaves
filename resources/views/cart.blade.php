@extends('layouts.apptheme')
@section('appcontent')
<body class="theme-blue slider_with_banners ltr">
<div class="content-wrapper clearfix cart-page">
	<div class="container">
		<div class="row">
			<div class="cart-list-wrapper clearfix">
				<div class="col-md-8">
					<div class="box-wrapper clearfix">
						<div class="box-header">
							<h4>Cart</h4> </div>
						<div class="cart-list">
				<div class="table-responsive">
					<table class="table" id="viewcart">
						@include('viewcart')
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="order-review cart-list-sidebar" id="carttotal">
			@include('carttotal')
		</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script>
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
	 $(".update-cart").click(function (e) {
        e.preventDefault();
  
        var ele = $(this);
  
        $.ajax({
            url: '{{ url("/updatecart") }}',
            method: "patch",
            data: {
                _token: '{{ csrf_token() }}', 
                id: ele.parents("tr").attr("data-id"), 
                quantity: parseInt(ele.parents("tr").find(".quantitycart").val())+1
            },

            success: function (data) {
            	$('#carttotal').empty().append(data);
               // window.location.reload();
            }
        });
    });
	 $(".update-cart-negative").click(function (e) {
        e.preventDefault();
  
        var ele = $(this);
  
        $.ajax({
            url: '{{ url("/updatecart") }}',
            method: "patch",
            data: {
                _token: '{{ csrf_token() }}', 
                id: ele.parents("tr").attr("data-id"), 
                quantity: parseInt(ele.parents("tr").find(".quantitycart").val())-1
            },

            success: function (data) {
            	$('#carttotal').empty().append(data);
               // window.location.reload();
            }
        });
    });
	   $(".remove-from-viewcart").click(function (e) {
                  e.preventDefault();
            
                  var ele = $(this);
                  if(confirm("Are you sure want to remove?")) {
                      $.ajax({
                          url: '{{ url('removefromviewcart') }}',
                          method: "DELETE",
                          data: {
                              _token: '{{ csrf_token() }}', 
                              id:document.getElementById("hdnid").value
                          },
                          success: function (data) {
                             $('#viewcart').empty().append(data);
                             console.log(data)
                              // window.location.reload();
                          }
                      });
                  }
              });
</script>
@endsection