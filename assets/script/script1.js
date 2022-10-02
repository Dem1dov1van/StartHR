document.addEventListener("DOMContentLoaded", () => {
    let dropdownMenu = document.querySelector('.dropdown-js')
    dropdownMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('open')
        if(body.classList.contains('no-scroll')){
            body.classList.remove('no-scroll')
            body.classList.remove('no-scroll-md')
        } else {
            body.classList.add('no-scroll')
            body.classList.add('no-scroll-md')
        }
    })
    
    let dropdownMenuOutside = document.querySelector('.outside-js')
    dropdownMenuOutside.addEventListener('click', () => {
        dropdownMenu.classList.remove('open')
        body.classList.remove('no-scroll')
        body.classList.remove('no-scroll-md')
    })
    
    let burger = document.querySelector('.open-menu-js')
    burger.addEventListener('click', () => {
        burgerBtnHandler()
    })
    
    function burgerBtnHandler() {
        if(!burger.classList.contains('opened')) {
            burger.classList.add('opened')
            body.classList.add('no-scroll')
            body.classList.add('no-scroll-md')
        } else {
            burger.classList.remove('opened')
            body.classList.remove('no-scroll')
            body.classList.remove('no-scroll-md')
        }
        headerMenu.classList.toggle('open')
    }
    
    const body = document.querySelector('body')
    
    const headerMenu = document.querySelector('.header__list-wrapper')
    
    const swiper = new Swiper('.swiper', {
        // loop: true,
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
    
    const swiper2 = new Swiper('.swiper-cases', {
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
    
    const formSection = document.querySelector('#form')
    
    const orderBtn = document.querySelector('.order-btn-js')
    
    orderBtn.addEventListener('click', () => {
        window.scrollTo({
            top: formSection.offsetTop + 30,
            behavior: "smooth"
        })
    })
    
    document.querySelector('.sublist').addEventListener('click',(e) => e.stopPropagation())
})
