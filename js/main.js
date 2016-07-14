/**
 * Created by Administrator on 2015/4/7.
 */
require.config({
    waitSeconds : 45,
    paths: {
        "jquery": "jquery.min",
        "typed":"typed",
        "slippry":"slippry",
        "bootstrap":"bootstrap.min"
        // "swiper":"sj",
        // "swiperAnimate":"sa",
        // "jweixin":"jweixin-1.0.0",
        // "sha1":"sha1"
    },
    map: {
        '*': {
            'css': 'css.min'
        }
    },
    shim : {
        "jquery": {
            exports: "jquery"
        },
        // "typed":{
        //     deps: ["jquery"]
        // },
        "slippry":{
            deps:["jquery"]
        }
    }
});

require(["jquery"],function($){

    var screenWidth = $(window).width()

    // var titleArr = []

    $(function(){

        // if(screenWidth>800){
        //   titleArr.push("互联网＋保险的探索者，致力于创造最好用的展业工具")
        // }else{
        //   titleArr.push("互联网＋保险的探索者，<br>致力于创造最好用的展业工具")
        // }

        // $(".element").typed({
        //   strings:titleArr,
        //   typeSpeed: 70,
        //   showCursor: false
        // });

        if(screenWidth>800){
            $('.lazy-css').each(
                function(){
                $(this).attr("src",$(this).attr("lazy-src")).removeAttr("lazy-src")
            });
        }
    });

    require(["slippry","bootstrap"],function(){
        $(function() {
          var demo1 = $("#slider").slippry({
             transition: 'kenburns',
             useCSS: true,
             speed: 5000,
             pause: 9000,
             auto: true,
             controls: false,
             preload: 'visible',
             autoHover: false
          });
        });
    });

});