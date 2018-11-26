<?php

use DaydreamLab\Cms\Models\Category\Category;
use DaydreamLab\Cms\Models\Menu\Menu;
use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\Cms\Services\Category\CategoryService;
use DaydreamLab\Cms\Services\Menu\MenuService;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;
use Kalnoy\Nestedset\Collection;

class MenusTableSeeder extends Seeder
{
    protected $categoryService;

    protected $menuService;

    public function run()
    {
        $this->categoryService = new CategoryService(new CategoryRepository(new Category()));
        $this->menuService     = new MenuService(new MenuRepository(new Menu()));

        $data = json_decode(file_get_contents(__DIR__.'/jsons/menu.json'), true);

        $this->migrate($data, Category::where('extension', 'menu')->first());

    }

    public function migrate($data, $parent)
    {

        foreach($data as $item)
        {
            $menus = $item['menus'];
            $children = $item['children'];
            unset($item['menus']);
            unset($item['children']);

            $menu_category  = $this->categoryService->store(Helper::collect($item));
            $menu_root      = $this->menuService->find(1);


            foreach ($menus as $menu)
            {
                $menu['category_id'] = $menu_category->id;
                $this->menuService->store(Helper::collect($menu));
            }

        }


    }


    public function createMenuRoot()
    {
        $category_root = Category::create( [
            'title'         => 'ROOT',
            'alias'         => 'root',
            'path'          => '',
            'state'         => 1,
            'introimage'    => '',
            'introtext'     => '',
            'image'         => '',
            'ordering'      => 1,
            'description'   => '',
            'extension'     => 'menu',
            'access'        => 2,
            'metadesc'      => '',
            'metakeywords'      => '',
            'created_by'    => 1,
        ]);

        $menu_root = Menu::create([
            'title'         => 'ROOT',
            'alias'         => 'root',
            'path'          => '',
            'category_id'   => $category_root->id,
            'ordering'      => 1,
            'state'         => 1,
            'description'   => '',
            'access'        => 2,
            'language'      => 'All',
            'params'        => '',
            'created_by'    => 1,
        ]);
    }


}
