$(function(){
// start
var imgHeight;
var nowIndex;
var carouselLi;
var liCount;
var imgWidth;

$(document).ready(function(){
    carouselInit();
});

$(window).resize(function(){
    carousel_setImgPosition();
});

// ----------- design_color ---------------------------------
    $('.design_color a').on('click',function(e){
        e.preventDefault();
        var aIndex = $(this).index();
        $('.design_color a').removeClass('on');
        $(this).addClass('on');
        $('.design_img ul').removeClass('on_block');
        $('.design_img ul').eq(aIndex).addClass('on_block');
        carouselInit()
    });

// ----------- design_img_position ---------------------------------
    function carouselInit(){
        carouselLi = $('.on_block li');
        liCount = carouselLi.length;
        nowIndex = 0;
        carousel_setImgPosition();
    };
    function carousel_setImgPosition(){
        imgHeight = $('.design_img .on_block li img').height();
        $('.design_img .on_block').height(imgHeight);
        imgWidth = carouselLi.width();
        for(var i=0; i<liCount; i++){
            if( i == nowIndex){
                carouselLi.eq(i).css("left",0);
            }else{
                carouselLi.eq(i).css("left",imgWidth);
            }
        }
    }
//     test()
// function test(){
// ----------- design_move_prev ---------------------------------
    $('.design_move p:first').on('click',function(){
        // console.log(nowIndex);
        carouselLi.eq(nowIndex).css("left", -imgWidth);
        if(nowIndex <= 0) {
            carouselLi.eq(3).css("left", 0);
            nowIndex = 4;
        } else {
            carouselLi.eq(nowIndex - 1).css("left", 0);
        }
        nowIndex--;
        carouselLi.eq(nowIndex + 1).css("left", imgWidth);
    });

// ----------- design_move_next ---------------------------------
    $('.design_move p:last').on('click',function(){
        // console.log(nowIndex);
        carouselLi.eq(nowIndex).css("left", -imgWidth);
        if(nowIndex == liCount -1) {
            carouselLi.eq(0).css("left", 0);
            nowIndex = -1;
        } else {
            carouselLi.eq(nowIndex + 1).css("left", 0);
        }  
        nowIndex++;
        carouselLi.eq(nowIndex - 1).css("left", imgWidth);
    });
// }

// ----------- img_select ---------------------------------

// end
});
