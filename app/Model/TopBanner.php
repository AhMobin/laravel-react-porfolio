<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class TopBanner extends Model
{
    protected $fillable = [
        'banner_header',
        'banner_subheader',
        'banner_image',
        'banner_button',
        'banner_btn_link',
        'status',
    ];
}
