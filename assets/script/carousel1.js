document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.swiper', {
        // loop: true,
        mousewheel: {
            invert: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        scrollbar: {
            el: ".swiper-scrollbar"
        },
        slidesPerView: 4,
        spaceBetween: 20,
        width: 1500,
        breakpoints: {
            320: {
                slidesPerView: 1.7,
                spaceBetween: 16,
                width: 280,
            },
            575.98: {
                slidesPerView: 1.8,
                spaceBetween: 16,
                width: 500,
            },
            767.97: {
                slidesPerView: 2.7,
                spaceBetween: 20,
                width: 700,
            },
            991.98: {
                slidesPerView: 4,
                spaceBetween: 20,
                width: 1000,
            },
            1199.98: {
                slidesPerView: 4,
                spaceBetween: 20,
                width: 1200,
            }
        }
    })
    new Swiper('.swiper-cases', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            991.98: {
                // width: 1000,
                
            },
        }
    })
})
