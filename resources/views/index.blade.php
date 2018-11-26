<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable='no'">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>DaydreamLab</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/plugins/ScrollToPlugin.min.js"></script>
            
        <!-- favicon -->
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="{{ asset('js/main.js') }}"></script>
    </body>
</html>
