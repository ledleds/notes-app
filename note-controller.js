"use strict";
(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  };

  NoteController.prototype.createNoteListView = function(noteListView = new NoteListView(this.noteList)) {
    this.noteListView = noteListView;
  };

  NoteController.prototype.addNoteToList = function(text) {
    this.noteList.addNote(text);
  };

  NoteController.prototype.insertHTML = function(element = document.getElementById("app")) {
    var element = element;
    element.innerHTML = this.noteListView.generateHTML();
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
// addEventListener method attaches an the hashchange event. When this occurs,
// it calls showNoteForCurrentPage function. The bind(this) is to set the this keyword
// to the given value 'this' as the window.addEvent... takes this out of scope.
    window.addEventListener("hashchange", this.showNoteForCurrentPage.bind(this))
  };

  NoteController.prototype.showNoteForCurrentPage = function(){
// calls showNote function with the output of (getNoteFromUrl(with the window.location))
// as an argument. window.location is used to get the current URL.
    this.showNote(this.getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
// returns the location - the URL. Splits it at the hash which creates an array of
// ["", "notes/0"] and returns the 1st element. ("notes/0")
    return location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function() {
// Sets the var noteId to: URL, after the hash: selects the number using a regular expression.
// So the noteID for the first note is the note object hash with text and id.
    var noteId = location.hash.replace(/^\D+/g, '');
    document
// gets note-content element from index.html.
      .getElementById("note-content")
// replaces the innerHTML with with the note text.
      .innerHTML = this.noteList._notes[noteId].text;
  };

  NoteController.prototype.listenForUserAddNoteSubmit = function() {
    var controller = this
    document.getElementById("text").addEventListener("submit", function(submitEvent) {
      submitEvent.preventDefault()
      controller.saveNoteFromForm();
    });

  };

  NoteController.prototype.saveNoteFromForm = function() {
    // var userNote = submitEvent.path[0].firstElementChild.value
    var userNote = text.elements['note'].value
    console.log(userNote)
  };

  exports.NoteController = NoteController;
})(this);
