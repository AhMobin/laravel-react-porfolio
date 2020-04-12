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
                                <form action="{{ url('banner/'.$edit->id) }}" method="post" enctype="multipart/form-data">
                                    @csrf
                                    @method('put')
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="bannerHeading">Banner Heading</label>
                                            <input type="text" name="banner_header" class="form-control" value="{{ $edit->banner_header }}">
                                        </div>
                                        <div class="form-group">
                                            <label for="bannerSubHeading">Banner Sub Heading</label>
                                            <input type="text" class="form-control" name="banner_subheader" value="{{ $edit->banner_subheader }}">
                                        </div>
                                        <div class="form-group">
                                            <img src="{{ url($edit->banner_image) }}" alt="" width="250">
                                            <input type="hidden" value="{{ $edit->banner_image }}" alt="" name="old_banner" width="250">
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
                                            <input type="text" class="form-control" name="banner_button" value="{{ $edit->banner_button }}">
                                        </div>
                                        <div class="form-group">
                                            <label for="bannerButtonLink">Button Link</label>
                                            <input type="text" class="form-control" name="banner_btn_link" value="{{ $edit->banner_btn_link }}">
                                        </div>
                                    </div>
                                    <!-- /.card-body -->

                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-info">Update</button>
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
