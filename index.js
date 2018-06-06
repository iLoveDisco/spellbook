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
    
    // span element
    const spellElement = document.createElement('span');
    spellElement.textContent = spell + ' - ';

    // span element
    const elementElement = document.createElement('span');
    elementElement.textContent = element;

    listItem.appendChild(spellElement);
    listItem.appendChild(elementElement); // listItem should look like spell - element

    changeColor(listItem, element);
    spellList.appendChild(listItem);
}

function changeColor (listItem, element) {
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
}

form.addEventListener('submit', addSpell);