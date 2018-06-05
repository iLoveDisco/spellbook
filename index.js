const addSpellButton = document.querySelector('button');
const form = document.querySelector('form');
const spellList = document.querySelector('#spells');

const elementSelection = document.querySelector('select');

function addSpell (event) {
    event.preventDefault();
    if (form.spellName.value != ""){// no empty entries allowed
        applyAppendage(form.spellName.value, elementSelection.value);
    }
    form.spellName.value = "";
}

function applyAppendage (spell, element) {
    const listItem = document.createElement('li');
    listItem.textContent = spell + ' - ' + element;
    switch (element) {
        case 'Fire':
            listItem.style.color = 'Red';
            break;
        case 'Water':
            listItem.style.color = 'Blue';
            break;
        case 'Earth':
            listItem.style.color = 'Brown';
            break;
        case 'Air':
            listItem.style.color = 'White';
            break;
    }
    spellList.appendChild(listItem);
}

form.addEventListener('submit', addSpell);