@component('mail::message')
# Introduction

The body of your message.
{{$greeting}}
@foreach ($introLines as $line)
<p>{{$line}}</p>
@endforeach
<p>WTF!</p>

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent

