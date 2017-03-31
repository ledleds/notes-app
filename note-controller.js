"use strict";
(function(exports) {
  function NoteController(noteList) { //Should I be passing in NoteListView instead to adhere to SRP?
    this.noteList = noteList;
  }

  NoteController.prototype.createNoteListView = function(noteListView = new NoteListView(this.noteList)) {
    this.noteListView = noteListView
  };
  
  NoteController.prototype.addNoteToList = function(text) {
    this.noteList.addNote(text);
  };

  NoteController.prototype.insertHTML = function(element = document.getElementById("app")) {
    var element = element;
    element.innerHTML = this.noteListView.generateHTML();
  };

  exports.NoteController = NoteController;
})(this);
