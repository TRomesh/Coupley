<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;

class UsersController extends Controller
{
    public function friends()
    {

        if ($users = \DB::select('select * from users')) {
            return response()->json(['users' => $users, 'status' => 200], 200);
        } else {
            return response()->json(['status' => 505], 505);
        }
    }
}