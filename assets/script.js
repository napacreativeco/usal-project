// PRELOADER
$( document ).ready(function() {
    setTimeout(function() {
        $('.loading').fadeOut();
    }, 2500);
});

// window.addEventListener('scroll', _.throttle(callback, 1000));

function throttle (callback, limit) {
    var tick = false;
    return function () {
      if (!tick) {
        callback.call();
        tick = true;
        setTimeout(function () {
          tick = false;
        }, limit);
      }
    }
  }
  


var customFunction = function() {

    // var currentScrollPos = window.pageYOffset;
    var currentScrollPos = $(window).scrollTop();
    var divided = currentScrollPos / 8;

    // Move Logo
    $('.logo > img').css({
        height: 100 - divided + 'vh',
    });


    if (currentScrollPos > 1000) {

        // VIDEO
        $('.vimeo').css({
            opacity: '1',
            width: divided / 2 + 'vw',
            maxWidth: '100vw',
            margin: '0 auto 0 auto',
        });

        // GALLERYU
        // $('.gallery__alt > img').css({
        //     paddingTop: divided - 100
        // })

    } else {

        // VIDEO
        $('.vimeo').css({
            opacity: '0',
            width: '0%',
        });

    }

    console.log(divided)
}

window.addEventListener("scroll", throttle(customFunction, 16));