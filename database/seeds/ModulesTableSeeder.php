<?php

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Module\Module;
use DaydreamLab\Cms\Repositories\Module\ModuleRepository;
use DaydreamLab\Cms\Services\Module\ModuleService;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class ModulesTableSeeder extends Seeder
{
    protected $moduleService;

    public function run()
    {
        $data = json_decode(file_get_contents(__DIR__.'/jsons/module.json'), true);
        $this->moduleService      = new ModuleService(new ModuleRepository(new Module()));

        foreach ($data as $key => $modules)
        {
            $category = Category::where('extension', 'module')->where('alias', $key)->first();
            foreach ($modules as $module)
            {
                $module['category_id'] = $category->id;
                $this->moduleService->store(Collection::make($module));
            }
        }
    }
}
