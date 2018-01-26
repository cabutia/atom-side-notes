'use babel'

import NotesComponent from './components/Notes'
import HeadingComponent from './components/Heading'
import ToggleBarComponent from './components/ToggleBar'

export default class SideNotesView {

  constructor (serializedState, data) {
    // Default and declarations
    this.storage = data
    this.dir = __dirname
    this.storageFile = this.dir + '/data/notes.json'

    // Create root element
    this.element = document.createElement('div')
    this.element.classList.add('side-notes')

    // Package element declaration
    let Heading = new HeadingComponent()
    let ToggleBar = new ToggleBarComponent()

    // Element creation
    this.element.appendChild(ToggleBar.getElement())
    this.element.appendChild(Heading.getElement())

    // Event listeners
    ToggleBar.getElement().addEventListener('click', ToggleBar.toggleSideBar)

    // Append notes
    this.appendNotes()
  }

  // Returns an object that can be retrieved when package is activated
  serialize () {}

  // Tear down any state and detach
  destroy () {
    this.element.remove()
  }

  getElement () {
    return this.element
  }

  // Save actual data
  saveData () {

  }

  // Append notes to sidebar
  appendNotes () {
    let Notes = new NotesComponent()
    for (note of this.storage.notes) {
      this.element.appendChild(Notes.make(note))
    }
  }

}
