(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList
  }

  NoteController.prototype.createNoteListView = function() {
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.addNoteToList = function () {
    this.noteList.addNote("Favourite drink: gin")
  };

  NoteController.prototype.getHTML = function() {
    var element = document.getElementById("app")
    element.innerHTML = this.noteListView.generateHTML()
  };
  exports.NoteController = NoteController
})(this);

var noteList = new NoteList();
var noteController = new NoteController(noteList);
noteController.addNoteToList();
noteController.createNoteListView();
noteController.getHTML();
