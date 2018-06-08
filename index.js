
function allowDrop(ev) {
    ev.preventDefault();
}

function myMap() {
  var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.12),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.HYBRID
  }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


class App {
    constructor() {
      this.entries = []
      this.template = document.querySelector('.location.template')
      this.list = document.querySelector('#locations')
  
      this.load()
  
      const form = document.querySelector('form')
      form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        if(form.nameOfPlace.value != "" && form.descriptionOfPlace.value != "") {
          this.handleSubmit(ev); // doesn't accept empty entries
        }
      })
    }

    handleSubmit(ev) {
        const form = document.querySelector('form');
        const entry = {
          name: form.nameOfPlace.value,
          desc: form.descriptionOfPlace.value,
          favorite: false,
        }
    
        this.addEntry(entry)
        this.save()
    
        form.reset()
        form.nameOfPlace.focus()
      }

    addEntry(entry) {
        this.entries.push(entry);
        const item = this.renderItem(entry);
        item.hidden = false;
        this.list.appendChild(item);
    }
    
    renderItem(entry) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template');
    
        // ['name', 'desc', 'favorite']
        const properties = Object.keys(entry);
    
        properties.forEach(property => {
          const el = item.querySelector(`.${property}`) // get the class name of each property in "properties"
          if (el) { // if el != null
            el.textContent = entry[property];
            el.setAttribute('title', entry[property]);
          }
        })
    
        // Mark it as a favorite, if applicable
        if (entry.favorite) {
          item.classList.add('fav')
        }
    
        // delete button
        item
            .querySelector('button.delete')
            .addEventListener('click', this.removeEntry.bind(this, entry));
    
        // fav button
        item
          .querySelector('button.fav')
          .addEventListener('click', this.toggleFavorite.bind(this, entry));
    
        // move up
        item
          .querySelector('button.up')
          .addEventListener('click', this.moveUp.bind(this, entry));
    
        // move down
        item
          .querySelector('button.down')
          .addEventListener('click', this.moveDown.bind(this, entry));
    
        return item;
    }

    load() {
      // Read JSON from localStorage
      const entryJSON = localStorage.getItem('entries')
  
      // Convert JSON back into an array
      const placeArray = JSON.parse(entryJSON)
  
      // Load the spells back into the app
      if (placeArray) {
        placeArray.forEach(this.addEntry.bind(this))
      }
    }
  
    save() {
      localStorage.setItem('entries', JSON.stringify(this.entries));
    }
  
    moveDown(entry, ev) {
      // Find the <li>
      const button = ev.target
      const item = button.closest('.location') // the closest with a class of location
  
      // Find its index
      const i = this.entries.indexOf(entry)
  
      // Move only if it's not the last.
      if (i < this.entries.length - 1) {
        // Move it on the page
        this.list.insertBefore(item.nextSibling, item)
  
        // Move it in the array. Do the variable swaps.
        const nextEntry = this.entries[i + 1];
        this.entries[i + 1] = entry;
        this.entries[i] = nextEntry;
  
        this.save()
      }
    }
  
    moveUp(entry, ev) {
      // Find the <li>
      const button = ev.target
      const item = button.closest('.location') // the closest with a class of location
  
      // Find its index
      const i = this.entries.indexOf(entry)
  
      // Move only if it's not the first.
      if (i > 0) {
        this.list.insertBefore(item, item.previousSibling)
  
        // Move it in the array
        const previousEntry = this.entries[i - 1]
        this.entries[i - 1] = entry
        this.entries[i] = previousEntry
  
        this.save()
      }
    }
  
    toggleFavorite(entry, ev) {
      const button = ev.target
      const item = button.closest('.location')
      entry.favorite = item.classList.toggle('fav')
      if (entry.favorite) {
        button.style.color = 'gold';
      } else {
        button.style.color = 'black';
      }
      this.save()
    }
  
    removeEntry(entry, ev) {
      // Remove from the DOM
      const button = ev.target
      const item = button.closest('.location')
      item.parentNode.removeChild(item)
  
      // Remove from the array
      const i = this.entries.indexOf(entry)
      this.entries.splice(i, 1)
  
      this.save()
    }
  }
  
  const app = new App()

  