<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class DataSeed extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'extension1byorange:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '小橘網站資料匯入';


    protected $constants = [
        'category',
        'item',
        'language',
        'pagebuilder',
        'tag',
    ];


    protected $seeders = [
        'AssetsTableSeeder',
        'ItemsTableSeeder',
        'LanguagesTableSeeder',
        'MenusTableSeeder',
        'ModulesTableSeeder',
        'TagsTableSeeder',
        'CategoriesTableSeeder',
    ];





    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('migrate:refresh');
        $this->call('cms:install');
        $this->call('db:seed');
        $this->call('passport:install', [ '--force' => true ]);


//        $this->deleteConstants();
//        $this->call('vendor:publish', [
//            '--tag' => 'cms-configs'
//        ]);
    }


    public function deleteConstants()
    {
        $constants_path     = 'config/constants/';
        foreach ($this->constants as $constant) {
            File::delete($constants_path . $constant . '.php');
        }
    }
}
