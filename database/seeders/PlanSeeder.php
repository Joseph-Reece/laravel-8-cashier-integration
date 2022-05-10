<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //seed plans table
        DB::table('plans')->insert([
            [
                'title' => 'Basic Plan',
                'identifier' => 'basic',
                'stripe_id' => 'price_1KxVA5CDh8HdIZ5wXZicQXHl',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Standard Plan',
                'identifier' => 'standard',
                'stripe_id' => 'price_1KxVA5CDh8HdIZ5wSgR3PWJH',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Premium Plan',
                'identifier' => 'premium',
                'stripe_id' => 'price_1KxVA5CDh8HdIZ5wfwBbDB5v',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
