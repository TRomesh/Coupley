<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;

class SearchController extends Controller
{
    public function search(Request $request)
    {
    	$firstname = $request->firstname;
    	$users = \DB::table('users')
                ->where('firstname', 'like', $firstname.'%')
                ->get();
	    return response()->json(['users' => $users],200);
    }
}