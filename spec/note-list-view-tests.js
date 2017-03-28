function printNotesInList(){
  var noteList = new NoteList();
  noteList.addNote("Hello");
  noteList.addNote("Goodbye");

  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHTML() === "<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>")

}

printNotesInList();
