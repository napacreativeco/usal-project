// PRELOADER
$( document ).ready(function() {
    // $('.loading').css({
    //     opacity: 0
    // });
    setTimeout(function() {
        $('.loading').css({
            opacity: 0
        })
    }, 4000);

    setTimeout(function() {
        $('.loading').css({
            display: 'none'
        })
    }, 4500);

    $('#myVideo').trigger('play');
});

// $('#mc-embedded-subscribe-form').on('submit', function() {
//     $('#mce-success-response').html('Thank you for subscribing');
// });

// select the target node
var target = document.getElementById('mce-success-response');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (target.innerHTML === "Thank you for subscribing!") {
      target.innerHTML = "Thank you for subscribing";
    }
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);


// var customFunction = function() {

// window.onscroll = function() {


//     // var currentScrollPos = window.pageYOffset;
//     var currentScrollPos = $(window).scrollTop();
//     var divided = currentScrollPos / 5;
//     var logo = $('.logo');
//     var second = $('.sticky > svg');
//     var theWidth = $('.logo').width();
    

//     // Move Logo
//     // logo.css({
//     //     width: 100 - divided + 'vw'
//     // });

//     // second.css({
//     //     height: 90 - divided + 'vh'
//     // });




// }


// THROTTLE FUNCTION
// $(document).ready(function() {
//     // THROTTLE SCROLL
//     function throttle (callback, limit) {
//         var tick = false;
//         return function () {
//                 if (!tick) {
//                     callback.call();
//                     tick = true;
//                     setTimeout(function () {
//                         tick = false;
//                 }, limit);
//             }
//         }
//     }
    

// window.addEventListener("scroll", throttle(customFunction, 6));





// ORIGINAL BELOW

// $('#sticky').addClass('stick');

// function sticky_relocate() {

//     var window_top = $(window).scrollTop();
//     var div_top = $('.two').offset().top;

//     var theHeight = $('.logo').width();


//     if (window_top > div_top) {
//         $('#sticky').addClass('stick');
//         $('#sticky-phantom').show();

//         $('.desc').css({
//             paddingTop: '300px'
//         })
//     } else {
//         $('#sticky').removeClass('stick');
//         $('#sticky-phantom').hide();

//         $('.desc').css({
//             paddingTop: '0px'
//         })
//     }
// }

// $(function () {
//     $(window).scroll(sticky_relocate);
//     sticky_relocate();
// });


