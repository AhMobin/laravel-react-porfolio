<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    protected $fillable = [
        'project_name',
        'project_short_desc',
        'project_thumb',
        'project_link',
        'status',
    ];
}
