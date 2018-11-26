let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout',
            // custom aliases for easy reference
            'src': path.resolve(__dirname, 'resources/assets/'),
            'assets': path.resolve(__dirname, 'resources/assets/'),
            'components': path.resolve(__dirname, 'resources/assets/components/'),
            'pages': path.resolve(__dirname, 'resources/assets/pages/'),
            'img': path.resolve(__dirname, 'resources/assets/images/'),
            'utils': path.resolve(__dirname, 'resources/assets/utils/'),

            "TweenLite": path.resolve('node_modules', 'gsap/src/minified/TweenLite.min.js'),
            "TweenMax": path.resolve('node_modules', 'gsap/src/minified/TweenMax.min.js'),
            "TimelineLite": path.resolve('node_modules', 'gsap/src/minified/TimelineLite.min.js'),
            "TimelineMax": path.resolve('node_modules', 'gsap/src/minified/TimelineMax.min.js'),
            "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
            "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
            "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js')
        }
    },
    // https://github.com/JeffreyWay/laravel-mix/issues/936#issuecomment-331418769
    output: {
        publicPath: '/',
        chunkFilename: mix.inProduction() ? 'js/[name].[chunkhash].js' : 'js/[name].js'
    }
});

mix.js('resources/assets/main.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');