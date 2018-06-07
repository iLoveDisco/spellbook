
function allowDrop(ev) {
    ev.preventDefault();
}
var entriesDatabase = [];
var entryList = document.querySelector('#spells');
const app = {
    init: function() {
        const form = document.querySelector('form');
        form.addEventListener('submit', ev => {
            this.addEntry(ev)
        })
    },
    addEntry: function(ev) {
        ev.preventDefault();
        const form = document.querySelector('form');
        if (form.nameOfPlace.value != ""){ // no empty entries allowed
            this.appendToList(form.nameOfPlace, form.descriptionOfPlace);
        }
        form.nameOfPlace.value = "";
        form.descriptionOfPlace.value = "";
        form.nameOfPlace.focus();
    },
    appendToList: function(place, description) {
        const listItem = document.createElement('li');
    
        const entry = {
            nameOfPlace: place.value,
            desc: description.value
        }

        const el = this.renderElement (entry);
        entriesDatabase.push(el);

        const delButton = document.createElement('button');
        delButton.textContent = "Remove";
        listItem.appendChild(delButton);
        delButton.type = "remove";

        delButton.addEventListener('click', ev => {
            entryList.removeChild(listItem);

        })

        listItem.appendChild(el);
        entryList.appendChild(listItem);
    },
    renderElement: function(entry) {
        const el = document.createElement('span');
        const text = document.createElement('span');
        text.textContent = `   ${entry['nameOfPlace']} - ${entry['desc']}`;
        el.appendChild(text);
        return el;
    }
}

app.init();