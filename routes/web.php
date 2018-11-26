<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::view('/{vue?}', 'index')->where('vue', '.*');

Route::get('emaildesign/contact', function () {
    $array=[
        'name' => 'Alice',
        'email'  => 'mail@mail.com',
        'phone'      => '0912345678',
        'location'    => '橘色一館',
        'type'    => '訂位',
        'content'    => '測試內容文字測試內容文字測試內容文字測試內容文字測試內容文字測試內容文字',
    ];
    //呼叫tomail之後才會製作信件，不要寄給任何人即可
    $message = (new \App\Notifications\Contact($array))->toMail('');
    //想看信件結構可暫停
    //\DaydreamLab\JJAJ\Helpers\Helper::show($message->toArray());
    //exit();
    $markdown = new \Illuminate\Mail\Markdown(view(), config('mail.markdown'));
    return $markdown->render('mail.contact', $message->toArray() );
});

Route::get('emaildesign/contactadmin', function () {
    // $array=[
    //     'first_name' => 'YEH',
    //     'last_name'  => 'alex',
    //     'email'      => 'alex554833@gmail.com',
    //     'message'    => 'HHHHH'
    // ];
    $array=[
        'name' => 'Alice',
        'email'  => 'mail@mail.com',
        'phone'      => '0912345678',
        'location'    => '橘色一館',
        'type'    => '訂位',
        'content'    => '測試內容文字測試內容文字測試內容文字測試內容文字測試內容文字測試內容文字',
    ];
    
    //呼叫tomail之後才會製作信件，不要寄給任何人即可
    $message = (new \App\Notifications\ContactAdmin($array))->toMail('');
    //想看信件結構可暫停
    //\DaydreamLab\JJAJ\Helpers\Helper::show($message->toArray());
    //exit();
    $markdown = new \Illuminate\Mail\Markdown(view(), config('mail.markdown'));
    return $markdown->render('mail.contactadmin', $message->toArray() );
});

Route::get('emaildesign/contactus', function () {
    $array=[
        'name' => 'Alice',
        'email'  => 'mail@mail.com',
        'phone'      => '0912345678',
        'location'    => '橘色一館',
        'type'    => '訂位',
        'content'    => '測試內容文字測試內容文字測試內容文字測試內容文字測試內容文字測試內容文字',
    ];

    return new App\Mail\ContactUS($array);
});

Route::get('emaildesign/contactusadmin', function () {

    $array=[
        'name' => 'Alice',
        'email'  => 'mail@mail.com',
        'phone'      => '0912345678',
        'location'    => '橘色一館',
        'type'    => '訂位',
        'content'    => '測試內容文字測試內容文字測試內容文字測試內容文字測試內容文字測試內容文字',
    ];

    return new App\Mail\ContactUSAdmin($array);
});