@extends('layouts.layout')

@section('content')


    <div style="margin-left: 50px">


    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Upload Banner</h1>
                    </div>
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="{{ route('home') }}">Home</a></li>
                            <li class="breadcrumb-item active">Banner</li>
                        </ol>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>

        <section class="content">
            <div class="container">
                <div class="row">
                    <!-- left column -->
                    <div class="col-md-8">
                        <!-- general form elements -->
                        <div class="card card-primary">
                            <!-- /.card-header -->
                            <!-- form start -->
                            <form action="{{ url('banner') }}" method="post" enctype="multipart/form-data">
                                @csrf
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="bannerHeading">Banner Heading</label>
                                        <input type="text" name="banner_header" class="form-control @error('banner_header') is-invalid @enderror" placeholder="Banner Heading (Max:50 char)">
                                        @error('banner_header')
                                            <span class="invalid-feedback" role="alert">
                                                <strong> {{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="bannerSubHeading">Banner Sub Heading</label>
                                        <input type="text" class="form-control @error('banner_subheader') is-invalid @enderror" name="banner_subheader" placeholder="Banner Sub Heading (Max:80 char)">
                                        @error('banner_subheader')
                                        <span class="invalid-feedback" role="alert">
                                                <strong> {{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label for="bannerImage">Banner Image</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" name="banner_image">
                                                <label class="custom-file-label" for="customFile">Upload Image</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="bannerButton">Banner Button</label>
                                        <input type="text" class="form-control" name="banner_button" placeholder="Button Name">
                                    </div>
                                    <div class="form-group">
                                        <label for="bannerButtonLink">Button Link</label>
                                        <input type="text" class="form-control" name="banner_btn_link" placeholder="Button Name link">
                                    </div>
                                </div>
                                <!-- /.card-body -->

                                <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                    <a href="{{ url('banner') }}" class="btn btn-warning">Back</a>
                                </div>
                            </form>

                        </div>
                        <!-- /.card -->
                    </div>
                </div>
            </div>
        </section>

    </div>


    </div>


@endsection
