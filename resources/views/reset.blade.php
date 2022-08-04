<style>
.form.reset-password.clearfix i.fa.fa-envelope-o {
    margin-top: 6px;
}
</style>

@extends('layouts.apptheme')
@section('appcontent')
	<body class="theme-blue slider_with_banners ltr ">
		<div class="content-wrapper clearfix ">
			<div class="container">
				<div class="form-wrapper">
					<div class="form-page">
						<div class="form reset-password clearfix ">
							<div class="bg-blue">
								<div class="reflection"></div>
							</div>
							<div class="form-inner">
								<h3>Reset password</h3>
								<p>Enter your account email to receive a link allowing you to reset your password.</p>
								<form method="POST" action="http://wirelesswavestx.com/password/reset">
									<input type="hidden" name="_token" value="cGQ0HruEUEnGyq7Lgg4q9u1XvlLOeo3g7I46LK54">
									<div class="form-group ">
										<input type="text" name="email" value="" class="form-control" placeholder="Email" autofocus>
										<div class="input-icon"> <i class="fa fa-envelope-o" aria-hidden="true"></i> </div>
									</div>
									<button type="submit" class="btn btn-primary btn-center btn-reset" data-loading> Reset password </button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

@endsection