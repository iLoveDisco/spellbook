const addSpellButton = document.querySelector('button');
const form = document.querySelector('form');

const submission = document.querySelector('#submission');

function changeText (event) {
    event.preventDefault();
    heading.textContent = submission.value;
    form.fname.value = "";
}

form.addEventListener('submit', changeText);