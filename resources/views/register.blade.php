
	<style type="text/css">
	.form-wrapper {
		width: 460px;
	}
	
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;900&amp;family=Ubuntu:wght@300&amp;family=Work+Sans:wght@400;500;600;700&amp;display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Work sans';
	}
	
	section {
		display: flex;
		flex-wrap: wrap;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}
	
	.form-container {
		max-width: 1000px;
		width: 100%;
		background: #fff;
		border: 1px solid #DEDEDE;
		border-top: 0px;
		border-radius: 5px;
		padding-bottom: 5px;
	}
	
	#tab-button {
		padding: 0 151.8px;
	}
	
	#tab-button.active {
		background-color: #fbfbfb
	}
	
	.nav-link.active p {
		color: #E9430B;
		font-size: 19px;
	}
	
	.nav-tabs {
		justify-content: space-around;
	}
	
	.nav-link p {
		padding: 10px 1px;
		font-weight: 600;
		color: #000000;
		font-size: 19px;
	}
	
	.form-container form .user-details {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0px 91px 0px 91px;
	}
	
	form .user-details .input-box {
		margin: 20px 0 11px 0;
		width: calc(100% / 2 - 25px);
	}
	
	.user-details .input-box input {
		height: 35px;
		width: 100%;
		outline: none;
		border-radius: 5px;
		border: 1px solid #ccc;
		padding-left: 10px;
		transition: all 0.3s ease;
	}
	
	.user-details .input-box input:focus,
	.user-details .input-box input:valid {
		border-color: #000000;
	}
	
	.user-details .input-box .details {
		font-weight: 500;
		display: block;
		margin-bottom: 5px
	}
	
	.location-info {
		display: flex;
		margin: 0px 79px 0px 79px;
	}
	
	.location-info .input-box {
		margin: 20px 0px 20px 0px;
		width: calc(100% / 1 - 20px);
		padding: 0 13px;
	}
	
	.location-info .input-box input {
		height: 35px;
		width: 100%;
		outline: none;
		border-radius: 5px;
		border: 1px solid #ccc;
		transition: all 0.3s ease;
	}
	
	.location-info .input-box input:focus,
	.location-info .input-box input:valid {
		border-color: #000000;
	}
	
	.location-info .input-box .details {
		font-weight: 500;
		display: block;
		margin-bottom: 5px;
	}
	
	.button {
		display: block;
		width: 66%;
		align-items: center;
		justify-content: unset;
		margin: 20px 91px 0px 91px;
	}
	
	.button .btn {
		border: 1px solid;
		margin-bottom: 10px;
		-moz-border-radius: 4;
		border-radius: 4px;
		font-family: Arial;
		color: #ffffff;
		font-size: 15px;
		background: #CC3907;
		padding: 12px 50px 12px 50px;
		text-decoration: none;
		margin-right: 30px;
	}
	
	.button .btn:hover {
		color: #ffffff;
		background: #CC3907;
		background-image: -webkit-linear-gradient(top, #CC3907, #bd2f00);
		background-image: -moz-linear-gradient(top, #CC3907, #bd2f00);
		background-image: -ms-linear-gradient(top, #CC3907, #bd2f00);
		background-image: -o-linear-gradient(top, #CC3907, #bd2f00);
		background-image: linear-gradient(to bottom, #CC3907, #bd2f00);
		text-decoration: none;
	}
	
	input #privacy-policy {
		text-decoration: none;
	}
	
	.label {
		font-size: 11px;
	}
	
	.user-details .input-box input {
		font-size: 15px;
		padding: 2px;
	}
	
	.privacy-div {
		margin-left: 91px;
		margin-top: 14px;
	}
	
	.tab-content {
		margin: auto;
	}
	
	#form-captcha {
		margin-bottom: 39px;
	}
	
	.button .captcha-input {
		height: 35px;
		width: 42%;
		outline: none;
		border-radius: 5px;
		border: 1px solid #ccc;
		transition: all 0.3s ease;
	}
	
	.button #form-captcha img {
		margin-right: 27px;
	}
	
	.reg-flex {
		display: flex;
		margin-top: 10px;
	}
	
	input#captcha {
		width: 33.33333333%;
		margin-left: 25px;
	}
	
	a.priv-alink {
		margin-left: 8px;
	}
	
	.box-wrapper {
		border: 0px solid #e9e9e9;
	}
	
	@media screen and (max-width: 1600px) {
		.content-wrapper.clearfix .container {
			width: 100% !important;
			margin: auto !important;
		}
	}
	
	@media screen and (max-width: 1000px) {
		.form-container form .user-details {}
		#tab-button {
			padding: 0 70px;
		}
		.location-info {
			margin: 0 79px 0 79px;
		}
		.tab-content {
			margin-left: 0px;
		}
	}
	
	@media screen and (max-width: 730px) {
		.form-container form .user-details {
			margin-left: 20px;
			margin-right: 20px;
		}
		section {
			display: inline-block;
		}
		form .user-details .input-box {
			width: calc(100% / 1 - 0px);
			margin: 20px 0 0 0;
		}
		.form-container {
			max-width: 800px;
			width: 100%;
		}
		#tab-button {
			padding: 0 30px;
		}
		.location-info {
			display: flex;
			margin: 40px 17px 38px 17px;
		}
		.location-info .input-box {
			margin: 0px 0 20px 0;
			display: block;
			text-align: center;
		}
		.button {
			display: block;
			text-align: inherit;
			width: 90%;
			margin: 20px 0px 0px 27px;
		}
		.button .btn {
			margin-right: 24px;
			margin-bottom: 30px;
		}
		.privacy-div {
			text-align: center;
			margin-top: 14px;
		}
		.already-have-an-account {
			display: flex;
			width: 100%;
			position: relative;
			right: 63px;
			font-size: 13px;
		}
	}
	
	@media screen and (max-width: 700px) {
		#tab-button p {
			font-size: 15px;
		}
	}
	
	@media screen and (max-width: 526px) {
		#form-captcha {
			margin-bottom: 40px;
		}
		.button .captcha-input {
			margin-left: 0px;
			margin-top: 25px;
			width: -webkit-fill-available;
		}
		.button {
			width: 230px;
		}
		.location-info {
			display: flex;
			margin: 28px 17px 29px 17px;
		}
	}
	
	@media screen and (max-width: 380px) {
		.location-info {
			display: block;
			width: 98%;
			margin: 10px 15px 0px 0px;
		}
		.location-info .input-box {
			margin: 0px 0px 20px 0;
			display: block;
			width: 100%;
		}
		input#agree {
			display: block;
			margin-top: 15px;
		}
		.agree-flex {
			display: flex;
			align-items: end;
		}
		.agree-flex label.label {
			position: relative;
			top: 3px;
			margin-left: 10px;
		}
		.button-section-container button.btn {
			margin-bottom: 10px;
			width: 100%;
		}
		.button-section-container .button {
			margin: 15px;
		}
		.button-section-container {
			width: 100%;
			margin-top: 52px;
		}
	}
	
	.fade {
		opacity: 1 !important;
	}
	
	ul#myTab {
		display: flex;
		justify-content: center;
	}
	
	.nav-link {
		border: 1px solid #C7CACE;
		height: 80px;
	}
	
	.content-wrapper.clearfix .container {
		width: 1190px !important;
	}
	
	.tab-pane {
		border-top: 0px !important;
	}
	
	.main-reg-wapper {
		width: 1200px;
		margin: auto;
		border: 1px solid #DEDEDE;
	}
	
	#tab-button {
		padding: 0px 199.8px;
	}
	
	.box-header {
		display: none;
	}
	
	.box-wrapper.register-form {
		padding: 20px;
	}
	
	.nav-link {
		background: #fff;
	}
	
	.box-wrapper.register-form {
		padding-bottom: 68px;
	}
	
	p.alr-acc {
		position: absolute;
		margin-top: 26px !important;
		margin-left: 10px !important;
	}
	
	.nav-link {
		border: 1px solid #C7CACE;
		height: 80px;
		border-top: 0px;
		border-right: 0px;
	}
	
	.content-wrapper.clearfix {
		margin-top: 70px;
		margin-bottom: 30px;
	}
	
	@media screen and (max-width:1500px) {
		.main-reg-wapper {
			width: 100%;
		}
		.content-wrapper.clearfix .container {
			width: 100% !important;
		}
		.main-reg-wapper {
			width: 1010px !important;
		}
		#tab-button {
			padding: 0px 151.8px !important;
		}
	}
	</style>

