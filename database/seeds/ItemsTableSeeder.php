<?php

use DaydreamLab\Cms\Models\Item\Admin\ItemAdmin;
use DaydreamLab\Cms\Models\Item\Admin\ItemTagMapAdmin;
use DaydreamLab\Cms\Models\Tag\Admin\TagAdmin;
use DaydreamLab\Cms\Repositories\Category\Admin\CategoryAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemAdminRepository;
use DaydreamLab\Cms\Repositories\Item\Admin\ItemTagMapAdminRepository;
use DaydreamLab\Cms\Repositories\Tag\Admin\TagAdminRepository;
use DaydreamLab\Cms\Services\Category\Admin\CategoryAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemAdminService;
use DaydreamLab\Cms\Services\Item\Admin\ItemTagMapAdminService;
use DaydreamLab\Cms\Services\Tag\Admin\TagAdminService;
use DaydreamLab\Cms\Models\Category\Admin\CategoryAdmin;
use DaydreamLab\JJAJ\Helpers\Helper;
use Illuminate\Database\Seeder;

class ItemsTableSeeder extends Seeder
{
    protected $categoryAdminService;

    protected $itemAdminService;

    public function run()
    {
        $this->categoryAdminService  = new CategoryAdminService(new CategoryAdminRepository(new CategoryAdmin()));
        $tagAdminService = new TagAdminService(new TagAdminRepository(new TagAdmin()));
        $itemTagMapAdminService = new ItemTagMapAdminService(new ItemTagMapAdminRepository(new ItemTagMapAdmin()));

        $this->itemAdminService = new ItemAdminService(new ItemAdminRepository(new ItemAdmin()), $tagAdminService,$itemTagMapAdminService, $this->categoryAdminService);

        $data = json_decode(file_get_contents(__DIR__.'/jsons/item.json'), true);

        $this->migrate($data, CategoryAdmin::where('extension', 'item')->where('title','ROOT')->first());

    }


    public function migrate($data, $parent)
    {
        foreach ($data as $category)
        {

            $childern = $category['children'];
            $items    = $category['items'];
            unset($category['children']);
            unset($category['items']);

            $exsist = $this->categoryAdminService->findby('alias', '=', $category['alias'])->first();
            if ($exsist)
            {
                $cat = $exsist;
            }
            else{
                $cat = $this->categoryAdminService->store(Helper::collect($category));
            }

            foreach ($items as $item)
            {
                $item['category_id'] = $cat->id;
                $this->itemAdminService->store(Helper::collect($item));
            }

            if ($parent)
            {
                $parent->appendNode($cat);
            }

            if (count($childern))
            {
                self::migrate($childern, $cat);
            }

        }
    }
}
