<?php

namespace App\Repositories\Contact;

use DaydreamLab\JJAJ\Repositories\BaseRepository;
use App\Models\Contact\Contact;

class ContactRepository extends BaseRepository
{
    public function __construct(Contact $model)
    {
        parent::__construct($model);
    }
}