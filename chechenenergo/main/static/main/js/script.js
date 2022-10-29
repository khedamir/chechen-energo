// гамбургер
$('.menu-btn').on('click', function(e){
    e.preventDefault;
    function time (){
        $('.menu-btn').toggleClass('menu-btn_active');
        $('.backdrop').toggleClass('backdrop_active');
    }
    setTimeout(time, 500);
    
    $('.mob-nav').toggleClass('mob-nav_active');
    $('.burger').toggleClass('burger_active');
})

$('.backdrop').on('click', function(e){
    function time (){
        $('.menu-btn').toggleClass('menu-btn_active');
        $('.backdrop').toggleClass('backdrop_active');
    }
    setTimeout(time, 500);
    
    $('.mob-nav').toggleClass('mob-nav_active');
    $('.burger').toggleClass('burger_active');
})





// раскрывающееся меню навигатора

$('.nav_item1').on('mouseover', function(e){
    $('.nav-list').removeClass('nav-list_active')
    $('.nav-list1').addClass('nav-list_active');
})
$('.nav-list1').on('mouseover', function(e){
    $('.nav-list1').addClass('nav-list_active');
})



$('.nav_item2').on('mouseover', function(e){
    $('.nav-list').removeClass('nav-list_active')
    $('.nav-list2').addClass('nav-list_active');
})
$('.nav-list2').on('mouseover', function(e){
    $('.nav-list2').addClass('nav-list_active');
})



$('.nav_item3').on('mouseover', function(e){
    $('.nav-list').removeClass('nav-list_active')
    $('.nav-list3').addClass('nav-list_active');
})
$('.nav-list3').on('mouseover', function(e){
    $('.nav-list3').addClass('nav-list_active');
})



$('.nav_item4').on('mouseover', function(e){
    $('.nav-list').removeClass('nav-list_active')
    $('.nav-list4').addClass('nav-list_active');
})
$('.nav-list4').on('mouseover', function(e){
    $('.nav-list4').addClass('nav-list_active');
})



$('.main-nav_item').on('mouseout', function(e){
    $('.nav-list').on('mouseout', function(e){
        $('.nav-list').removeClass('nav-list_active');
    })
})







// анимация навигатора первого слайдера
$('.slide-label1').on('click', function(e){
    $('.slide-label1').addClass('slide-label_active');
    $('.slide-label2').removeClass('slide-label_active');
})

$('.slide-label2').on('click', function(e){
    $('.slide-label2').addClass('slide-label_active');
    $('.slide-label1').removeClass('slide-label_active');
}) 




// анимация галереи

$('.gallery_img1').on('click', function(e){
    $('.modal-img1').addClass('modal-img_active');
    $('.gallery-modal').addClass('gallery-modal_active');
    $('.backdrop2').addClass('backdrop2_active');
})

$('.gallery_img2').on('click', function(e){
    $('.modal-img2').addClass('modal-img_active');
    $('.gallery-modal').addClass('gallery-modal_active');
    $('.backdrop2').addClass('backdrop2_active');
})

$('.gallery_img3').on('click', function(e){
    $('.modal-img3').addClass('modal-img_active');
    $('.gallery-modal').addClass('gallery-modal_active');
    $('.backdrop2').addClass('backdrop2_active');
})

$('.gallery_img4').on('click', function(e){
    $('.modal-img4').addClass('modal-img_active');
    $('.gallery-modal').addClass('gallery-modal_active');
    $('.backdrop2').addClass('backdrop2_active');
})

$('.gallery_img5').on('click', function(e){
    $('.modal-img5').addClass('modal-img_active');
    $('.gallery-modal').addClass('gallery-modal_active');
    $('.backdrop2').addClass('backdrop2_active');
})

$('.gallery_img6').on('click', function(e){
    $('.modal-img6').addClass('modal-img_active');
    $('.gallery-modal').addClass('gallery-modal_active');
    $('.backdrop2').addClass('backdrop2_active');
})


$('.modal-x').on('click', function(e){
    $('.gallery-modal').removeClass('gallery-modal_active');
    $('.modal-img').removeClass('modal-img_active');
    $('.backdrop2').removeClass('backdrop2_active');
})

$('.backdrop2').on('click', function(e){
    $('.gallery-modal').removeClass('gallery-modal_active');
    $('.modal-img').removeClass('modal-img_active');
    $('.backdrop2').removeClass('backdrop2_active');
})






$('.list-title1').on('click', function(e){
    $('.territory-list1').toggleClass('territory-list_active');
})

$('.list-title2').on('click', function(e){
    $('.territory-list2').toggleClass('territory-list_active');
})

$('.list-title3').on('click', function(e){
    $('.territory-list3').toggleClass('territory-list_active');
})

$('.list-title4').on('click', function(e){
    $('.territory-list4').toggleClass('territory-list_active');
})

$('.list-title5').on('click', function(e){
    $('.territory-list5').toggleClass('territory-list_active');
})

$('.list-title6').on('click', function(e){
    $('.territory-list6').toggleClass('territory-list_active');
})

$('.list-title7').on('click', function(e){
    $('.territory-list7').toggleClass('territory-list_active');
})

$('.list-title8').on('click', function(e){
    $('.territory-list8').toggleClass('territory-list_active');
})

$('.list-title9').on('click', function(e){
    $('.territory-list9').toggleClass('territory-list_active');
})

$('.list-title10').on('click', function(e){
    $('.territory-list10').toggleClass('territory-list_active');
})

$('.list-title11').on('click', function(e){
    $('.territory-list11').toggleClass('territory-list_active');
})

$('.list-title12').on('click', function(e){
    $('.territory-list12').toggleClass('territory-list_active');
})

$('.list-title13').on('click', function(e){
    $('.territory-list13').toggleClass('territory-list_active');
})

$('.list-title14').on('click', function(e){
    $('.territory-list14').toggleClass('territory-list_active');
})

$('.list-title15').on('click', function(e){
    $('.territory-list15').toggleClass('territory-list_active');
})