<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Admin;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Extrafield\Admin\ExtrafieldGroupAdminService;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminStorePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminStatePost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminSearchPost;
use DaydreamLab\Cms\Requests\Extrafield\Admin\ExtrafieldGroupAdminOrderingPost;

class ExtrafieldGroupAdminController extends BaseController
{
    public function __construct(ExtrafieldGroupAdminService $service)
    {
        parent::__construct($service);
    }

    public function getItem($id)
    {
        $this->service->getItem($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function checkout($id)
    {
        $this->service->checkout($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function ordering(ExtrafieldGroupAdminOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ExtrafieldGroupAdminRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ExtrafieldGroupAdminStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldGroupAdminStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ExtrafieldGroupAdminSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
