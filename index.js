const textChangeButton = document.querySelector('button');
const heading = document.querySelector('#dictHeading');
const form = document.querySelector('form');

const submission = document.querySelector('#submission');

function changeText () {
    heading.textContent = submission.value;
}

function changeTextUsingEnter (event) {
    if (event.keyCode == 13) {
        heading.textContent = submission.value;
    }
}

textChangeButton.addEventListener('click', changeText);
form.addEventListener('keypress', changeTextUsingEnter);