<?php

namespace App\Http\Controllers\API\Contact;

use DaydreamLab\JJAJ\Controllers\BaseController;
use DaydreamLab\JJAJ\Helpers\ResponseHelper;
use Illuminate\Support\Collection;
use App\Services\Contact\ContactService;
use App\Http\Requests\Contact\ContactRemovePost;
use App\Http\Requests\Contact\ContactStorePost;
use App\Http\Requests\Contact\ContactStatePost;
use App\Http\Requests\Contact\ContactSearchPost;
use App\Http\Requests\Contact\ContactMailPost;

class ContactController extends BaseController
{
    public function __construct(ContactService $service)
    {
        parent::__construct($service);
    }


    public function getItem($id)
    {
        $this->service->find($id);

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function getItems()
    {
        $this->service->search(new Collection());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function remove(ContactRemovePost $request)
    {
        $this->service->remove($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function state(ContactStatePost $request)
    {
        $this->service->state($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function store(ContactStorePost $request)
    {
        $this->service->store($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }


    public function search(ContactSearchPost $request)
    {
        $this->service->search($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }

    public function contactMail(ContactMailPost $request)
    {
        $this->service->contactMail($request->rulesInput());

        return ResponseHelper::response($this->service->status, $this->service->response);
    }
}
