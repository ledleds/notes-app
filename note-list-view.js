(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.shortenToTwentyCharacters = function () {
    return this.noteList.viewNotes().map(function(note) {
      return note.slice(0, 20);
    })
  };

  NoteListView.prototype.generateHTML = function () {
    return "<ul>" + this.shortenToTwentyCharacters().map(function(note) {
      return "<li><div>" + note + "</div></li>"
    }).join("") + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
