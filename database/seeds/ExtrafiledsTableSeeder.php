<?php

use Illuminate\Database\Seeder;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldService;
use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldRepository;
use DaydreamLab\Cms\Models\Extrafield\Extrafield;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldGroupService;
use DaydreamLab\Cms\Repositories\Extrafield\ExtrafieldGroupRepository;
use DaydreamLab\Cms\Models\Extrafield\ExtrafieldGroup;
use DaydreamLab\JJAJ\Helpers\Helper;

class ExtrafiledsTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $extrafieldService      = new ExtrafieldService(new ExtrafieldRepository(new Extrafield()));
        $extrafieldGroupService = new ExtrafieldGroupService(new ExtrafieldGroupRepository(new ExtrafieldGroup()));

        $data = json_decode(file_get_contents(__DIR__.'/jsons/extrafield.json'), true);

        foreach ($data as $group)
        {
            $exrtafields = $group['items'];
            unset($group['items']);

            $extraGroup = $extrafieldGroupService->store(Helper::collect($group));

            foreach ($exrtafields as $exrtafield)
            {
                $exrtafield['group_id'] = $extraGroup->id;
                $extrafieldService->store(Helper::collect($exrtafield));
            }
        }
    }

}
