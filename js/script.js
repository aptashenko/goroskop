const radioElems = document.querySelectorAll('.quiz__answer');
const mainEl = document.querySelector('.hero');
const quizForm = document.querySelector('.quiz__form');
const labelElems = document.querySelectorAll('.quiz__label');
const buttonNext = document.querySelector('.quiz__button.isActive');
const birthForm = document.querySelector('.quiz__answer--date');
const resultBtn = document.querySelector('birthButton');
const finishBox = document.querySelector('.finish');
const birthButton = document.createElement('button');

const tableEl = document.querySelector('.table__head');
birthButton.classList.add('quiz__button', 'birthButton');
birthButton.setAttribute('type', 'button');
birthButton.innerText = 'ДАЛЕЕ';
birthButton.style.display = 'block';


let count = 0;

radioElems.forEach(el => el.addEventListener('input', color));

buttonNext.addEventListener('click', function () {
    const activeLabel = document.querySelector('.quiz__label--active');
    const firstQuiz = quizForm.firstElementChild;
    const buttonEl = document.querySelector('.quiz__button');

    count += 1;
    nextQuiz();
    if (!firstQuiz.classList.contains('isActive')) {
        mainEl.style.display = "none";
    }

    if (activeLabel) {
        activeLabel.classList.remove('quiz__label--active');
    }

    buttonEl.style.display = 'none';
});

birthForm.addEventListener('input', getZodiacSign);

birthButton.addEventListener('click', dataProcessing);

quizForm.addEventListener('submit', setData);

function setData(ev) {
    ev.preventDefault();

    fetch('https://swapi.dev/api/people/1/').then(response => response.json()).then(person => {
        tableEl.innerHTML = `<tr><th>Name</th><td>${person.name}</td></tr>
        <tr><th>Height</th><td>${person.height}</td></tr>
        <tr><th>Mass</th><td>${person.mass}</td></tr>
        <tr><th>Hair color</th><td>${person.hair_color}</td></tr>
        <tr><th>Skin color</th><td>${person.skin_color}</td></tr>
        <tr><th>Eye color</th><td>${person.eye_color}</td></tr>
        <tr><th>Birth year</th><td>${person.birth_year}</td></tr>
        <tr><th>Gender</th><td>${person.gender}</td></tr>
        <tr><th>Created</th><td>${person.created}</td></tr>
        <tr><th>Edited</th><td>${person.edited}</td></tr>
        <tr><th>Url</th><td>${person.url}</td></tr>`;
        getFilm(person.films);
        getVehicle(person.vehicles);
        getStarship(person.starships);
    });
}

