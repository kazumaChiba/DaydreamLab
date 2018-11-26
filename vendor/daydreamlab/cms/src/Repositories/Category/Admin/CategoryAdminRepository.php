<?php

namespace DaydreamLab\Cms\Repositories\Category\Admin;

use DaydreamLab\Cms\Repositories\Category\CategoryRepository;
use DaydreamLab\Cms\Models\Category\Admin\CategoryAdmin;
use DaydreamLab\JJAJ\Helpers\Helper;

class CategoryAdminRepository extends CategoryRepository
{
    public function __construct(CategoryAdmin $model)
    {
        parent::__construct($model);
    }

}