$(function(){
// start

// header
var builtinTop = $('.container_builtin').offset().top;
var imgOn = $('.header_nav h1 img').attr('src');

console.log(builtinTop);
$(window).on('scroll',function(){
    if(builtinTop <= $(window).scrollTop()){
        var imgOnc = imgOn.replace('_on','_off');
        $('.header_nav h1 img').attr('src',imgOnc);
        $('header .header_nav').css({
            background: 'rgba(255, 255, 255, .3)'
        });
        $('.header_nav nav strong').css({
            color: '#000'
        })
        $('.header_menu span').css({
            background: '#000'
        })
    }else{
        var imgOffc = imgOn.replace('_off','_on');
        $('.header_nav h1 img').attr('src',imgOffc);
        $('header .header_nav').css({
            background: 'rgba(0, 0, 0, .8)'
        });
        $('.header_nav nav strong').css({
            color: '#fff'
        })
        $('.header_menu span').css({
            background: '#fff'
        })
    }
});
// header nav
$('header .header_nav nav').on('click',function(){
    $('header ul').toggleClass('active');
    $('header .header_nav nav p').toggle(900);
    $('.header_menu').toggle(900);
});

// end
});
