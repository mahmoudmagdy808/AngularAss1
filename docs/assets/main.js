$(window).scroll(function () {
    let scrollHeight = $(window).scrollTop();

    if (scrollHeight > 5) {
        $('.navbar').removeClass('py-4')

    }
    else{
        $('.navbar').addClass('py-4');
    }
});
