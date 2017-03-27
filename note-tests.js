function savesNoteToNotes() {
  var note = new Note("Hello");
  assert.isTrue(note.viewNote() === "Hello");
};

savesNoteToNotes();
