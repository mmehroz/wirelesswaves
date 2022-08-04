@php $total = 0 @endphp
@foreach((array) session('cart') as $id => $details)
    @php $total += $details['price'] * $details['quantity'] @endphp
@endforeach 
@php $qty = 0 @endphp
@foreach((array) session('cart') as $id => $details)
    @php $qty += 1  @endphp
@endforeach 
 <div class="user-cart-inner dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-shopping-bag pull-left" aria-hidden="true"></i> <span class="cart-count">{{$qty}}</span>
                        <div style="display: none;"></div>
                        <div class="cart-amount hidden-sm hidden-xs pull-left"> <span class="cart-label">My Cart</span>
                          <br> <span class="cart-price">$ {{ $total }}</span> </div>
                      </div>
                      <div class="dropdown-menu">
                        <h5 class="mini-cart-title">My Cart</h5>
                        <div class="mini-cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                          <h3 class="empty-cart">Your cart is empty</h3> 
                      @if(session('cart'))
                      @foreach(session('cart') as $id => $details)
                       <input type="hidden" name="hdnid" id="hdnid" value="{{ $id }}">
                      <div class="mini-cart-item clearfix" data-id="{{ $id }}">
                        <div class="mini-cart-image"> <img src="https://wirelesswavestx.com/pos/public/assets/images/{{$details['image']}}"> </div>
                        <div class="mini-cart-details clearfix"> <a class="product-name" href="{{url('productdetail')}}/{{$id}}}">
                              {{ $details['name'] }}
                          </a> <span class="product-price pull-right">
                             ${{ $details['price'] }}
                          </span> <span class="product-quantity pull-right">
                              {{ $details['quantity'] }}
                          </span>
                             <button class="btn btn-danger btn-sm remove-from-cart"><i class="fa fa-trash-o"></i></button>
                        </div>
                      </div>
                     @endforeach
                    @endif
              </div> 
           <span class="subtotal">
                    Subtotal: <span>$ {{ $total }}</span>
                    </span>
                    <div class="mini-cart-buttons text-center">
                    <a href="{{url('/cart')}}" class="btn btn-primary btn-view-cart">
                        View Cart
                    </a>
                    <a href="{{url('/checkout')}}" class="btn btn-default btn-checkout">
                        Checkout
                    </a>
                </div>

           </div>
               <script>
                  $(".remove-from-cart").click(function (e) {
                  e.preventDefault();
            
                  var ele = $(this);
                  if(confirm("Are you sure want to remove?")) {
                      $.ajax({
                          url: '{{ url('removefromcart') }}',
                          method: "DELETE",
                          data: {
                              _token: '{{ csrf_token() }}', 
                              id:document.getElementById("hdnid").value
                          },
                          success: function (data) {
                             $('#modals').empty().append(data);
                              // window.location.reload();
                          }
                      });
                  }
              });
               </script>