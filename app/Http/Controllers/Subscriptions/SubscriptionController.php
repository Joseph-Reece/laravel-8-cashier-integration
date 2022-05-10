<?php

namespace App\Http\Controllers\Subscriptions;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    //
    public function index()
    {
        $plans = Plan::get();

        return Inertia::render('Subscription/Plans', [
            'user' => User::find(auth()->user()->id),
            'plans' => $plans,
        ]);
    }

    public function payment()
    {
        
    }
}
