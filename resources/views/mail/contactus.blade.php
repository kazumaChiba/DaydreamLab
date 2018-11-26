@component('mail::message')
# Introduction

The body of your message.
ContactUS
{{ $input_array['content'] }}
<p>{{ $input_array['content'] }}</p>
<p>{{ $input_array['content'] }}</p>

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
