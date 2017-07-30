$("#shop").click(function() {
    $('html, body').animate({
        scrollTop: $("#latest").offset().top
    }, 1000);
});

$("#brands").click(function() {
    $('html, body').animate({
        scrollTop: $("#catalog").offset().top
    }, 1500);
});

$("#blog-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#blog").offset().top
    }, 2000);
});

$(document).ready(function() {      
            $(".blog__slider-toggle--next").click(function() {
                var duplicate = $("#blog-post-2").clone();

                //
                $(duplicate).appendTo(".blog__slider");

                $(".blog__slider").animate(, 2000, 'linear', function() {
                    $("#blog-post-1").remove();
                }); 


            });
        });