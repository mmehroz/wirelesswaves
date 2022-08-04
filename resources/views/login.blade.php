@extends('layouts.apptheme')
@section('appcontent')
<style type="text/css">
	.form-wrapper {
		width: 100%;
	}
	
	.form.form-page {
		padding: 0px;
		position: unset;
		box-shadow: unset;
	}
	
	a.register {
		display: none;
	}
	
	h3 {
		text-align: left !important;
		color: #000000;
		font-weight: 500 !important;
	}
	
	label {
		color: #000 !important;
	}
	
	.form .form-inner {
		box-shadow: unset !important;
	}
	
	form.login-form.clearfix {
		box-shadow: unset !important;
		border: unset !important;
	}
	
	.input-icon {
		display: none;
	}
	
	.login.form-inner.clearfix {
		border: unset !important;
	}
	
	input:not([type=checkbox]):not([type=select-multiple]) {
		padding-left: 20px !important;
		height: 52px;
		border: 1px solid #C7CACE;
	}
	
	.flex-form {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.form .form-group {
		width: -webkit-fill-available;
		margin-right: 30px;
	}
	
	.social-login-buttons.text-center {
		display: flex;
		align-items: baseline;
		margin-top: 0px;
	}
	
	.social-login-buttons.text-center span {
		margin-right: 30px;
	}
	
	.form-wrapper .social-login-buttons .btn-google {
		background: unset;
		border: 1px solid #DEDEDE;
		padding: 13px 16px;
		color: #000;
		margin-top: 0px;
	}
	
	.form-wrapper .social-login-buttons .btn-google:hover {
		background: unset;
	}
	
	.col-md-1.login-bnt {
		margin-left: 63px;
	}
	
	.col-md-6.login-btn-center {
		position: relative;
		right: 25px;
	}
	
	.bottum-div {
		margin-bottom: 50px;
	}
	
	a.forgot-password.pull-left {
		margin-top: 0px;
		margin-right: 20px;
	}
	
	.bottum-div p {
		margin-left: 7px;
	}
	
	.content-wrapper.clearfix .container {
		width: 1200px !important;
	}
	
	.login-form .login .btn-login {
		position: absolute;
	}
	
	.form .form-inner h3 {
		font-size: 25px;
		font-weight: 600 !important;
		margin-bottom: 30px;
	}
	
	.form-wrapper {
		width: 1200px;
	}
	
	.bottum-div {
		margin-top: 15px;
	}
	
	label {
		font-family: 'Work Sans', sans-serif !important;
		font-weight: 500;
	}
	
	.theme-blue .login-form .forgot-password {
		text-decoration: underline;
	}
	
	.login-form .login .btn-login {
		box-shadow: 0px 3px 15px;
	}
	
	@media screen and (max-width:410px) {
		.form-wrapper {
			width: 100%!important
		}
		.pull-right {
			float: none!important;
		}
		.login-btn-center {
			text-align: center;
			margin-top: 10px;
		}
	}
</style>
	<body class="theme-blue slider_with_banners ltr">
		<div class="content-wrapper clearfix ">
			<div class="container">
				@if (Session::has('message'))
		            <div class="alert alert-success">
		                <ul>
		                    <li>{{Session::get('message')}}</li>
		                </ul>
		            </div>
		        @endif
				<div class="form-wrapper login-form">
					<div class="form form-page">
						<form method="POST" action="{{url('/submitlogin')}}" class="login-form clearfix">
							{{ csrf_field() }}
							<div class="bg-blue">
								<div class="reflection"></div>
							</div>
							<div class="login form-inner clearfix">
								<a href="ask-register.html" class="register" data-toggle="tooltip" data-placement="top" title="Register" rel="tooltip"> <i class="fa fa-user-plus" aria-hidden="true"></i> </a>
								<!--<h3>Login</h3>-->
								<h3>Log In</h3>
								<div class="flex-form">
									<div class="form-group ">
										<label for="email">Email<span>*</span></label>
										<input type="text" name="email" value="" class="form-control" id="email" placeholder="Enter your email address" autofocus>
										<div class="input-icon"> <i class="fa fa-envelope-o" aria-hidden="true"></i> </div>
									</div>
									<div class="form-group ">
										<label for="password">Password<span>*</span></label>
										<input type="password" name="password" class="form-control" id="password" placeholder="**********">
										<div class="input-icon"> <i class="fa fa-lock" aria-hidden="true"></i> </div>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="row">
									<div class="col-md-6">
										<div class="checkbox pull-left">
											<input type="hidden" value="0">
											<input type="checkbox" value="1" id="remember">
											<label for="remember">Remember me</label>
										</div>
									</div>
									<div class="col-md-6 login-btn-center">
										<a href="{{url('/reset')}}" class="forgot-password pull-right">
										 Forgot your password? </a>
									</div>
								</div>
								<div class="row">
									<div class="col-md-2 login-bnt">
										<button type="submit" class="btn btn-primary pull-right btn-login" data-loading> Login </button>
									</div>
									<div class="col-md-6">
										<div class="social-login-buttons text-center"> <span>Or</span>
											<a href="{{ url('auth/google') }}" class="btn btn-google"> <img src="{!! asset('public/assets/img/googlelogin.png') !!}" style="width: 30px;"></img> Log in With Google </a>
										</div>
									</div>
								</div>
							</div>
							<div class="bottum-div">
								<p> Don't have an account? <a href="{{url('/register')}}" class="forgot-password pull-left"> Register now </a> </p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
@endsection