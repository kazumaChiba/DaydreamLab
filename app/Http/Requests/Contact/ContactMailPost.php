<?php

namespace App\Http\Requests\Contact;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class ContactMailPost extends AdminRequest
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
            'name'       => 'required|string',
            'email'      => 'nullable|string',
            'phone'      => 'nullable|string',
            'location'   => 'nullable|string',
            'type'       => 'nullable|string',
            'content'    => 'nullable|string',
        ];
    }
}
