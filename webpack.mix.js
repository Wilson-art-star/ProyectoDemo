let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
     'resources/assets/pantilla/css/font-awesome.min.css',
     'resources/assets/pantilla/css/simple-line-icons.min.css',
     'resources/assets/pantilla/css/style.css'
],'public/css/plantilla.css')
.scripts([
     'resources/assets/pantilla/js/bootstrap.min.js',
     'resources/assets/pantilla/js/Chart.min.js',
     'resources/assets/pantilla/js/jquery.min.js',
     'resources/assets/pantilla/js/pace.min.js',
     'resources/assets/pantilla/js/popper.min.js',
     'resources/assets/pantilla/js/template.js'
],'public/js/plantilla.js')
.js(['resources/assets/js/app.js'],'public/js/app.js');