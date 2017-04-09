var height = $(window).height();
console.log(height);
$(".site-wrapper").css("height", height);
$("#main_img").css("height",height - 110);

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 300);
    return false;
});