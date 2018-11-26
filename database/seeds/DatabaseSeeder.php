<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ExtrafiledsTableSeeder::class,
            ViewlevelsTableSeeder::class,
            UsersGroupsTableSeeder::class,
            UsersTableSeeder::class,
            ItemsTableSeeder::class,
            MenusTableSeeder::class,
            ModulesTableSeeder::class,

        ]);
    }
}

