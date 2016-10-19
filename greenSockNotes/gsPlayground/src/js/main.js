(function($) {

    // JS code goes here
    var img = $('img');
    var h2 = $('h2');

    TweenLite.from(img, 1, {
        x: -200,
        ease: Power0.easeOut
    });
    TweenLite.from(h2, 1, {
        autoAlpha: 0,
        delay: 1
    });


})(jQuery);

// GSAP CSSPlugin is commonly used with TweenLite / Tween for animation.


//timeline chapter

// var h1 = $('h1');
// var img = $('img');
// var intro = $('.intro');
// var listItem = $('ul li');
// var tl = new TimeLineLite();

// adding Tweens To A Timeline
// tl
//     .from(h1, 0.3, {
//         y: -15,
//         autoAlpha: 0,
//         ease: Power1.easeOut
//     })
//     .from(intro, 0.3, {
//         y: -15,
//         autoAlpha: 0,
//         ease: Power1.easeOut
//     })
//     .from(h1, 0.3, {
//         y: -15,
//         autoAlpha: 0,
//         ease: Power1.easeOut
//     })
//     .from(h1, 0.3, {
//         y: -15,
//         autoAlpha: 0,
//         ease: Power1.easeOut
//     })
//     .from(h1, 0.3, {
//         y: -15,
//         autoAlpha: 0,
//         ease: Power1.easeOut
//     })



// var header = document.getElementById('header');
// var h1 = document.getElementsByTagName('h1');
// var intro = document.getElementsByClassName('intro');
// var firstItem = document.getElementsByClassName('list')[0].firstElementChild;
// var secondItem = document.getElementsByClassName('list')[0].children[1];
// var lastItem = document.getElementsByClassName('list')[0].lastElementChild;
