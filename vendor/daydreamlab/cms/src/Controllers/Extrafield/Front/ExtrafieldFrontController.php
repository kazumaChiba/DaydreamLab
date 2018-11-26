<?php

namespace DaydreamLab\Cms\Controllers\Extrafield\Front;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use DaydreamLab\Cms\Services\Extrafield\Front\ExtrafieldFrontService;
use DaydreamLab\Cms\Requests\Extrafield\Front\ExtrafieldFrontRemovePost;
use DaydreamLab\Cms\Requests\Extrafield\Front\ExtrafieldFrontStorePost;
use DaydreamLab\Cms\Requests\Extrafield\Front\ExtrafieldFrontStatePost;
use DaydreamLab\Cms\Requests\Extrafield\Front\ExtrafieldFrontSearchPost;
use DaydreamLab\Cms\Requests\Extrafield\Front\ExtrafieldFrontOrderingPost;


class ExtrafieldFrontController extends BaseController
{
    public function __construct(ExtrafieldFrontService $service)
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


    public function ordering(ExtrafieldFrontOrderingPost $request)
    {
        $this->service->ordering($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ExtrafieldFrontRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ExtrafieldFrontStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ExtrafieldFrontStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ExtrafieldFrontSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
