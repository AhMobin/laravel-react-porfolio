<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

{{--    <!-- Scripts -->--}}
{{--    <script src="{{ asset('js/app.js') }}" defer></script>--}}

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Raleway:300,400,500,600,700,800&display=swap" rel="stylesheet">

    <!-- Styles -->
    <style>
        body{
            width: 100%;
            margin:0;
            padding:0;
        }
    </style>

</head>
<body>
    <div id="root"></div>
    <script src="{{ asset('js/app.js') }}" ></script>

</body>
</html>
