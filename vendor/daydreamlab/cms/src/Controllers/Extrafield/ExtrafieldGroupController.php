<?php

namespace DaydreamLab\Cms\Controllers\Extrafield;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Extrafield\ExtrafieldGroupService;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldGroupOrderingPost;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldGroupRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldGroupStorePost;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldGroupStatePost;
use DaydreamLab\Cms\Requests\Extrafield\ExtrafieldGroupSearchPost;

class ExtrafieldGroupController extends BaseController
{
    public function __construct(ExtrafieldGroupService $service)
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


    public function ordering(ExtrafieldGroupOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ExtrafieldGroupRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ExtrafieldGroupStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldGroupStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ExtrafieldGroupSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
