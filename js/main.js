
/* owl carousel for brand logo carousel */
var owl = $('.brand.owl-carousel');
owl.owlCarousel({
    items:6,
    nav:false,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
              nav:false,
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:6,
             nav:false,
            loop:false
        }
    }
});

/* owl carousel plugin activation*/
var owl = $('.owl-carousel.new-product');
owl.owlCarousel({
    items:4,
    nav:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});

var owl = $('.owl-carousel.hot-deal-carousel');
owl.owlCarousel({
    items:1,
    nav:true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
});

// for featured products 

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    nav:true,
    loop:true,   
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
});


