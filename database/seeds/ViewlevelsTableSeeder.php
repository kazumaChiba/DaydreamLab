<?php

use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Models\Viewlevel\Admin\ViewlevelAdmin;
use DaydreamLab\User\Repositories\Viewlevel\Admin\ViewlevelAdminRepository;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use Illuminate\Database\Seeder;

class ViewlevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $service = new ViewlevelAdminService(new ViewlevelAdminRepository(new ViewlevelAdmin()));


        // Public

        $service->store(Helper::collect([
            'title'     => '橘色集團',
            'rules'     => [7,8,9],
        ]));

        $service->store(Helper::collect([
            'title'     => '橘色涮涮屋',
            'rules'     => [8],
        ]));

        $service->store(Helper::collect([
            'title'     => 'Extension 1 by 橘色',
            'rules'     => [9],
        ]));

        // Guest

//        $service->store(Helper::collect([
//            'title'     => '橘色集團訪客',
//            'rules'     => [2,7,8,9,10],
//        ]));
//
//        $service->store(Helper::collect([
//            'title'     => '橘色涮涮屋訪客',
//            'rules'     => [2,8,11],
//        ]));
//
//        $service->store(Helper::collect([
//            'title'     => 'Extension 1 by 橘色訪客',
//            'rules'     => [2,9,12],
//        ]));


        // Registered

//        $service->store(Helper::collect([
//            'title'     => '橘色集團會員',
//            'rules'     => [2,7,8,9,13],
//        ]));
//
//        $service->store(Helper::collect([
//            'title'     => '橘色涮涮屋會員',
//            'rules'     => [2,8,11,14],
//        ]));
//
//        $service->store(Helper::collect([
//            'title'     => 'Extension 1 by 橘色會員',
//            'rules'     => [2,9,12,15],
//        ]));



        // Admin
        $service->store(Helper::collect([
            'title'     => '橘色集團管理者',
            'rules'     => [2,3,4,7,8,9,10,11,12],
        ]));

        $service->store(Helper::collect([
            'title'     => '橘色涮涮屋管理者',
            'rules'     => [2,3,4,8,11],
        ]));

        $service->store(Helper::collect([
            'title'     => 'Extension 1 by 橘色管理者',
            'rules'     => [2,3,4,9,12],
        ]));
    }

}
