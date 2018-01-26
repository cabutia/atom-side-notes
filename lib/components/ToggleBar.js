'use babel'

import HTML from './HTML'

export default class ToggleBarComponent extends HTML {

  constructor () {
    super()

    this.element = document.createElement('div')
    this.childElements = []
    this.addClasses('toggle-bar')
    this.element.appendChild(this.generateContent())
  }

  generateContent () {
    let rootElement   = document.createElement('div')
    rootElement.classList.add("icon-container")
    rootElement.addEventListener('click', (e) => {
      this.toggleSideBar()
    })
    return rootElement
  }

  toggleSideBar () {
    let root = document.querySelector('.side-notes')
    root.classList.toggle('collapsed')
  }
}
