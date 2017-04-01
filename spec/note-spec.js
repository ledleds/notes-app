test({
  savesNoteToNotes: function() {

  var note = new Note("Hello", 0);

  assert.contains( "Hello", note.viewNote());
  assert.isEqual(note.id, 0);
  }
})
