test({
  savesNoteToNotes: function() {

  var note = new Note("Hello");

  assert.contains( "Hello", note.viewNote());
  }
})
