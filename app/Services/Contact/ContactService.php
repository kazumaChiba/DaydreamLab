<?php

namespace App\Services\Contact;

use App\Mail\ContactUS;
use App\Mail\ContactUSAdmin;
use App\Repositories\Contact\ContactRepository;
use DaydreamLab\JJAJ\Helpers\Helper;
use DaydreamLab\JJAJ\Services\BaseService;

//other
use Carbon\Carbon;
//use Illuminate\Notifications\Notification;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use App\Notifications\Contact;
use App\Notifications\ContactAdmin;
//要用這個路徑的Notification才能發信
use Illuminate\Support\Facades\Notification;
//Mail類別發信使用
use Illuminate\Support\Facades\Mail;

class ContactService extends BaseService
{
    protected $type = 'Contact';

    public function __construct(ContactRepository $repo)
    {
        parent::__construct($repo);
    }

    public function contactMail(Collection $input) {

        //Notification版本發信
        Notification::route('mail', 'alex554833@gmail.com')->notify(new ContactAdmin($input->toArray()));
        Notification::route('mail', $input->get('email'))->notify(new Contact($input->toArray()));

        //Mail類別版本發信 正式的時候不要用send 可以用queue將發信排入laravel佇列 以免lag
        Mail::to( 'alex554833@gmail.com' )->queue(new ContactUS( $input->toArray() ));
        Mail::to( $input->get('email') )->queue(new ContactUSAdmin( $input->toArray() ));

        //Helper::show($input->get('message'));
        //exit();

        $this->status = 'CONTACT_MAIL_SEND_SUCCESS';

    }
}
