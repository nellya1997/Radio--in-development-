// форма поиска

let form = document.querySelector('.form--search');
let search = document.querySelector('.js-search');

search.addEventListener('click',
function() {
    form.classList.toggle('open');
}
)

// вырывание 2 списка навигации в первый в хедере

let destination = document.querySelector('.navigation--wrapper-mobile');
let bottom = document.querySelector('.navigation--header-bottom');
let nazad = document.querySelector('.header__wrapper-bottom');

if (document.documentElement.clientWidth < 567) {
    destination.append(bottom);
} else {
    nazad.append(bottom);
}

// destination.append(bottom);

// БУРГЕР

let burger = document.querySelector('.js-burger');
let navigation = document.querySelector('.js-navigation');

burger.addEventListener('click',
function() {
    navigation.classList.toggle('active');
}
)

// пауза в секции подкасты

let play = document.querySelectorAll('.js-play')
 play.forEach(item =>{
        item.addEventListener('click', (e) =>{

            play.forEach(el=>{ el.classList.remove('play'); });
            item.classList.add('play');

            let isMainPresent = item.classList.contains("play");

            if (isMainPresent){
                console.log("Found the class name");
                // item.classList.add('play');

                item.addEventListener('click', (el) =>{
                    item.classList.remove('play');
                })

            }else{
                console.log("Not found the class name");
                item.classList.add('play');
            }
    })
})


// добавить класс активности радиокнопкам

let label = document.querySelectorAll('.js-label');

label.forEach(item =>{
    item.addEventListener('click',(e) =>{

        label.forEach(el=>{ el.classList.remove('active'); })
        item.classList.add('active');
    })
})



// label.addEventListener('click',
// function() {
//     label.classList.toggle('active');
// })



// свайпер для кнопок

let swiper = Swiper;
let initialization = false;

function swiperslide() {
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

    if (mobile.matches) {
        if (!initialization) {
            initialization = true,
            swiper = new Swiper('.js-swiper'), {
                slidesPerView: 'auto',
                loop: true,

            }
        }
        else if (initialization){
            swiper.destroy;
            initialization = false;
        }
    }
}

swiperslide();




let swiperAboutus = new Swiper('.js-about-us-swiper', {
    breakpoints: {
        320: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
    }
  });