'use babel'

import HTML from './HTML'
import Storage from '../classes/Storage'

export default class NotesComponent extends HTML {

  constructor () {
    super()

    this.element = document.createElement('div')
  }


  /**
   *  Creates note elements
   *
   *  @param  Object
   *  @return HTMLElement
   */
  make (note) {
    let ElementID = this.randomID(64)

    // Create elements
    let NoteElement = document.createElement('div')
    let NoteHeading = document.createElement('div')
    let NoteContent = document.createElement('div')

    // Add classes to elements
    NoteElement.classList.add('note')
    NoteHeading.classList.add('panel-heading')
    NoteContent.classList.add('panel-body','padded')

    // Assign note ID
    NoteElement.setAttribute('id', ElementID)
    NoteHeading.setAttribute('data-note', ElementID)
    NoteContent.setAttribute('data-note', ElementID)

    // Add content to elements
    NoteHeading.innerHTML = note.title
    NoteContent.innerHTML = note.content

    // Append elements to root element
    NoteElement.appendChild(NoteHeading)
    NoteElement.appendChild(NoteContent)

    // Create tool elements
    let ToolContainer = document.createElement('div')
    let ToolEditNote  = document.createElement('span')
    let ToolRemNote   = document.createElement('span')

    // Add classes to tool elements
    ToolContainer.classList.add('note-tool-container')
    ToolEditNote.classList.add('icon','icon-pencil','tool')
    ToolRemNote.classList.add('icon','icon-remove-close','tool')

    // Assign note ID
    ToolEditNote.setAttribute('data-note', ElementID)
    ToolRemNote.setAttribute('data-note', ElementID)

    // Test if EventListeners works
    ToolEditNote.addEventListener('click', e => this.editNote(e, true))
    ToolEditNote.addEventListener('focusout', e => this.editNote(e, false))

    // Append tools to tool container
    ToolContainer.appendChild(ToolEditNote)
    ToolContainer.appendChild(ToolRemNote)
    NoteElement.appendChild(ToolContainer)


    return NoteElement
  }

  editNote (e, editable) {
    let NoteID = e.srcElement.getAttribute('data-note')
    let Note = document.querySelector('#' + NoteID)
    let NoteHeading = Note.querySelector('.panel-heading')
    let NoteContent = Note.querySelector('.panel-body')
    console.log(NoteContent,NoteHeading)
    if (editable) {

    }
  }

  randomID (maxLength) {
    let baseString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZ0123456789'
    let str = 'NOTE-' + new Date().getTime() + '-'
    for (var i = 0; i < maxLength; i++) {
      str += baseString[Math.floor(Math.random() * baseString.length)]
    }
    return str
  }

}
