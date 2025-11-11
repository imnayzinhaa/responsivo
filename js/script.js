//JavaScript Document

$(function(){
    $(".slides").slick({
        slidesToShow:6,
        dots: true,
        autoplay: true,
        responsive: [{
            breakpoint: 1200, settings:{slidesToShow:4}
        },{
            breakpoint: 600, settings:{slidesToShow:2}
        }]
    })
    $(".slides").magnificPopup({
        delegate: 'a', 
        type: 'image',
        zoom: {enabled: true,duration: 500},
        gallery:{enabled:true}
    })
})

$(function(){
    $("#menu i").click(function(){
        $("#submenu").animate({
            height: "toggle"
        })
    })
})