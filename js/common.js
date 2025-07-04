const gnbItems = document.querySelectorAll('#header .nav .gnb > li');
const utilWrap = document.querySelector('.util-wrap');
const gnb = document.querySelector('#header .nav .gnb');
const logo = document.querySelector('#header h1 img');
const search = document.querySelector('#header .btn-icon .search img');
const menu = document.querySelector('#header .btn-icon .menu img');
const minus = document.querySelector('.util-wrap .list .minus img');
const plus = document.querySelector('.util-wrap .list .plus img');
const dots = document.querySelectorAll('.util-wrap .list li .dot');

gnbItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        utilWrap.classList.add('active');
        gnb.classList.add('active');
        dots.forEach((dot) => dot.classList.add('active'));
        logo.setAttribute('src', 'img/logo_hover.png');
        menu.setAttribute('src', 'img/site-menu_hover.png');
        search.setAttribute('src', 'img/search_hover.png');
        minus.setAttribute('src', 'img/btn_minus_hover.png');
        plus.setAttribute('src', 'img/btn_plus_hover.png');
    });
    item.addEventListener('mouseleave', () => {
        utilWrap.classList.remove('active');
        gnb.classList.remove('active');
        dots.forEach((dot) => dot.classList.remove('active'));
        logo.setAttribute('src', 'img/logo.png');
        menu.setAttribute('src', 'img/site-menu.png');
        search.setAttribute('src', 'img/search.png');
        minus.setAttribute('src', 'img/btn_minus.png');
        plus.setAttribute('src', 'img/btn_plus.png');
    });
});
// header gnb

const categoryItems = document.querySelectorAll('.category');

categoryItems.forEach((item) => {
    const h3 = item.querySelector('h3');

    h3.addEventListener('click', (e) => {
        e.preventDefault();
        categoryItems.forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
    });
});
// visual h3

const boxs = document.querySelectorAll('.main .con1 .box2 .slide-box');
const prev = document.querySelector('.main .con1 .btn .prev a');
const next = document.querySelector('.main .con1 .btn .next a');
const pause = document.querySelector('.main .con1 .btn .pause a');
const page = document.querySelector('.main .con1 .btn .slide-number');

let cnt = 0;
let total = boxs.length;

const showSlide = () => {
    boxs.forEach((box, i) => {
        box.style.display = 'none';
    });
    boxs[cnt].style.display = 'block';
    page.textContent = `${cnt + 1} / ${total}`;
};
prev.addEventListener('click', (e) => {
    e.preventDefault();
    cnt = cnt < 1 ? total - 1 : cnt - 1;
    showSlide();
});

next.addEventListener('click', (e) => {
    e.preventDefault();
    cnt = cnt >= total - 1 ? 0 : cnt + 1;
    showSlide();
});
let autoSlide = setInterval(() => {
    cnt = cnt >= total - 1 ? 0 : cnt + 1;
    showSlide();
}, 3000);

pause.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(autoSlide);
});
showSlide();
// con1

const acco = document.querySelectorAll('.main .con2 .inner ul li');

acco.forEach((item) => {
    item.addEventListener('click', function () {
        acco.forEach((el) => el.classList.remove('on'));
        this.classList.add('on');
    });
});
// con2

const topBtn = document.querySelector('.top');

topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    const ty = window.scrollY;
    if (ty > 200) {
        topBtn.classList.add('on');
    } else {
        topBtn.classList.remove('on');
    }
});
// top
