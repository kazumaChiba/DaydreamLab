<?php

namespace DaydreamLab\Cms\Services\Menu;

use DaydreamLab\Cms\Repositories\Menu\MenuRepository;
use DaydreamLab\JJAJ\Services\BaseService;
use DaydreamLab\JJAJ\Traits\NestedServiceTrait;
use Illuminate\Support\Collection;

class MenuService extends BaseService
{
    use NestedServiceTrait;

    protected $type = 'Menu';

    public function __construct(MenuRepository $repo)
    {
        parent::__construct($repo);
    }

    public function remove(Collection $input)
    {
        return $this->removeNested($input);
    }


    public function store(Collection $input)
    {
        return $this->storeNested($input);
    }
}
