<?php

namespace DaydreamLab\Cms\Database\Seeds;

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;
use Illuminate\Support\Collection;

class ModulesTableSeeder extends Seeder
{
    protected $categoryService;

    protected $moduleService;

    public function run()
    {
        $category_root = Category::create([
            'title'         => 'ROOT',
            'alias'         => 'root',
            'path'          => '/',
            'state'         => 1,
            'introimage'    => '',
            'introtext'     => '',
            'image'         => '',
            'description'   => '',
            'extension'     => 'module',
            'ordering'      => 1,
            'access'        => 5,
            'metadesc'      => '',
            'metakeywords'  => '',
            'extrafields'   => [],
            'children'      =>[]
        ]);

        $this->categoryService  = new CategoryService(new CategoryRepository(new Category()));

        $data = json_decode(file_get_contents(__DIR__.'/jsons/module.json'), true);

        $this->migrate($data, Category::where('extension', 'module')->first());

    }


    public function migrate($data, $parent)
    {
        foreach ($data as $category)
        {
            $modules    = $category['modules'];
            unset($category['modules']);

            $category = $this->categoryService->store(Helper::collect($category));

            foreach ($modules as $module)
            {
                $module['category_id'] = $category->id;
                $this->moduleService->store(Helper::collect($module));
            }

            if ($parent)
            {
                $parent->appendNode($category);
            }
        }
    }
}
