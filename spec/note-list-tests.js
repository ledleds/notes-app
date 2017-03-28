function addsNewNote() {
  var noteList = new NoteList();

  noteList.addNote("Hello")
  noteList.addNote("Bonjour")
  assert.isTrue(noteList.notes[0].text === "Hello", "Array does not include text 'hello'")
  assert.isTrue(noteList.notes[1].text === "Bonjour", "Array does not include text 'Bonjour'")
}

addsNewNote();
