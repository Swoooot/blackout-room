$(document).ready(function(){
    $('.rooms__slider-content').slick({
        dots: true,
        arrows: false
    });
    if(document.documentElement.clientWidth > 568) {
        $('.rooms__slider-content').slick('unslick');
    }

    var unslicked = $('.rooms__slider-content').slick('getSlick').unslicked;
    
    window.addEventListener('resize', function() {
        if(document.documentElement.clientWidth < 568 && unslicked) {
            $('.rooms__slider-content').slick({
                dots: true,
                arrows: false
            });
            unslicked = $('.rooms__slider-content').slick('getSlick').unslicked;
        }
        if (document.documentElement.clientWidth > 568 && !unslicked) {
            $('.rooms__slider-content').slick('unslick');
            unslicked = $('.rooms__slider-content').slick('getSlick').unslicked;
        }
    })
  });


// $(document).ready(function() {
//     var slidesNumber = $('.rooms__slider-content')[0].children.length;
//     var fullRows = Math.ceil(slidesNumber/3);
//     var desktopSettings;

    
//     var oneRowModeSettings = {
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: slidesNumber,
//             dots: false
//         }
//     }

//     var fewRowsModeSettings = {
//         breakpoint: 1024,
//         settings: {
//             rows: fullRows,
//             slidesPerRow: 3,
//             dots: false
//         } 
//     }

//     if(fullRows > 1) {
//         desktopSettings = fewRowsModeSettings;
//     } else {
//         desktopSettings = oneRowModeSettings;
//     }

//     console.log(desktopSettings);

//     var mobileSettings = {
//         breakpoint: 568,
//         settings: {
//             rows: 1,
//             dots: true,
//             arrows: false
//         } 
//     }

//     $('.rooms__slider-content').slick({
//         responsive:[
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     rows: 3,
//                     slidesPerRow: 2,
//                     dots: false
//                 }
//             },
//             {
//                 breakpoint: 568,
//                 settings: {
//                     rows: 1,
//                     slidesPerRow: 1,
//                     slidesToShow: 1,
//                     dots: true
//                 }
//             }
//         ]
//     });
// });

 