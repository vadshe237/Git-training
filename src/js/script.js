//burgerMenu
const iconMenu = document.querySelector(".nav__icon");
const menuBody = document.querySelector('.nav__navigation');
const startedButton = document.querySelector('.nav__starter');
if (iconMenu) {
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        startedButton.classList.toggle('_active');
    });
}
//scroll
const menuScroll = document.querySelectorAll('.section[data-goto], .footer__point[data-goto], .button[data-goto]');
if (menuScroll.length > 0) {
    menuScroll.forEach(menuLink => {
        menuLink.addEventListener("click", menuClick);
    });

    function menuClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('nav').offsetHeight;
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                startedButton.classList.remove('_active');
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
        e.preventDefault();
    }
}


//spoiler faq
const spoilerHead = document.querySelectorAll('.faq__spoilerheader');
const spoilerBody = document.querySelectorAll('.faq__description');
const spoilerArow = document.querySelectorAll('.faq__spoilerimg');
for (let i = 0; i < spoilerHead.length; i++) {
    spoilerHead[i].addEventListener('click', function(e) {
        spoilerBody[i].classList.toggle("_active");
        spoilerArow[i].classList.toggle("_active");
    });
}



//spoiler  footer
const footerHead = document.querySelectorAll('.footer__sliderhead');
const footerBody = document.querySelectorAll('.list');
const footerArow = document.querySelectorAll('.footer__arrow');
for (let i = 0; i < footerHead.length; i++) {
    footerHead[i].addEventListener('click', function(e) {
        footerBody[i].classList.toggle("_active");
        footerArow[i].classList.toggle("_active");
    });
}
//scroll animation
let animatedItems = document.querySelectorAll('._anim-item');
if (animatedItems.length > 0) {
    window.addEventListener('scroll', animateOnScroll);

    function animateOnScroll() {
        for (let i = 0; i < animatedItems.length; i++) {
            const animatedItem = animatedItems[i];
            const animatedItemHeight = animatedItem.offsetHeight;
            const animatedItemOffset = offset(animatedItem).top;
            const animationStart = 5;
            let animItemPoint = window.innerHeight - animatedItemHeight / animationStart;
            if (animatedItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }
            if ((scrollY > animatedItemOffset - animItemPoint) && scrollY < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add("_active");
            }
        }
    }

    function offset(el) {
        const react = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {
            top: react.top + scrollTop,
            left: react.left + scrollLeft
        }
    }

}
animateOnScroll();

const popupContacts = document.querySelectorAll('.pop-up');
const popupOpener = document.querySelectorAll('.contacts');
const popupClose = document.querySelectorAll('.close');
const popupOpenerForm = document.querySelectorAll('.open-form');
//pop-up contacts
for (let i = 0; i < popupOpener.length; i++) {
    popupOpener[i].addEventListener('click', function(e) {
        e.preventDefault();
        popupContacts[1].classList.add('_active');
        document.body.classList.add('_lock');
        if (iconMenu.classList.contains('_active')) {
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            startedButton.classList.remove('_active');
        }
    });
}
//pop-up form
for (let i = 0; i < popupOpenerForm.length; i++) {
    popupOpenerForm[i].addEventListener('click', function(e) {
        e.preventDefault();
        popupContacts[0].classList.add('_active');
        document.body.classList.add('_lock');
        if (iconMenu.classList.contains('_active')) {
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
            startedButton.classList.remove('_active');
        }
    });

}
//close a pop-up
for (let i = 0; i < popupClose.length; i++) {
    popupClose[i].addEventListener('click', function() {
        for (let i = 0; i < popupContacts.length; i++)
            popupContacts[i].classList.remove('_active');
        document.body.classList.remove('_lock');
    });
}
for (let i = 0; i < popupContacts.length; i++)
    popupContacts[i].addEventListener('click', function(e) {
        if (!e.target.closest('.pop-up__wrapper')) {
            popupContacts[i].classList.remove('_active');
            document.body.classList.remove('_lock');
        }
    });