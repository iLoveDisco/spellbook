
function allowDrop(ev) {
    ev.preventDefault();
}
var entryList = document.querySelector('#spells');
const app = {
    init: function() {
        this.entriesDatabase = [];
        this.template = document.querySelector('.location.template')
        
        const form = document.querySelector('form');
        form.addEventListener('submit', ev => {
            ev.preventDefault();
            this.handleSubmit(ev);
        })
    },
    handleSubmit: function(ev) {
        const form = ev.target; // the form
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
        this.entriesDatabase.push(entry); // pushes onto database

        const el = this.renderItem (entry);


        const delButton = document.createElement('button');
        delButton.textContent = "Remove";
        listItem.appendChild(delButton);
        delButton.type = "remove";

        delButton.addEventListener('click', this.removeSpell.bind(this, entry));

        listItem.appendChild(el);
        entryList.appendChild(listItem);
    },

    removeEntry: function(entry, ev) {
        entryList.removeChild(listItem);
        
        let i = entriesDatabase.indexOf(entry);
        this.entriesDatabase.splice(i,1);
    },

    renderItem: function(entry) {
        const item = this.template.cloneNode(true);
        item.classList.remove('template') // helps hide the initial template

        // ['name', 'desc']
        const properties = Object.keys(entry);
        properites.forEach(property => {
            const el = item.querySelector(`.${property}`);
            el.textContent = entry[property];
            el.setAttribute('title', spell[property]);
        })

        // delete button
        item
            .querySelector('button.delete')
            .addEventListener('click', this.removeEntry.bind(this,spell));

        // const el = document.createElement('span');
        // const text = document.createElement('span');
        // text.textContent = `   ${entry['nameOfPlace']} - ${entry['desc']}`;
        // el.appendChild(text);
        // return el;
    }
}

app.init();