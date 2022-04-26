const radioElems = document.querySelectorAll('.quiz__answer');
const mainEl = document.querySelector('.hero');
const quizForm = document.querySelector('.quiz__form');
const labelElems = document.querySelectorAll('.quiz__label');
const buttonNext = document.querySelector('.quiz__button.isActive');
const birthForm = document.querySelector('.quiz__answer--date');

let count = 0;

radioElems.forEach(el => el.addEventListener('input', color));

function color(evt) {
    const checkedRadio = document.querySelector('.quiz__label--active');
    const buttonEl = document.querySelector('.quiz__button');
    if (checkedRadio) {
        checkedRadio.classList.remove('quiz__label--active');
    }

    evt.target.parentNode.classList.add('quiz__label--active');

    if (evt.target.parentNode.classList.contains('quiz__label--active')) {
        buttonEl.style.display = 'block';
    }
}

buttonNext.addEventListener('click', function () {
    count += 1;
    nextQuiz();
    if (!quizForm.firstElementChild.classList.contains('isActive')) {
        mainEl.style.display = "none";
    }

    const activeLabel = document.querySelector('.quiz__label--active');

    if (activeLabel) {
        activeLabel.classList.remove('quiz__label--active');
    }    

    const buttonEl = document.querySelector('.quiz__button');
    buttonEl.style.display = 'none';
});

function nextQuiz() {
    const quizBlocks = document.querySelectorAll('.quiz__question');
    quizBlocks.forEach((el, i) => {
        el.classList.remove('isActive');
        if (i === count) {
            el.classList.add('isActive');
        }
    });
}

birthForm.addEventListener('input', changeColor);

function changeColor() {
    const dayInput = document.querySelector('.quiz__days');
    const monthInput = document.querySelector('.quiz__monthes');
    const yearInput = document.querySelector('.quiz__years');

    console.log(dayInput.value, monthInput.value, yearInput.value);

    if (dayInput.value !== 'null' && monthInput.value !== 'null' && yearInput.value !== 'null') {
        dayInput.style.color = 'inherit';
        monthInput.style.color = 'inherit';
        yearInput.style.color = 'inherit';
        dayInput.style.fontWeight = '700';
        monthInput.style.fontWeight = '700';
        yearInput.style.fontWeight = '700';
    }
}

