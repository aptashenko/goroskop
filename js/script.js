const radioElems = document.querySelectorAll('.quiz__answer');
radioElems.forEach(el => el.addEventListener('input', color));


function color(evt) {
    const checkedRadio = document.querySelector('.quiz__label--active');
    if (checkedRadio) {
        checkedRadio.classList.remove('quiz__label--active');
    }

    evt.target.parentNode.classList.add('quiz__label--active');
}

const labelElems = document.querySelectorAll('.quiz__label');
radioElems.forEach(el => el.addEventListener('input', addButton));

function addButton() {
    const checkedRadio = document.querySelector('.quiz__label--active');
    if (checkedRadio) {
        checkedRadio.parentNode.nextSibling.nextSibling.classList.remove('quiz__button--hidden');
    }
}