@extends('layouts.apptheme')
@section('appcontent')

	<body class="theme-blue slider_with_banners ltr ask-register">
		<div class="content-wrapper clearfix ">
			<div class="container">
				<div class="main-reg-wapper">
					<ul class="nav nav-tabs" id="myTab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="tab-button" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
								<p>Register as Customer</p>
							</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="tab-button" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
								<p>Register as Retailer</p>
							</button>
						</li>
					</ul>
					<div class="tab-content" id="myTabContent">
						<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
							<form method="POST" action="{{url('/submitregister')}}" class="clearfix">
                    			{{ csrf_field() }}
								<input type="hidden" name="customer_type" value="1">
								<div class="box-wrapper register-form">
									<div class="box-header">
										<h4>Register <a href="register1857.html?r=r" class="pull-right">Register as a Customer ?</a></h4> </div>
									<div class="form-inner clearfix">
										<div class="col-md-12">
											<div class="row">
												<div class="col-md-6 form-group ">
													<label for="first-name">First Name<span>*</span></label>
													<input type="text" name="first_name" required class="form-control" id="first-name" autofocus>
												</div>
												<div class="col-md-6 form-group ">
													<label for="last-name">Last Name<span>*</span></label>
													<input type="text" name="last_name" required class="form-control" id="last-name"> </div>
											</div>
											<div class="row">
												<div class="col-md-6 form-group ">
													<label for="email">Email<span>*</span></label>
													<input type="email" name="email" required class="form-control" id="email"> </div>
												<div class=" col-md-6 form-group ">
													<label for="contact-number">Contact number<span>*</span></label>
													<input type="text" name="contact_number" required class="form-control" id="contact-number"> </div>
											</div>
											<div class="row">
												<div class="col-md-6 form-group ">
													<label for="password">Password<span>*</span></label>
													<input type="password" name="password" class="form-control" required id="password"> </div>
												<div class="col-md-6 form-group ">
													<label for="confirm-password">Confirm Password<span>*</span></label>
													<input type="password" name="password_confirmation" required class="form-control" id="confirm-password"> </div>
											</div>
											<div class="row">
												<!-- edit by shahrukh -->
												<div class="col-md-3 form-group ">
													<label for="city">City<span>*</span></label>
													<input type="text" name="city" required class="form-control" id="city"> </div>
												<div class="col-md-3 form-group ">
													<label for="state">State<span>*</span></label>
													<input type="text" name="state" required class="form-control" id="state"> </div>
												<div class="col-md-3 form-group ">
													<label for="zip">Zip Code<span>*</span></label>
													<input type="text" name="zip" required class="form-control" id="zip"> </div>
												<div class="col-md-3 form-group ">
													<label for="zip">Country<span>*</span></label>
													<input type="text" name="country" required class="form-control" id="country"> </div>
											</div>
										</div>
										<div class="clearfix"></div>
										<div class="reg-flex">
											<div class="btn-reg">
												<button type="submit" class="btn btn-primary btn-register pull-right" data-loading> Register </button>
											</div>
											<div class=" checkbox">
												<input type="checkbox" name="privacy_policy" id="privacy">
												<label for="privacy">
													<p> I agree to the <a href="{{url('/privacypolicy')}}" class="priv-alink">  privacy policy </a> </p>
												</label>
											</div>
										</div>
										<div>
											<p class="alr-acc">Already have an account? <a href="{{url('/login')}}" class="priv-alink"> Log In</a> </p>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
							<form method="POST" action="{{url('/submitregister')}}" enctype="multipart/form-data" name="registration" id="registration">
                    			{{ csrf_field() }}
								<input type="hidden" name="customer_type" value="2">
								<div class="box-wrapper register-form">
									<div class="box-header">
										<h4>Register <a href="register1857.html?r=r" class="pull-right">Register as a Retailer ?</a></h4> </div>
									<div class="form-inner clearfix">
										<div class="col-md-12">
											<div class="row">
												<div class="col-md-6 form-group ">
													<label for="first-name">First Name<span>*</span></label>
													<input type="text" name="first_name" required class="form-control" id="first-name" autofocus>
												</div>
												<div class="col-md-6 form-group ">
													<label for="last-name">Last Name<span>*</span></label>
													<input type="text" name="last_name" required class="form-control" id="last-name"> </div>
											</div>
											<div class="row">
												<div class="col-md-6 form-group ">
													<label for="email">Email<span>*</span></label>
													<input type="email" name="email" required class="form-control" id="email"> </div>
												<div class=" col-md-6 form-group ">
													<label for="contact-number">Contact number<span>*</span></label>
													<input type="text" name="contact_number" required class="form-control" id="contact-number"> </div>
											</div>
											<div class="row">
												<div class="col-md-6 form-group ">
													<label for="password">Password<span>*</span></label>
													<input type="password" name="password" class="form-control" required id="password"> </div>
												<div class="col-md-6 form-group ">
													<label for="confirm-password">Confirm Password<span>*</span></label>
													<input type="password" name="password_confirmation" required class="form-control" id="confirm-password"> </div>
											</div>
											<div class="row">
												<!-- edit by shahrukh -->
												<div class="col-md-3 form-group ">
													<label for="city">City<span>*</span></label>
													<input type="text" name="city" required class="form-control" id="city"> </div>
												<div class="col-md-3 form-group ">
													<label for="state">State<span>*</span></label>
													<input type="text" name="state" required class="form-control" id="state"> </div>
												<div class="col-md-3 form-group ">
													<label for="zip">Zip Code<span>*</span></label>
													<input type="text" name="zip" required class="form-control" id="zip"> </div>
												<div class="col-md-3 form-group ">
													<label for="zip">Country<span>*</span></label>
													<input type="text" name="country" required class="form-control" id="country"> </div>
											</div>
											<div class="row">
												<div class="col-md-6 form-group ">
													<label for="email">Bussiness Name<span>*</span></label>
													<input type="text" name="business_name" required class="form-control" id="business_name"> </div>
												<div class=" col-md-6 form-group ">
													<label for="contact-number">Bussiness Phone<span>*</span></label>
													<input type="text" name="business_number" required class="form-control" id="business_number"> </div>
											</div>
											<div class="row">
												<div class="col-md-6 form-group ">
													<label for="email">Bussiness Website</label>
													<input type="text" name="business_website" class="form-control" id="business_website"> </div>
												<div class=" col-md-6 form-group ">
													<label for="contact-number">Raferal (If Any)</label>
													<input type="text" name="referral_code" class="form-control" id="referral_code"> </div>
											</div>
											<div class="row">
												<div class="col-md-12 form-group ">
													<label for="email">Bussiness Address<span>*</span></label>
													<input type="text" name="address_line_1" required class="form-control" id="address_line_1"> </div>
											</div>
									</div>
										<div class="clearfix"></div>
										<div class="reg-flex">
											<div class="btn-reg">
												<button type="submit" class="btn btn-primary btn-register pull-right" data-loading> Register </button>
											</div>
											<div class=" checkbox">
												<input type="checkbox" name="privacy_policy" id="privacy">
												<label for="privacy">
													<p> I agree to the <a href="{{url('/privacypolicy')}}" class="priv-alink">  privacy policy </a> </p>
												</label>
											</div>
										</div>
										<div>
											<p class="alr-acc">Already have an account? <a href="{{url('/login')}}" class="priv-alink"> Log In</a> </p>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		@endsection 
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>