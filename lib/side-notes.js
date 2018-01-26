'use babel';

import fs from 'fs';
import Storage from './classes/Storage'
import SideNotesView from './side-notes-view';
import { CompositeDisposable } from 'atom';

export default {

  sideNotesView: null,
  modalPanel: null,
  subscriptions: null,
  storageFile: __dirname + '/data/notes.json',
  dir: __dirname,
  storage: null,

  activate (state) {
    // Clear console
    console.clear()

    // Check for data file and save it into 'this.storage'
    this.storage = Storage.check(this.storageFile)

    // Init component
    this.sideNotesView = new SideNotesView(state.sideNotesViewState, this.storage);
    this.modalPanel = atom.workspace.addRightPanel({
      item: this.sideNotesView.getElement(),
      visible: true
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'side-notes:toggle': () => this.toggle()
    }));
  },

  deactivate () {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.sideNotesView.destroy();
  },

  serialize () {
    return {
      sideNotesViewState: this.sideNotesView.serialize()
    };
  },

  toggle () {
    console.log('SideNotes was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

};
