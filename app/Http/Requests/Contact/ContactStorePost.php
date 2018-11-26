<?php

namespace App\Http\Requests\Contact;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class ContactStorePost extends AdminRequest
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
            'title'         => 'required|string',
            'state'         => 'required|integer',
            'description'   => 'nullable|string',
        ];
    }
}