function getFilm(arr) {
    for(const url of arr) {
    fetch(`${url}`)
        .then(response => {
            return response.json();
        })
        .then(el => {
            return tableEl.insertAdjacentHTML('beforeend', `<tr><th>Films</th><td>${el.title}</td></tr>`);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

function getVehicle(arr) {
    for(const url of arr) {
    fetch(`${url}`)
        .then(response => {
            return response.json();
        })
        .then(el => {
            return tableEl.insertAdjacentHTML('beforeend', `<tr><th>Vehicles</th><td>${el.name}</td></tr>`);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

function getStarship(arr) {
    for(const url of arr) {
    fetch(`${url}`)
        .then(response => {
            return response.json();
        })
        .then(el => {
            return tableEl.insertAdjacentHTML('beforeend', `<tr><th>Starships</th><td>${el.name}</td></tr>`);
        })
        .catch(error => {
            console.log(error);
        });
    }
}

function color(evt) {
    const checkedRadio = document.querySelector('.quiz__label--active');
    const buttonEl = document.querySelector('.quiz__button');
    const checkedLabel = evt.target.parentNode;
    

    if (checkedRadio) {
        checkedRadio.classList.remove('quiz__label--active');
    }

    checkedLabel.classList.add('quiz__label--active');

    if (checkedLabel.classList.contains('quiz__label--active')) {
        buttonEl.style.display = 'block';
    }
}

function nextQuiz() {
    const quizBlocks = document.querySelectorAll('.quiz__question');
    quizBlocks.forEach((el, i) => {
        el.classList.remove('isActive');
        if (i === count) {
            el.classList.add('isActive');
        }
    });
}

function getZodiacSign() {

    const elems = {
        dayInput: document.querySelector('.quiz__days'),
        monthInput: document.querySelector('.quiz__monthes'),
        yearInput: document.querySelector('.quiz__years'),
        warningEl: document.querySelector('.quiz__warning'),
        zodiacEl: document.querySelectorAll('.quiz__zodiac'),
        selectBox: document.querySelector('.quiz__answer--date'),
    };

    const day = Number(elems.dayInput.value);
    const month = Number(elems.monthInput.value);

    if (month == 1) {
        if (day <= 19) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Козерог')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Водолей')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 2) {
        if (day <= 18) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Водолей')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Рыбы')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 3) {
        if (day <= 20) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Рыбы')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Овен')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 4) {
        if (day <= 19) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Овен')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Телец')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 5) {
        if (day <= 20) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Телец')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Близнецы')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 6) {
        if (day <= 21) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Близнецы')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Рак')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 7) {
        if (day <= 22) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Рак')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Лев')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 8) {
        if (day <= 22) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Лев')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Дева')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 9) {
        if (day <= 22) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Дева')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Весы')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 10) {
        if (day <= 23) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Весы')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Скорпион')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 11) {
        if (day <= 21) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Скорпион')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Стрелец')) {
                    el.classList.add('isActive');
                }
            });
        }
    } else if (month == 12) {
        if (day <= 21) {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Стрелец')) {
                    el.classList.add('isActive');
                }
            });
        } else {
            elems.zodiacEl.forEach(el => {
                if (el.classList.contains('isActive')) {
                    el.classList.remove('isActive');
                } if (el.innerHTML.includes('Козерог')) {
                    el.classList.add('isActive');
                }
            });
        }
    }

    if (elems.dayInput.value ==='null' || elems.monthInput.value ==='null') {
        elems.zodiacEl.forEach(el => {
            el.classList.remove('isActive');
        });
    }

    if (elems.dayInput.value !== 'null' || elems.monthInput.value !== 'null' || elems.yearInput.value !== 'null') {
        elems.warningEl.style.display = 'block';
    }
    
    if (elems.dayInput.value !== 'null' && elems.monthInput.value !== 'null' && elems.yearInput.value !== 'null') {
        elems.dayInput.style.color = '#315DFA';
        elems.monthInput.style.color = '#315DFA';
        elems.yearInput.style.color = '#315DFA';
        elems.dayInput.style.fontWeight = '700';
        elems.monthInput.style.fontWeight = '700';
        elems.yearInput.style.fontWeight = '700';
        elems.warningEl.style.display = 'none';
        elems.selectBox.append(birthButton);
    }
}

function dataProcessing(e) {
    const quiz = e.target.parentNode.parentNode;
    
    quiz.classList.remove('isActive');
    finishBox.style.display = 'block';

    progress();
    setTimeout(showResult, 12000);
}

function progress() {
    const progressLine = document.querySelector('.finish__progress--green');
    const progressText = document.querySelectorAll('.finish__item');
    const doneText = document.querySelectorAll('.finish__item--result');
    
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
    
    for (let i = 0; i <= progressText.length - 1; i += 1) {   
        setTimeout(() => progressText[i].classList.add('isActive'), 400 * (i + 1));
    }

    doneText.forEach(el => el.style.display = 'inline');

    setTimeout(() => document.querySelector('.finish__text').style.display = 'inline-block', 10000);
}

function showResult() {
    const lastPage = document.querySelectorAll('.finish__result');
    lastPage.forEach(el => {
        if (el.classList.contains('isActive')) {
            el.classList.remove('isActive');
        } else {
            el.classList.add('isActive');
        }
    });
}





