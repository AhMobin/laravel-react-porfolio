<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Model\TopBanner;
use Illuminate\Http\Request;


class BannerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $banner = TopBanner::select('id','banner_header','banner_subheader','banner_button','banner_btn_link','banner_image','status')->get();
        return view('backend.banner.index',compact('banner'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.banner.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'banner_header' => 'required|max:50',
            'banner_subheader' => 'required|max:80',
            'banner_button' => 'required',
            'banner_btn_link' => 'required',
            'banner_image' => 'required',
        ]);

        $image = $request->file('banner_image');
        $image_name = date('dmy_H_s_i');
        $ext = strtolower($image->getClientOriginalExtension());
        $image_fullName = $image_name . '.' . $ext;
        $uploadPath = 'frontend/media/banners/';
        $imageURL = $uploadPath . $image_fullName;

        $success = $image->move($uploadPath, $image_fullName);


        TopBanner::create([
            'banner_header' => $request->banner_header,
            'banner_subheader' => $request->banner_subheader,
            'banner_button' => $request->banner_button,
            'banner_btn_link' => $request->banner_btn_link,
            'banner_image' => $imageURL,
        ]);


        $notification = array(
            'messege' => 'Banner Inserted Successful',
            'alert-type' => 'success'
        );

        return Redirect()->back()->with($notification);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $show = TopBanner::findorfail($id);
        return response()->json($show);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = TopBanner::findorfail($id);
        return view('backend.banner.edit',compact('edit'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $image = $request->file('banner_image');
        if($image){
            $old = $request->old_banner;
            unlink($old);
            $image_name = date('dmy_H_s_i');
            $ext = strtolower($image->getClientOriginalExtension());
            $image_fullName = $image_name . '.' . $ext;
            $uploadPath = 'frontend/media/banners/';
            $imageURL = $uploadPath . $image_fullName;
            $success = $image->move($uploadPath, $image_fullName);

            $data = array();
            $data['banner_header'] = $request->banner_header;
            $data['banner_subheader'] = $request->banner_subheader;
            $data['banner_image'] = $imageURL;
            $data['banner_button'] = $request->banner_button;
            $data['banner_btn_link'] = $request->banner_btn_link;

            TopBanner::findorfail($id)->update($data);

            $notification = array(
                'messege' => 'Banner Updated Successful',
                'alert-type' => 'success'
            );
            return Redirect()->back()->with($notification);

        }else{
            $data = array();
            $data['banner_header'] = $request->banner_header;
            $data['banner_subheader'] = $request->banner_subheader;
            $data['banner_button'] = $request->banner_button;
            $data['banner_btn_link'] = $request->banner_btn_link;

            TopBanner::findorfail($id)->update($data);

            $notification = array(
                'messege' => 'Banner Updated Successful',
                'alert-type' => 'success'
            );
            return Redirect()->back()->with($notification);

        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $banner = TopBanner::findorfail($id);
        $img = $banner->banner_image;
        unlink($img);

        TopBanner::findorfail($id)->delete();
        $notification = array(
            'messege' => 'Banner Deleted',
            'alert-type' => 'warning'
        );
        return Redirect()->back()->with($notification);
    }


    public function up($id){
        $up = TopBanner::where('status','=',1)->update(['status'=>0]);

        TopBanner::findorfail($id)->update(['status'=>1]);

        $notification = array(
            'messege' => 'Banner Activate Successful',
            'alert-type' => 'success'
        );
        return Redirect()->back()->with($notification);

    }


    public function down($id){
        TopBanner::findorfail($id)->update(['status'=>0]);

        $notification = array(
            'messege' => 'Banner Deactivate Successful',
            'alert-type' => 'warning'
        );
        return Redirect()->back()->with($notification);

    }
}
