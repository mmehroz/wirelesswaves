<?php
  $brand = DB::table('brands')
  ->select('*')
  ->where('status','=',1)
  ->get();
  $model = DB::table('brand_models')
  ->select('*')
  ->where('status','=',1)
  ->get();
  $accessorybrand = DB::table('accessory_brands')
  ->select('*')
  ->where('status','=',1)
  ->get();
   $accessorytype = DB::table('accessory_types')
  ->select('*')
  ->where('status','=',1)
  ->get();
   $carrier = DB::table('carriers')
  ->select('*')
  ->where('status','=',1)
  ->get();
?>
<div class="col-md-3 mt-30 col-sm-12">
  <div class="product-list-sidebar clearfix">
    <form method="POST" action="{{url('/filteredproduct')}}" class="clearfix">
    {{ csrf_field() }}
      <div class="filter-section clearfix ">
        <div class="panel panel-primary">
        <div class="panel-body p-0">
          <label>Select Brand</label><t>
            <select name="productbrand">
              @foreach($brand as $brands)
              <option value="{{$brands->id}}">{{$brands->name}}</option>
              @endforeach
            </select>
          </div>
        </div>
      </div>
      <div class="filter-section clearfix">
        <div class="panel panel-primary">
           <div class="panel-body p-0">
             <label>Select Model</label><t>
             <select name="model">
                @foreach($model as $models)
                <option value="{{$models->id}}">{{$models->name}}</option>
                @endforeach
              </select>
          </div>
        </div>
      </div>
      <div class="filter-section clearfix">
        <div class="panel panel-primary">
          <div class="panel-body p-0">
            <label>Select Accessories Brand</label><t>
            <select name="accessorybrand">
                @foreach($accessorybrand as $accessorybrands)
                <option value="{{$accessorybrands->id}}">{{$accessorybrands->name}}</option>
                @endforeach
            </select>
          </div>
        </div>
      </div>
      <div class="filter-section clearfix">
        <div class="panel panel-primary">
          <div class="panel-body p-0">
            <label>Select Accessories Type</label><t>
            <select name="accessorytype">
                @foreach($accessorytype as $accessorytypes)
                <option value="{{$accessorytypes->id}}">{{$accessorytypes->name}}</option>
                @endforeach
            </select>
          </div>
        </div>
      </div>
      <div class="filter-section clearfix">
        <div class="panel panel-primary">
          <div class="panel-body p-0">
            <label>Select Carrier</label><t>
            <select name="carrier">
                @foreach($carrier as $carriers)
                <option value="{{$carriers->id}}">{{$carriers->name}}</option>
                @endforeach
            </select>
          </div>
        </div>
      </div>
      <div class="filter-section clearfix">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Price Range</h3> <span class="pull-right clickable"><i class="glyphicon glyphicon-chevron-down fa fa-angle-down"></i></span> </div>
          <div class="panel-body" style="display:none;">
            <div class="price-range-picker">
              <div class="row mb-20">
                <div class="col-md-6 col-sm-3 col-xs-6">
                  <label for="price-from">From</label>
                  <input type="text" name="fromPrice" class="from-control range-from" id="price-from"> </div>
                <div class="col-md-6 col-sm-3 col-xs-6">
                  <label for="price-to">To</label>
                  <input type="text" name="toPrice" class="from-control range-to" id="price-to"> </div>
              </div>
              <div class="slider noUi-target noUi-ltr noUi-horizontal" id="price-range-slider" data-to-price="1135.0000" data-max="1135.0000">
                <div class="noUi-base">
                  <div class="noUi-connects"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-filter pull-right" data-loading>Apply</button>
    </form>
  </div>
</div>