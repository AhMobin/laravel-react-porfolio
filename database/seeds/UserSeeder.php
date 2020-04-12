<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name' => 'Abu Horaira Mobin',
            'email' => 'ahmobin1515@gmail.com',
            'phone' => '01620327185',
            'password' => \Illuminate\Support\Facades\Hash::make('password'),
        ]);
    }
}
