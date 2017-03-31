(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.generateHTML = function () {
    return "<ul>" + this.noteList.viewNotes().map(function(note) {
      return "<li><div>" + note.text + "</div></li>"
    }).join("") + "</ul>";
  };

  NoteListView.prototype.shortenToTwentyCharacters = function () {
    return this.noteList.viewNotes().slice(0, 20)
  };

  exports.NoteListView = NoteListView;
})(this);
