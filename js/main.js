( function () {
    const header = document.querySelector('header')

    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header-active')
        } else {
            header.classList.remove('header-active')
        }
    }
}());

( function () {
    const burger = document.querySelector('.header-burger')
    const menu = document.querySelector('.header-nav')
    const closeMenu = document.querySelector('.nav-close')
    const menuLink  = document.querySelectorAll('.header-link')

    burger.addEventListener('click', () => {
        menu.classList.add('header-nav-active')
    })
        closeMenu.addEventListener('click', () => {
            menu.classList.remove('header-nav-active')
        })
    if (window.innerWidth < 770) {
        for (var i = 0; i <= menuLink.length; i++){
            menuLink[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active')
            })
        }
    }
}())

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());