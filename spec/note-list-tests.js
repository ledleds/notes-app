test({
  addsNewNote: function() {
    var noteList = new NoteList();

    noteList.addNote("Hello")
    noteList.addNote("Bonjour")
    assert.isTrue(noteList._notes[0].text === "Hello", "Array does not include text")
    assert.isTrue(noteList._notes[1].text === "Bonjour", "Array does not include text")
    assert.isTrue(noteList._notes[0].id === 0)
  },

  showsListOfNotes: function() {
    var noteList = new NoteList();
    noteList.addNote("Hello")
    assert.isTrue(noteList.viewNotes()[0].text === "Hello", "Array does not include text")
  }
})
