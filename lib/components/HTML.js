'use babel'

export default class HTML {

  addClasses (classes) {
    this.element.classList.add(classes)
  }

  getElement () {
    return this.element
  }

  addInlineStyles (styles) {
    let string = ''

    for (var style in styles) {
      if (styles.hasOwnProperty(style)) {
        let property = style
        let value    = styles[style]
        string += `${property}: ${value};`
      }
    }
    this.element.setAttribute('style', string)
  }

  build (classes, html, styles) {
    for (className of classes) {
      this.element.classList.add(className)
    }
    this.element.innerHTML = html
    this.addInlineStyles(styles)
  }

}
