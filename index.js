
function allowDrop(ev) {
    ev.preventDefault();
}

const app = {
    init: function() {
        const form = document.querySelector('form');
        const entryList = document.querySelector('#spells');
        form.addEventListener('submit', ev => {
            this.addEntry(ev)
        })
    },
    addEntry: function(ev) {
        ev.preventDefault();
        if (this.form.nameOfPlace.value != ""){ // no empty entries allowed
            appendToList(form.nameOfPlace, form.descriptionOfPlace);
        }
        form.nameOfPlace.value = "";
        form.descriptionOfPlace = "";
    },
    appendToList: function(place, description) {
        const listItem = document.createElement('li');
    
        const entry = {
            nameOfPlace: place.value,
            desc: description.value
        }
        const el = renderElement (entry);

        listItem.appendChild(el);
        entryList.appendChild(listItem);
    },
    renderElement: function(entry) {
        const el = document.createElement('span');
        el.textContent = `${entry['nameOfPlace']} - ${entry['desc']}`;
        el.className = "entry";
        return el;
    }
}

app.init();