$(document).ready(function(){
    // 변수 ht에 브라우저의 높이 값을 지정
    let ht = $(window).height(); 
    $("section").height(ht);

    // 브라우저가 리사이즈될 때마다 브라우저와 section의 높이값을 갱신
    $(window).on("resize", function(){
        let ht = $(window).height(); 
        $("section").height(ht);
    });

    $("section").on("mousemove", function(e){
        let posX = e.pageX;
        let posY = e.pageY;

        $(".p11").css({right:20-(posX/30), bottom:20-(posY/30)});
        $(".p12").css({right:130+(posX/20), bottom:-40+(posY/20)});
        $(".p13").css({right:60+(posX/20), top:180+(posY/20)});

        $(".p21").css({right:-180-(posX/30), bottom:-480-(posY/30)});
        $(".p22").css({right:130+(posX/50), bottom:-40+(posY/50)});

        $(".p31").css({right:180-(posX/30), bottom:30-(posY/30)});
        $(".p32").css({right:110+(posX/20), bottom:-270+(posY/20)});
        $(".p33").css({right:-70+(posX/20), bottom:-130+(posY/20)});

        $(".p41").css({right:20-(posX/30), bottom:-120-(posY/30)});
        $(".p42").css({right:0+(posX/20), bottom:-180+(posY/20)});
    });

    // 메뉴 클릭시
    $("#menu li").on("click",function(e){
        e.preventDefault();

        let ht = $(window).height();
        let i = $(this).index();
        let nowTop = ht * i;

        $("html, body").stop().animate({
            scrollTop: nowTop
        }, 1400);

        // 현재 클릭한 li에 on 클래스 추가, 형제 li에서는 제거
        $(this).addClass("on").siblings().removeClass("on");
    });

    // 화면이 스크롤될 때마다 현재 영역에 해당하는 메뉴 활성화하기
    $(window).on("scroll", function(){
        let scroll = $(window).scrollTop();

        $("section").each(function(){
            let sectionTop = $(this).offset().top - ht * 0.5;
            let sectionIndex = $(this).index();

            if (scroll >= sectionTop) {
                $("#menu li").removeClass("on");
                $("#menu li").eq(sectionIndex).addClass("on");
            }
        });
    });

    // 마우스 휠 이벤트
    $("section").on("mousewheel", function(event, delta){
        if (delta > 0) {
            let prev = $(this).prev().offset().top;
            $("html, body").stop().animate({
                scrollTop: prev
            }, 1400, "easeOutBounce");
        } else if (delta < 0) {
            let next = $(this).next().offset().top;
            $("html, body").stop().animate({
                scrollTop: next
            }, 1400, "easeOutBounce");
        }
    });
});
