<head>
    <link rel="stylesheet" href="profile.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<!--     <link rel="stylesheet" href="{!! asset('public/assets/css/app.css') !!}">
  <link rel="stylesheet" href="{!! asset('public/assets/css/custom.css') !!}"> -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
<style>
  /* Profile container */
  .profile {
    margin: 20px 0;
  }
  
  /* Profile sidebar */
  .profile-sidebar {
    padding: 20px 0 10px 0;
    background: #fff;
  }
  .col-md-3{
  padding:0 0 0 15px;
  }
  
  .profile-userpic img {
    float: none;
    margin: 0 auto;
    width: 50%;
    height: 50%;
    -webkit-border-radius: 50% !important;
    -moz-border-radius: 50% !important;
    border-radius: 50% !important;
  }
  
  .profile-usertitle {
    text-align: center;
    margin-top: 20px;
  }
  
  .profile-usertitle-name {
    color: #5a7391;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 7px;
    text-align: initial;
  }
  
  .profile-usertitle-job {
    text-transform: uppercase;
    color: #5b9bd1;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 15px;
  }
   
  .profile-usermenu {
    
    padding:0px !important;
  }
  
  .profile-usermenu ul li {
    border-bottom: 1px solid #f0f4f7;
    margin-bottom: 40px;
  }
  
  .profile-usermenu ul li:last-child {
    border-bottom: none;
  }
  
  .profile-usermenu ul li a {
    color: #93a3b5;
    font-size: 14px;
    font-weight: 400;
    font-size: 21px;
  }
  
  .profile-usermenu ul li a i {
    margin-right: 8px;
    font-size: 14px;
  }
  
 .profile-usermenu ul li a:hover {
   text-decoration: none;
  }
  
  .profile-usermenu ul li.active {
    border-bottom: none;
  }
  
  .profile-usermenu ul li a.active {
    color: #474747;
    background-color: #f6f9fb;
    border-left: 2px solid #e9420b;
    text-decoration: none;
    padding: 10px;
  }
  
  /* order Content */
  .order-content {
    padding: 20px;
    background: #F9F9F9;
    min-height: 460px;
  }
  .form_main {
      width: 100%;
  }
  .form_main h4 {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 15px;
    margin-top: 20px;
    text-transform: uppercase;
    color: #474747;
}
  .heading {
      border-bottom: 1px solid #A9A59F;
      padding-bottom: 9px;
      position: relative;
  }
  .heading span {
      background: #6D6C6A none repeat scroll 0 0;
      bottom: -2px;
      height: 3px;
      left: 0;
      position: absolute;
      width: 75px;
  }   
  .form {
      border-radius: 7px;
      padding: 6px;
  }
  .txt[type="text"] {
      border: 1px solid #ccc;
      margin: 5px 0;
      padding: 4px 0 4px 5px;
      border-radius:5px;
      width: 80%;
  }
  .txt[type="password"] {
      border: 1px solid #ccc;
      margin: 5px 0;
      padding: 4px 0 4px 5px;
      border-radius:5px;
      width: 80%;
  }
  .txt2[type="submit"] {
      background: #949390 none repeat scroll 0 0;
      border: 1px solid #949390;
      border-radius: 10px;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      line-height: 35px;
      margin: 10px 0;
      padding: 0;
      
      width: 12%;
  }
  .txt2:hover {
      background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
      color: #949390;
      transition: all 0.5s ease 0s;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  a, button, code, div, img, input, label, li, p, pre, select, span, svg, table, td, textarea, th, ul {
      -webkit-border-radius: 0!important;
      -moz-border-radius: 0!important;
      border-radius: 0!important;
  }
  .dashboard-stat, .portlet {
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      -ms-border-radius: 4px;
      -o-border-radius: 4px;
  }
  .portlet {
      margin-top: 0;
      margin-bottom: 25px;
      padding: 0;
      border-radius: 4px;
  }
  .portlet.bordered {
      border-left: 2px solid #e6e9ec!important;
  }
  .portlet.light {
      padding: 12px 20px 15px;
      background-color: #F9F9F9;
  }
  .portlet.light.bordered {
      border: 1px solid #e7ecf1!important;
  }
  .list-separated {
      margin-top: 10px;
      margin-bottom: 15px;
  }
  .profile-stat {
      padding-bottom: 20px;
      border-bottom: 1px solid #f0f4f7;
  }
  .profile-stat-title {
      color: #7f90a4;
      font-size: 25px;
      text-align: center;
  }
  .uppercase {
      text-transform: uppercase!important;
  }
  
  .profile-stat-text {
      color: #e9420b;
      font-size: 10px;
      font-weight: 600;
      text-align: center;
  }
  .profile-desc-title {
      color: #7f90a4;
      font-size: 17px;
      font-weight: 600;
  }
  .profile-desc-text {
      color: #7e8c9e;
      font-size: 14px;
  }
  .margin-top-20 {
      margin-top: 20px!important;
  }
  [class*=" fa-"]:not(.fa-stack), [class*=" glyphicon-"], [class*=" icon-"], [class^=fa-]:not(.fa-stack), [class^=glyphicon-], [class^=icon-] {
      display: inline-block;
      line-height: 14px;
      -webkit-font-smoothing: antialiased;
  }
  .profile-desc-link i {
      width: 22px;
      font-size: 19px;
      color: #abb6c4;
      margin-right: 5px;
  }
  .nav{
    display: block !important;
  }

  button.btn.btn-default {background: #e9420b;color: white;margin-top: 10px;margin-bottom: 20px;font-weight: 600;}
  
  .profile-stat-title h3{
      color: rgb(71, 71, 71);
  }

  span.hidden-xs {
    color: rgb(71, 71, 71);
}

.wishlist-img{
  width: 215px;
}

.profile .show { opacity: 1;
}


</style>

@extends('layouts.apptheme')
@section('appcontent')

<body>
 



 

    <div class="container">
        <div class="row profile">
            <div class="col-md-2">
                <div class="profile-sidebar">
                    <!-- SIDEBAR USERPIC -->
                    <div class="profile-userpic">
                        <!-- <img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" class="img-responsive" alt=""> -->
                       
                        
                    </div>
                    <!-- END SIDEBAR USERPIC -->
                    <!-- SIDEBAR USER TITLE -->
                
                    <!-- END SIDEBAR USER TITLE -->
                    <!-- SIDEBAR MENU -->
                    <div class="profile-usermenu">
                        <ul class="nav nav-tabs">
                            <li class="active">
                                <a href="#tab1" data-toggle="tab" class="active">
                                <i class="glyphicon glyphicon-home"></i>
                                <span class="hidden-xs">Personal<span> </a>
                            </li>
                            <li>
                                <a  href="#tab2" data-toggle="tab">
                                <i class="glyphicon glyphicon-ok"></i>
                                <span class="hidden-xs">Orders History <span></a>
                            </li>
                            <li>
                                <a  href="#tab3" data-toggle="tab">
                                <i class="glyphicon glyphicon-ok"></i>
                                <span class="hidden-xs">Wishlist <span></a>
                            </li>
                            

                           
                            
                            </div>
                            
                  
            </div>                                     
                                                      
            
        </div>


        <div class="col-md-10">
            <div class="tab-content">
                <div class="tab-pane active" id="tab1">
                  <div class="row">
                    <div class="col-md-8 order-content">
                        <div class="form_main col-md-6 col-sm-5 col-xs-7">
                    @if (Session::has('message'))
                        <div class="alert alert-success">
                            <ul>
                                <li>{{Session::get('message')}}</li>
                            </ul>
                        </div>
                    @endif
                                <h4 class="heading"><strong>Genral </strong> Information <span></span></h4>
                                <div class="form">
                                <form method="post" action="{{url('/updatecustomerinfo')}}">
                                    {{ csrf_field() }}
                                    <input type="text" required="" placeholder="Name" value="{{$personal->first_name}}" name="first_name" class="txt">
                                    <input type="text" placeholder="Last Name" value="{{$personal->last_name}}" name="last_name" class="txt">
                                    <input type="email" required placeholder="Contact" value="{{$personal->email}}" name="email" class="txt"><br>
                                    <button type="submit" class="btn btn-default">Update</button>
                            </div>
                            </div>
                        </form>
                        @if($personal->customer_type == 2)
                        <label>Is Credit Allowed?</label><br>
                        @if($personal->credit_line_status == 1)
                        <label>Allowed</label><br>
                        @else
                        <label>Not Allowed</label><br>
                        @endif
                        <label>Credit Limit</label><br>
                        @if($personal->credit_limit == NULL)
                        <label>0</label><br>
                        @else
                        <label>{{$personal->credit_limit}}</label><br>
                        @endif
                        <label>Credit Usage</label><br>
                        @if($personal->credit_usage == NULL)
                        <label>0</label>
                        @else
                        <label>{{$personal->credit_usage}}</label>
                        @endif
                        @endif
                        <div class="form_main col-md-6 col-sm-5 col-xs-7">
                                <h4 class="heading"><strong>Privacy </strong> Settings <span></span></h4>
                                <div class="form">
                                <form method="post" action="{{url('/updatecustomerpassword')}}">
                                    {{ csrf_field() }}
                                    <input type="text" required placeholder="Old Password*"  name="oldpassword" class="txt">
                                    <input type="password" required placeholder="New Password*"  name="newpassword" class="txt">
                                    <input type="password" required placeholder="Confirm Password*" name="password" class="txt"><br>
                                    <button type="submit" class="btn btn-default">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane" id="tab2">
                    <div class="tab-pane fade active show" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <table class="table" cellspacing="0">
                        <thead>
                        <tr>
                        <th>Order Id</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($order as $orders)
                        <tr>
                          <td>{{$orders->order_id}}</td>
                          <td>{{$orders->name}}</td>
                          <td>{{$orders->created_at}}</td>
                          <td>{{$orders->qty}}</td>
                          <td>{{$orders->status}}</td>
                        </tr>
                        @endforeach
                        </tbody>
                        </table>
                        </div>
                </div>
                <div class="tab-pane" id="tab3">
                    <div class="tab-pane fade active show" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <table class="table" cellspacing="0">
                        <thead>
                        <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($wishlist as $wishlists)
                        <tr>
                        <td><img src="https://wirelesswavestx.com/pos/public/assets/images/{{$wishlists->image}}" class="wishlist-img"></td>
                        <td>{{$wishlists->name}}</td>
                        <td>{{$wishlists->price}}</td>
                        </tr>
                        @endforeach
                        </tbody>
                        </table>
                        </div>
                </div>            
        </div>
    </div>
  </div>
</div>

</body>

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</html>
@endsection