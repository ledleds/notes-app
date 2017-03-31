function NoteListDouble() {};

NoteListDouble.prototype = {
  viewNotes: function() {
    return ["Patate is the French word for potato!", "Potato is the English word for patate"]
  }
};

test({
  doesNotPrintListIfNoNotes: function() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isEqual(noteListView.generateHTML(), "<ul></ul>")
  },

  printShortenedNotesInList: function() {
    var noteListDouble = new NoteListDouble();
    var noteListView = new NoteListView(noteListDouble);
    assert.isTrue(noteListView.generateHTML() === "<ul><li><div>Patate is the French</div></li><li><div>Potato is the Englis</div></li></ul>")
  },

  noteListViewShorternsStringToTwentyCharacters: function() {
    var noteListDouble = new NoteListDouble();
    var noteListView = new NoteListView(noteListDouble);
    assert.contains(noteListView.shortenToTwentyCharacters(), "Patate is the French")
    assert.contains(noteListView.shortenToTwentyCharacters(), "Potato is the Englis")
  }
});
