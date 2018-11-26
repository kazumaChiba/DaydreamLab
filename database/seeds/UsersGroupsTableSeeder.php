<?php

use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\User\Models\User\Admin\UserGroupAdmin;
use DaydreamLab\User\Repositories\User\Admin\UserGroupAdminRepository;
use DaydreamLab\User\Services\User\Admin\UserGroupAdminService;
use Illuminate\Database\Seeder;
use DaydreamLab\User\Services\Viewlevel\Admin\ViewlevelAdminService;
use DaydreamLab\User\Repositories\Viewlevel\Admin\ViewlevelAdminRepository;
use DaydreamLab\User\Models\Viewlevel\Admin\ViewlevelAdmin;

class UsersGroupsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $viewlevelAdminService = new ViewlevelAdminService(new ViewlevelAdminRepository(new ViewlevelAdmin()));
        $service = new UserGroupAdminService(new UserGroupAdminRepository(new UserGroupAdmin()), $viewlevelAdminService);

        //----------------------------------
        $public         = $service->findBy('title', '=', 'Public')->first();

        $group_public = $service->store(Helper::collect([
            "title"         => "橘色集團",
            "description"   => "橘色集團",
            "parent_id"     => $public->id
        ]));

        $service->store(Helper::collect([
            "title"         => "橘色涮涮屋",
            "description"   => "橘色涮涮屋",
            "parent_id"     => $group_public->id
        ]));

        $service->store(Helper::collect([
            "title"         => "Extension 1 by 橘色",
            "description"   => "Extension 1 by 橘色",
            "parent_id"     => $group_public->id
        ]));

        //----------------------------------
        $guest = $service->findBy('title', '=', 'Guest')->first();
//        $guest_group = $service->store(Helper::collect([
//            "title"         => "橘色集團訪客",
//            "description"   => "橘色集團訪客",
//            "parent_id"     => $guest->id
//        ]));
//
//        $service->store(Helper::collect([
//            "title"         => "橘色涮涮屋訪客",
//            "description"   => "橘色涮涮屋訪客",
//            "parent_id"     => $guest_group->id
//        ]));
//
//        $service->store(Helper::collect([
//            "title"         => "Extension 1 by 橘色訪客",
//            "description"   => "Extension 1 by 橘色訪客",
//            "parent_id"     => $guest_group->id
//        ]));

        //----------------------------------
        $registered = $service->findBy('title', '=', 'Registered')->first();
//        $registered_group = $service->store(Helper::collect([
//            "title"         => "橘色集團會員",
//            "description"   => "橘色集團會員",
//            "parent_id"     => $registered->id
//        ]));
//
//        $service->store(Helper::collect([
//            "title"         => "橘色涮涮屋會員",
//            "description"   => "橘色涮涮屋會員",
//            "parent_id"     => $registered_group->id
//        ]));
//
//        $service->store(Helper::collect([
//            "title"         => "Extension 1 by 橘色會員",
//            "description"   => "Extension 1 by 橘色會員",
//            "parent_id"     => $registered_group->id
//        ]));

        //----------------------------------
        $admin = $service->findBy('title', '=', 'Administrator')->first();

        $group_admin = $service->store(Helper::collect([
            "title"         => "橘色集團管理者",
            "description"   => "橘色集團管理者",
            "parent_id"     => $admin->id
        ]));


        $orangeshabushbu = $service->store(Helper::collect([
                "title"         => "橘色涮涮屋管理者",
                "description"   => "橘色涮涮屋管理者",
                "parent_id"     => $group_admin->id
        ]));

        $orangeshabushbu = $service->store(Helper::collect([
            "title"         => "Extension 1 by 橘色管理者",
            "description"   => "Extension 1 by 橘色管理者",
            "parent_id"     => $group_admin->id
        ]));
        //----------------------------------
    }
}
