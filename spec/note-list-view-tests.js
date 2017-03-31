function NoteListDouble() {};

NoteListDouble.prototype = {
  viewNotes: function() {
    return ["Patate is the French word for potato!", "Potato is the English word for patate"]
  }
};

test({
  printNotesInList: function() {
    var noteList = new NoteList();
    noteList.addNote("Hello");
    noteList.addNote("Goodbye");

    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.generateHTML() === "<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>")
  },

  doesNotPrintListIfNoNotes: function() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isEqual(noteListView.generateHTML(), "<ul></ul>")
  },

  noteListViewShorternsStringToTwentyCharacters: function() {
    var noteListDouble = new NoteListDouble();
    var noteListView = new NoteListView(noteListDouble);
    assert.contains(noteListView.shortenToTwentyCharacters(), "Patate is the French")
    assert.contains(noteListView.shortenToTwentyCharacters(), "Potato is the Englis")
  }
});
