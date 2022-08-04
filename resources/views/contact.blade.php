@extends('layouts.apptheme')
@section('appcontent')
<body class="theme-blue slider_with_banners ltr">
    <div class="content-wrapper clearfix ">
        <div class="container">
        <section class="contact-wrapper">
            <div class="row">
                <div class="col-md-10">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="box-wrapper contact-left clearfix">
                                <div class="box-header">
                                    <h4>Send Us a Message</h4>
                                </div>
                                <div class="col-md-12">
                                    <form method="POST" action="https://wirelesswavestx.com/contact" class="clearfix">
                                        <input type="hidden" name="_token" value="LtOtM9bcxKKuuK4voZ9SVa8sKmwkGndaqjR2txNA">
                                        <div class="form-group ">
                                            <label for="email">Email<span>*</span></label>
                                            <input type="text" name="email" class="form-control" id="email" value="">
                                        </div>
                                        <div class="form-group ">
                                            <label for="subject">Subject<span>*</span></label>
                                            <input type="text" name="subject" class="form-control" id="subject" value="">
                                        </div>
                                        <div class="form-group ">
                                            <label for="message">Message<span>*</span></label>
                                            <textarea name="message" cols="30" rows="10" id="message"></textarea>                                   
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-submit pull-right" data-loading>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-right clearfix">
                                <div class="contact-info">
                                    <i class="fa fa-phone-square pull-left" aria-hidden="true"></i>

                                    <div class="contact-text">
                                        <h4>Phone</h4>
                                        <span>832-831-1884</span>
                                    </div>
                                </div>
                                <div class="contact-info">
                                    <i class="fa fa-envelope-o pull-left" aria-hidden="true"></i>
                                    <div class="contact-text">
                                        <h4>Email</h4>
                                        <span>hello@wirelesswavestx.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>

@endsection            