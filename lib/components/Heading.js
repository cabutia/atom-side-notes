'use babel'

import HTML from './HTML'

export default class HeadingComponent extends HTML {
  constructor () {
    super()

    this.element = document.createElement('h1')
    this.build('block', 'Side notes', {
      "width": "calc(100% - 30px)",
      "margin-left": "15px",
      "padding-bottom": "10px",
      "border-bottom": "1px solid #444",
      "margin-bottom": "20px"
    })
  }

}
