const radioElems = document.querySelectorAll('.quiz__answer');
const mainEl = document.querySelector('.hero');
const quizForm = document.querySelector('.quiz__form');
const labelElems = document.querySelectorAll('.quiz__label');
const buttonNext = document.querySelector('.quiz__button.isActive');
const birthForm = document.querySelector('.quiz__answer--date');
const resultBtn = document.querySelector('birthButton');
const birthButton = document.createElement('button');
birthButton.classList.add('quiz__button', 'birthButton');
birthButton.setAttribute('type', 'button');
birthButton.innerText = 'ДАЛЕЕ';
birthButton.style.display = 'block';
const finishBox = document.querySelector('.finish');


let count = 0;

console.log(birthButton);

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

birthForm.addEventListener('input', getBirthInfo);

function getBirthInfo() {
    const dayInput = document.querySelector('.quiz__days');
    const monthInput = document.querySelector('.quiz__monthes');
    const yearInput = document.querySelector('.quiz__years');
    const warningEl = document.querySelector('.quiz__warning');

    const sings = {
        aries: document.querySelector('.quiz__zodiac--aries'),
        aqua: document.querySelector('.quiz__zodiac--aqua'),
        cancer: document.querySelector('.quiz__zodiac--cancer'),
        capricorn: document.querySelector('.quiz__zodiac--capricorn'),
        gemini: document.querySelector('.quiz__zodiac--gemini'),
        lion: document.querySelector('.quiz__zodiac--lion'),
        libra: document.querySelector('.quiz__zodiac--libra'),
        sagitt: document.querySelector('.quiz__zodiac--sagitt'),
        scorp: document.querySelector('.quiz__zodiac--scorp'),
        taurus: document.querySelector('.quiz__zodiac--taurus'),
        virgo: document.querySelector('.quiz__zodiac--virgo'),
        prisces: document.querySelector('.quiz__zodiac--prisces'),
    };

    function addZero(num) {
        if (num <= 9) {
            num = '0' + num;
        }
        return num;
    }

    const day = Number(dayInput.value);
    const month = Number(monthInput.value);

    const birthDate = addZero(month) + '-' + addZero(day);

    if (birthDate >= '01-01' && birthDate <= '01-19') {
        sings.capricorn.style.display = 'block';
    } else {
        sings.capricorn.style.display = 'none';
    }

    if (birthDate >= '01-20' && birthDate <= '02-18') {
        sings.aqua.style.display = 'block';
    } else {
        sings.aqua.style.display = 'none';
    }

    if (birthDate >= '02-19' && birthDate <= '03-20') {
        sings.prisces.style.display = 'block';
    } else {
        sings.prisces.style.display = 'none';
    }

    if (birthDate >= '03-21' && birthDate <= '04-19') {
        sings.aries.style.display = 'block';
    } else {
        sings.aries.style.display = 'none';
    }

    if (birthDate >= '04-20' && birthDate <= '05-20') {
        sings.taurus.style.display = 'block';
    } else {
        sings.taurus.style.display = 'none';
    }

    if (birthDate >= '05-21' && birthDate <= '06-21') {
        sings.gemini.style.display = 'block';
    } else {
        sings.gemini.style.display = 'none';
    }

    if (birthDate >= '06-22' && birthDate <= '07-22') {
        sings.cancer.style.display = 'block';
    } else {
        sings.cancer.style.display = 'none';
    }

    if (birthDate >= '07-23' && birthDate <= '08-22') {
        sings.lion.style.display = 'block';
    } else {
        sings.lion.style.display = 'none';
    }

    if (birthDate >= '08-23' && birthDate <= '09-22') {
        sings.virgo.style.display = 'block';
    } else {
        sings.virgo.style.display = 'none';
    }

    if (birthDate >= '09-23' && birthDate <= '10-23') {
        sings.libra.style.display = 'block';
    } else {
        sings.libra.style.display = 'none';
    }

    if (birthDate >= '10-24' && birthDate <= '11-21') {
        sings.scorp.style.display = 'block';
    } else {
        sings.scorp.style.display = 'none';
    }

    if (birthDate >= '11-22' && birthDate <= '12-21') {
        sings.sagitt.style.display = 'block';
    } else {
        sings.sagitt.style.display = 'none';
    }

    if (birthDate >= '12-22' && birthDate <= '12-31') {
        sings.capricorn.style.display = 'block';
    } else {
        sings.capricorn.style.display = 'none';
    }

    if (dayInput.value !== 'null' || monthInput.value !== 'null' || yearInput.value !== 'null') {
        warningEl.style.display = 'block';
    }
    
    const selectBox = document.querySelector('.quiz__answer--date');

    if (dayInput.value !== 'null' && monthInput.value !== 'null' && yearInput.value !== 'null') {
        dayInput.style.color = '#315DFA';
        monthInput.style.color = '#315DFA';
        yearInput.style.color = '#315DFA';
        dayInput.style.fontWeight = '700';
        monthInput.style.fontWeight = '700';
        yearInput.style.fontWeight = '700';
        warningEl.style.display = 'none';
        selectBox.append(birthButton);
    }
}

birthButton.addEventListener('click', showResult);

function showResult(e) {
    e.target.parentNode.parentNode.classList.remove('isActive');
    finishBox.style.display = 'block';
    progress();
    setTimeout(getResult, 12000);
}

function progress() {
    const progressLine = document.querySelector('.finish__progress--green');
    const progressText = document.querySelectorAll('.finish__item');
    
    let width = 1;
    let id = setInterval(progressStatus, 100);
    function progressStatus() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width += 1;
            progressLine.style.width = width + '%';
            progressLine.innerHTML = width * 1 + '%';
        }
    }
    
    for (let i = 0; i <= progressText.length; i += 1) {
    setTimeout(() => progressText[i].style.display='inline-block', 400 * (i + 1));
    }

    setTimeout(() => document.querySelector('.finish__text').style.display = 'inline-block', 10000);
}

function getResult() {
    const lastPage = document.querySelectorAll('.finish__result');
    lastPage.forEach(el => {
        if (el.classList.contains('isActive')) {
            el.classList.remove('isActive');
        } else {
            el.classList.add('isActive');
        }
    });
}





