document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        width: 1200,
        slidesPerView: 5,
        scrollbar: {
            el: ".swiper-scrollbar",
            // hide: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1.7,
                spaceBetween: 16,
                width: 300,
            },
            575.98: {
                slidesPerView: 1.8,
                spaceBetween: 16,
                width: 400,
            },
            767.97: {
                slidesPerView: 2.7,
                spaceBetween: 20,
                width: 800,
            },
            991.98: {
                slidesPerView: 4,
                spaceBetween: 20,
                width: 1200,
            },
            1199.98: {
                slidesPerView: 5,
                spaceBetween: 20,
                width: 1500,
            }
        }
    })
})
