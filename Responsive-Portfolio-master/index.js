$(document).ready(function (e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function () {
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function (e) {
        $navbar.toggleClass("toggle-left");
        console.log("Navbar clicked");
    })

});
function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' });
    }
}

// Collapse when menu item is clicked
$('.navbar-nav>a').on('click', function () {
    if ($win.width() <= 768) // This is for screen size
        $navbar.toggleClass("toggle-left");
});


var typed = new Typed('#typed', {
    strings: [
        'Not Only KOBI',
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




/*
$(document).ready(function(e){

    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-buttton');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    //resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, widhth);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })
})

function toggle_onclick($win, $navbar, width){
    if($win.width() <=768){
        $navbar.css({left:`-${width}px`});
    }
    else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Not only Kobi',
        'Web Developer',
        'Freelancer',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true

});


var typed_2 = new Typed('#typed_2',{
    strings:[
        'Web Developer',
        'Freelancer',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
*/