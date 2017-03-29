"use strict";
(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
  }

  NoteController.prototype.createNoteListView = function() {
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.addNoteToList = function(text) {
    this.noteList.addNote(text)
  };

  NoteController.prototype.getHTML = function() {
    var element = document.getElementById("app");
    element.innerHTML = this.noteListView.generateHTML();
  };

  exports.NoteController = NoteController;
})(this);
