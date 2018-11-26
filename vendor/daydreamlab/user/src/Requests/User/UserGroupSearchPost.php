<?php

namespace DaydreamLab\User\Requests\User;

use DaydreamLab\JJAJ\Requests\ListRequest;
use Illuminate\Validation\Rule;

class UserGroupSearchPost extends ListRequest
{

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
        $rules = [
            'search'    => 'nullable|string',
        ];

        return array_merge(parent::rules(), $rules);
    }
}
