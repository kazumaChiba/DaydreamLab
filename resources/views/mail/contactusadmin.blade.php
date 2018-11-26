@component('mail::message')
# Introduction

The body of your message.
ContactUS Admin
{{ $input_array['content'] }}

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
