@extends('layouts.layout')

@section('content')

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1>Banners</h1>
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

        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <div style="float: right; margin-right: auto">
                                <a href="{{ url('banner/create') }}" class="btn btn-success">Add New</a>
                            </div>

                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Heading</th>
                                    <th>Sub Heading</th>
                                    <th>Image</th>
                                    <th>Button</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>

                                @foreach($banner as $bn)
                                    <tr>
                                        <td class="w-5">{{ $bn->id }}</td>
                                        <td class="w-15">{{ $bn->banner_header }}</td>
                                        <td class="w-25">{{ $bn->banner_subheader }}</td>
                                        <td class="w-20">
                                            <img src="{{ url($bn->banner_image) }}" alt="" width="130">
                                        </td>
                                        <td class="w-10">
                                            <a href="{{ $bn->banner_btn_link }}">{{ $bn->banner_button }}</a>
                                        </td>
                                        <td class="w-10">
                                            @if($bn->status == 1)
                                                <span class="badge badge-success">active</span>
                                            @else
                                                <span class="badge badge-warning">inactive</span>
                                            @endif
                                        </td>
                                        <td class="w-15">
                                            <a href="{{ url('banner/'.$bn->id) }}" class="btn btn-sm btn-primary"> <i class="fa fa-eye"></i> </a>
                                            <a href="{{ url('banner/'.$bn->id.'/edit') }}" class="btn btn-sm btn-info"> <i class="fa fa-edit"></i> </a>
                                            @if($bn->status == 1)
                                                <a href="{{ url('banner/down/'.$bn->id) }}" class="btn btn-sm btn-warning"> <i class="fa fa-thumbs-down"></i> </a>
                                            @else
                                                <a href="{{ url('banner/up/'.$bn->id) }}" class="btn btn-sm btn-success"> <i class="fa fa-thumbs-up"></i> </a>
                                            @endif

                                            <form action="{{ url('banner/'.$bn->id) }}" method="post" style="display: inline">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" class="btn btn-sm btn-danger" ><i class="fa fa-trash"></i></button>
                                            </form>
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </section>
    </div>

@endsection
