jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
$(document).ready(function(){
    $(".reviews_slider").owlCarousel({
        items: 3,
        loop:true,
        margin:70,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:2,
            },
            991:{
                items:3,
                margin:30,
            }
        }
    });
});
$(document).ready(function(){
    $(".select-route_slider").owlCarousel({
        items: 1,
        loop:true,
        margin:0,
        nav:true,
        dots:false,
    });
});
$(document).ready(function(){
    $(".preview-img").owlCarousel({
        items: 4,
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsive: {
            0:{
                items:2
            },
            480:{
                items:3
            },
            767:{
                items:4
            }
        }

    });
$(document).ready(function(){
    $('.content_toggle').click(function(){
        $('.content_block').toggleClass('hide');
        if ($('.content_block').hasClass('hide')) {
            $('.content_toggle').html('Показать еще <img style="width: 17px;height: 9px" src="assets/images/arrow_down.png" alt=""> ');
        }
        else {
            $('.content_toggle').html('Скрыть');
        }
        return false;
    });
});


(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
    (function($) {
        $(function() {
            $("ul.tabs__caption_two").on("click", "li:not(.active)", function() {
                $(this)
                    .addClass("active")
                    .siblings()
                    .removeClass("active")
                    .closest("div.tabs_two")
                    .find("div.tabs__content_two")
                    .removeClass("active")
                    .eq($(this).index())
                    .addClass("active");
            });
        });
    })(jQuery);
})(jQuery);

/*let a = */


let bigImg = document.querySelector('.full-img');
let subImg = document.querySelector('.preview-img').getElementsByTagName("img");

 for (let i = 0; i < subImg.length; i ++) {
     subImg[i].addEventListener("click", full);
 }
 function full() {
     let imgSrc = this.getAttribute('src');
    bigImg.innerHTML = "<img  src="+imgSrc+">";
 }
let bigImg2 = document.querySelector('.sync2');
let subImg2 = document.querySelector('.sync21').getElementsByTagName("img");

for (let i = 0; i < subImg2.length; i ++) {
    subImg2[i].addEventListener("click", full2);
}
function full2() {
    let imgSrc = this.getAttribute('src');
    bigImg2.innerHTML = "<img  src="+imgSrc+">";

}
let bigImg3 = document.querySelector('.sync3');
let subImg3 = document.querySelector('.sync31').getElementsByTagName("img");

for (let i = 0; i < subImg3.length; i ++) {
    subImg3[i].addEventListener("click", full3);
}
function full3() {
    let imgSrc = this.getAttribute('src');
    bigImg3.innerHTML = "<img  src="+imgSrc+">";

}
let bigImg4 = document.querySelector('.sync4');
let subImg4 = document.querySelector('.sync41').getElementsByTagName("img");

for (let i = 0; i < subImg4.length; i ++) {
    subImg4[i].addEventListener("click", full4);
}
function full4() {
    let imgSrc = this.getAttribute('src');
    bigImg4.innerHTML = "<img  src="+imgSrc+">";

}
let bigImg5 = document.querySelector('.sync5');
let subImg5 = document.querySelector('.sync51').getElementsByTagName("img");

for (let i = 0; i < subImg5.length; i ++) {
    subImg5[i].addEventListener("click", full5);
}
function full5() {
    let imgSrc = this.getAttribute('src');
    bigImg5.innerHTML = "<img  src="+imgSrc+">";

}
});
jQuery(document).ready(function($) {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        fixedContentPos: true

    });
});
var element = document.getElementById('phone');
var maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: false
};
var mask = new IMask(element, maskOptions);