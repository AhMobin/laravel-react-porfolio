<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});


/*
|--------------------------------------------------------------------------
| Backend Route - Admin Panel
|--------------------------------------------------------------------------
*/

Auth::routes(['register'=>false]);

Route::get('/home', 'HomeController@index')->name('home');



//Top Banner
Route::resource('banner','Backend\BannerController');





Route::get('banner/up/{id}','Backend\BannerController@Up');
Route::get('banner/down/{id}','Backend\BannerController@Down');
