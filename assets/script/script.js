document.addEventListener("DOMContentLoaded", () => {
    let dropdownMenu = document.querySelector('.dropdown-js')
    dropdownMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('open')
        if(body.classList.contains('no-scroll')){
            body.classList.remove('no-scroll')
        } else {
            body.classList.add('no-scroll')
        }
    })

    let dropdownMenuOutside = document.querySelector('.outside-js')
    dropdownMenuOutside.addEventListener('click', () => {
        dropdownMenu.classList.remove('open')
        body.classList.remove('no-scroll')
    })

    let burger = document.querySelector('.open-menu-js')
    burger.addEventListener('click', () => {
        burgerBtnHandler()
    })

    function burgerBtnHandler() {
        if(!burger.classList.contains('opened')) {
            burger.classList.add('opened')
            body.classList.add('no-scroll')
        } else {
            burger.classList.remove('opened')
            body.classList.remove('no-scroll')
        }
        headerMenu.classList.toggle('open')
    }

    const body = document.querySelector('body')

    const headerMenu = document.querySelector('.header__list-wrapper')

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
