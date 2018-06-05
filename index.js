const textChangeButton = document.querySelector('button');
const heading = document.querySelector('#dictHeading');
const form = document.querySelector('form');

const submission = document.querySelector('#submission');

function changeText (event) {
    event.preventDefault();
    heading.textContent = submission.value;
}

form.addEventListener('submit', changeText);