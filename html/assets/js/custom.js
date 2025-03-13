/* Script on ready
---------------------------------*/
document.addEventListener('DOMContentLoaded', function () {

});

/* Script on load
----------------------------------*/
window.addEventListener('load', function () {
    /* sticky footer function */
    StickyFooter();

    equalheight('.equal-height');
});

/* Script on scroll
---------------------------------*/
window.addEventListener('scroll', function () {

});

/* Script on resize
---------------------------------*/
window.addEventListener('resize', function () {

    equalheight('.equal-height');

    /* sticky footer function */
    setTimeout(function () {
        StickyFooter();
    }, 50);
});


/* Script all functions
----------------------------------*/

/* sticky footer function */
function StickyFooter() {
    var footerHeight = document.querySelector('footer').offsetHeight;
    document.getElementById('wrapper').style.marginBottom = -footerHeight + 'px';
    document.getElementById('wrapper').style.paddingBottom = footerHeight + 'px';
}

// equal height testimonials block
function equalheight(container) {
    var elements = document.querySelectorAll(container);
    var currentTallest = 0;
    var currentRowStart = 0;
    var rowDivs = [];
    var topPosition = 0;

    elements.forEach(function (el) {
        el.style.height = 'auto';
        topPosition = el.getBoundingClientRect().top;

        if (currentRowStart !== topPosition) {
            for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].style.height = currentTallest + 'px';
            }
            rowDivs = []; // empty the array
            currentRowStart = topPosition;
            currentTallest = el.offsetHeight;
            rowDivs.push(el);
        } else {
            rowDivs.push(el);
            currentTallest = Math.max(currentTallest, el.offsetHeight);
        }

        for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].style.height = currentTallest + 'px';
        }
    });
}


// Splide Slider Sample
// var splide = new Splide('.splide', {
//     type: 'loop',
//     perPage: 3,
//     perMove: 1,
//     focus: 'center',
//     pagination: false,
//     arrows: false,
//     breakpoints: {
//         768: {
//             perPage: 2,
//         },
//         480: {
//             perPage: 1,
//         },
//     },
// });
// splide.mount();


// Masonry Grid Sample
// var elem = document.querySelector('.grid');
// var msnry = new Masonry(elem, {
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-item',
//     percentPosition: true
// });


// FancyBox Sample
// Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options
// });