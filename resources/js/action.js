function loadSwiper(slides){
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: slides,
        paginationClickable: true,
        centeredSlides: true,
        spaceBetween: 30
    });
}

function getSlideAmount(){
    if(window.innerWidth < 800){
        return 1;
    }


    return 6;
}

loadSwiper(getSlideAmount());
