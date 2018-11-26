<?php

namespace DaydreamLab\User\Requests\Role;

use DaydreamLab\JJAJ\Requests\AdminRequest;

class RoleAssetMapStorePost extends AdminRequest
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
            'role_id'       => 'required|integer',
            'asset_ids'     => 'required|array',
            'asset_ids.*'   => 'nullable|integer',
        ];
    }
}
