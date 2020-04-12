<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $fillable = [
        'skill_name',
        'skill_ratio',
        'status',
    ];
}
