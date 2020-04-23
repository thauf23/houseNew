$(function(){
// start
$('.design_color a').on('click',function(e){
    e.preventDefault();
    var aIndex = $(this).index();
    $('.design_color a').removeClass('on');
    $(this).addClass('on');
    $('.design_img ul').removeClass('on_block');
    $('.design_img ul').eq(aIndex).addClass('on_block');
});
var imgHeight = $('.design_img ul li img').height();
console.log(imgHeight);
var ulHeight = $('.design_img ul').height(imgHeight);
var nowIndex;
var carouselLi;
var liCount;
var imgWight;
$(window).resize(function(){
    carousel_setImgPosition();
});
// function carouselInit(){
    $('.design_img ul').height();
    carouselLi = $('.on_block li');
    liCount = carouselLi.length;
    console.log(liCount);
    nowIndex = 0;
    carousel_setImgPosition();
    // carousel();
// };
function carousel_setImgPosition(){
    imgWight = carouselLi.width();
    console.log(imgWight);
    for(var i=0; i<liCount; i++){
        if( i == nowIndex){
            carouselLi.eq(i).css("left",0);
        }else{
            carouselLi.eq(i).css("left",imgWight);
        }
    }
}
// function carousel(){

// }

// end
});
