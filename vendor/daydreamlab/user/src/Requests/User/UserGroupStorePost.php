<?php

namespace DaydreamLab\User\Requests\User;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class UserGroupStorePost extends AdminRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return parent::authorize();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id'            => 'nullable|integer',
            'parent_id'     => 'nullable|integer',
            'title'         => 'required|string',
            'description'   => 'nullable|string',
            'ordering'      => 'nullable|integer',
        ];
    }
}
