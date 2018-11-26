@component('mail::message')
# Introduction

The body of your message.<br>
{{$greeting}}
@foreach ($introLines as $line)
<p>{{$line}}</p>
@endforeach

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
