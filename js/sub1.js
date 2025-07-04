const years = document.querySelectorAll('.hisWrap .hisWrap-years li');
const blocks = document.querySelectorAll('.hisWrap .year-block');

years.forEach((item) => {
    item.addEventListener('click', () => {
        years.forEach((el) => el.classList.remove('active'));
        blocks.forEach((block) => {
            block.style.display = 'none';
        });
        item.classList.add('active');

        const year = item.dataset.year;
        const targetBlock = document.querySelector(`.hisWrap .year-block[data-year="${year}"]`);
        if (targetBlock) {
            targetBlock.style.display = 'block';
        }
    });
});
// hisWrap-years

const btn = document.querySelector('.hisWrap .all-hisWrap-btn button');
const img = document.querySelector('.hisWrap .all-hisWrap-btn button img');

btn.addEventListener('mouseenter', () => {
    img.setAttribute('src', 'img/btn_all_history_hover.png');
});

btn.addEventListener('mouseleave', () => {
    img.setAttribute('src', 'img/btn_all_history.png');
});
// all-hisWrap-btn
