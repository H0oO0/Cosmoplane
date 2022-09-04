$(function(){
    var showBanner =0;
    function fadeBanner(){
        $(".banner>li").eq(showBanner).fadeIn(600)
        .siblings().fadeOut(400);

        $(".pager>li").eq(showBanner).addClass("active")
        .siblings().removeClass("active");
    }

    $(".pager>li").click(function(){
        showBanner = $(this).index();
        fadeBanner();
    })

    // setInterval(autoBanner,3000);
    function autoBanner(){
            if(showBanner<3){
                showBanner++;
            }
            else{
                showBanner=0;
            }
            fadeBanner();
        
    }

    $(".style").slick({
        /* centerMode:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        centerPadding:'60px' */
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    })

    var clickH = 0;
    $(".ham").click(function(){
        clickH++;
        if(clickH%2==0){
            $("#nav").animate({
                "left":"-330px"
           }, 300)
            console.log(clickH);
        }
        else{
            $("#nav").animate({
                "left":"0px"
           }, 300)
            $(this).css("z-index","10000000")
        }                
    })

    $("#nav>li").click(function(){
        $(this).children(".sub").toggleClass("toggle")
    })
})