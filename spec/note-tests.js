function savesNoteToNotes() {

  var note = new Note("Hello");

  assert.contains( "Hello", note.viewNote());
};

savesNoteToNotes();
