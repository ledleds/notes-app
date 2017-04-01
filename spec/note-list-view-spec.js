function NoteListDouble() {};

NoteListDouble.prototype = {
  viewNotes: function() {
  return [{text: "Patate is the French word for potato!", id: 0}, {text: "Potato is the English word for patate" , id: 1}]
  }
};

function EmptyNoteListDouble() {};

EmptyNoteListDouble.prototype = {
  viewNotes: function() {
    return []
  }
};

test({
  doesNotPrintListIfNoNotes: function() {

    var emptyNoteListDouble = new EmptyNoteListDouble();
    var noteListView = new NoteListView(emptyNoteListDouble);
    assert.isEqual(noteListView.generateHTML(), "<ul></ul>")
  },

  printShortenedNotesInList: function() {
    var noteListDouble = new NoteListDouble();
    var noteListView = new NoteListView(noteListDouble);
    assert.isTrue(noteListView.generateHTML() === "<ul><li><div><a href=\"#notes/0\">Patate is the French</a></div></li><li><div><a href=\"#notes/1\">Potato is the Englis</a></div></li></ul>")
  },

  noteListViewShorternsStringToTwentyCharacters: function() {
    var noteListDouble = new NoteListDouble();
    var noteListView = new NoteListView(noteListDouble);
    assert.contains(noteListView.shortenToTwentyCharacters(), "Patate is the French")
    assert.contains(noteListView.shortenToTwentyCharacters(), "Potato is the Englis")
  }
});
