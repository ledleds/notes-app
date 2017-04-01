(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.shortenToTwentyCharacters = function () {
    return this.noteList.viewNotes().map(function(note) {
      return note.text.slice(0, 20);
    })
  };

  NoteListView.prototype.generateHTML = function () {
    // str = "<ul>"
    // allTexts = this.shortenToTwentyCharacters()
    // for(i=0;i<allTexts.length;i++){
    //   str += "<li><div><a href=\"#notes/" + i + "\">" + allTexts[i]  + "</a></div></li>"
    // }
    // str +="</ul>"
    // return str;

    return "<ul>" + this.shortenToTwentyCharacters().map(function(note, id) {
console.log(note)
      return "<li><div><a href=\"#notes/" + id + "\">" + note + "</a></div></li>"
    }).join("") + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
