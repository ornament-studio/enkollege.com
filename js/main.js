// ---------------------mobile menu

let menuBtn = document.querySelectorAll('.header__burgerIcon');
let menu = document.querySelector('.header__menu');
let menuLinks = document.querySelectorAll('.header__menu-item');

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleMenu();
    });
});
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});
function toggleMenu() {
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
}
window.addEventListener('scroll', () => {
    document.body.classList.remove('lock');
});




// ----------------------end mobile menu




$(function () {
    const $slider = $('.courses__slider');
    const $progressBar = $('.courses__slide__progress');
    const $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        variableWidth: true,
        speed: 400,
        infinite: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 769, 
                settings: {
                    slidesToShow: 2, 
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

