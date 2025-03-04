$(function(){
// start
var aIndex;
var imgHeight;
var nowIndex;
var carouselLi;
var liCount;
var imgWidth;
var imgNode;
    
$(window).resize(function(){
    carousel_setImgPosition();
});

// ----------- design_color ---------------------------------
    $('.design_color a').on('click',function(e){
        e.preventDefault();
        aIndex = $(this).index();
        $('.design_color a').removeClass('on');
        $(this).addClass('on');
        $('.design_img ul').removeClass('on_block');
        $('.design_img ul').eq(aIndex).addClass('on_block');
        carouselInit();
        popimgAdd();
    });

// ----------- design_img_position ---------------------------------
   setTimeout(carouselInit,100);
    
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

// ----------- design_move_prev ---------------------------------
    $('.design_move p:first').on('click',function(){
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

// ----------- design_pop_page ---------------------------------
    $('.design_popup img').on('click',function(){
        $('.design_poppage').css("display", "block");
    });
    $('.design_poppage p').on('click',function(){
        $('.design_poppage').css("display", "none");
    });

// ----------- design_img_add ---------------------------------
    popimgAdd()
    function popimgAdd(){
        $('.design_poppage img').remove();
        $.ajax({
            url : 'js/house_detail_page.json',
            type : 'GET', //POST
            dataType : 'json',
            success :function(data){                
                if(aIndex == 0){
                    for(var i in data.silver){
                        imgNode = "<img src="+data.silver[i]+">";
                        $('.design_poppage').append(imgNode);               
                    }
                }else{
                    for(var i in data.graphite){
                        imgNode = "<img src="+data.graphite[i]+">";
                        $('.design_poppage').append(imgNode);               
                    }
                }
            }
        });
    }

// ----------- gallery_open ---------------------------------
$('.refrigerator_gallery ul').on('click',function(){
    $('.gallery_pop').css('display','block');
    $('.gallery_pop').css('display','flex');
});
$('.gallery_x').on('click',function(){
    $('.gallery_pop').css('display','none');
});

// ----------- size_button ---------------------------------
$('.refrigerator_information').slideUp();
$(".size_button").on('click',function(){
    $(".size_button p").toggleClass('rotate');
    console.log($(".size_button p"));
    $('.refrigerator_information').slideToggle(500);
});

// ----------- sub_nav ---------------------------------
var firstSec = $('.refrigerator_design').offset().top;
var p = $(window).height();
console.log(p)
var rollTop;


$(window).on('scroll',function(){
    rollTop = $(window).scrollTop();
    // console.log(rollTop);
    // console.log(firstSec);
    if( firstSec < rollTop ) {
        $('.container_nav').css({
            width: "78%",
            position: "fixed",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            margin: 0,
            zIndex: 200,
        });
    } else {
        $('.container_nav').css({
            width: "100%",
            position: "relative",
            marginTop: "7em"
        });
    }
});


// end
});
