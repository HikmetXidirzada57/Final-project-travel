$(".slick-box").slick({
    dots: true,
    infinite: false,
    autoplay: "true",
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

//  form control/////

$(document).ready(function () {
    $('body').bootstrapMaterialDesign();
});

// Input 1 with Floating Label

var options = {
    strings: [
        "Email Address", "Username", "User ID Number"
    ],
    typeSpeed: 60,
    backSpeed: 20,
    showCursor: false,
    smartBackspace: true, // default
    loop: true
}

var typed = new Typed(".typed1", options);

// Input 2 with Fade Out Animation

var typed2 = new Typed(".typed2", {
    strings: [
        "First Name", "Middle Initial", "Last Name"
    ],
    typeSpeed: 60,
    showCursor: false,
    fadeOut: true,
    fadeOutClass: 'fade-out',
    fadeOutDelay: 1500,
    loop: true
});

// Input 3 with Placeholder

var typed3 = new Typed('.typed3', {
    strings: [
        'Requirements:', '7 Characters Long', 'One Number', 'One Special Character'
    ],
    typeSpeed: 20,
    backSpeed: 10,
    startDelay: 1000,
    backDelay: 1000,
    attr: 'placeholder',
    bindInputFocusEvents: true, // binds to focus/blur so anim pauses when input selected
    loop: true,
    loopCount: 3
});

// Text Area with Typed Inner HTML

var typed4 = new Typed('.typed4', {
    strings: ['&nbsp;> npm start^1000\n `> starting node server/index.js...` ^1000\n `> serve' +
            'r running on port 3000...`\n `> running in production mode...`^500\n `> GET /i' +
            'ndex.html`\n > Startup Successful...'],
    typeSpeed: 60,
    backDelay: 1500,
    fadeOut: true,
    showCursor: false,
    loop: true
});

// Submit Input with Typed Value Attr

var typed5 = new Typed('.typed5', {
    strings: [
        "Submit", "Next", "Enter"
    ],
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 2000,
    attr: 'value',
    loop: true
});

$("#.sidebar-item .item-title i").click(function () {
   var iconIndex=$(this).index();
    $("#.sidebar-item .item-content2").slideUp();
    $("#.sidebar-item .item-content2").eq(iconIndex).slideDown();

})
