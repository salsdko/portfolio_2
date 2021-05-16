// 서브메뉴

$("nav > ul > li").mouseover(function(){
    $(".nav_bg, ul.sub").stop().slideDown(200);
});
$("nav > ul > li").mouseout(function(){
    $(".nav_bg, ul.sub").stop().slideUp(200);
});


// 배너

$(document).ready(function() {
    $('.slider').bxSlider({
        auto: true, // 자동으로 애니메이션 시작 (수동: false)
        speed: 500, // 애니메이션이 넘어가는 속도
        pause: 3000, // 애니메이션 유지 시간 (1000은 1초)
        mode: 'fade', // 슬라이드 모드 ('fade', 'horizontal', 'vertical')
        pager: true, // 페이지 표시 보여짐
        captions: true, // 이미지 위에 텍스트를 넣을 수 있음
        controls: true, /*가로버튼 사라짐*/
        });
    });

// 컨텐츠2
$(document).on('ready', function() {
    $(".center").slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });
  });    

    // 탑버튼
// $(function(){

//     $('.go_top').click(function(e){
//        e.preventDefault();
//        $('html,body').stop().animate({scrollTop:0},300); 
//     });

// });

