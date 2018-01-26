'use babel'

import fs from 'fs'

export default class Storage {
  static check (path) {
    if (!fs.existsSync(path)) this.createStorageFile(path)
    return JSON.parse(fs.readFileSync(path).toString())
  }

  static createStorageFile (path) {
    fs.writeFileSync(path, '{\n\t"notes": []\n}\n')
  }

}
