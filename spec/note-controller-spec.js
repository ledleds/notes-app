function noteControllerCanBeInstantiated(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController, "Object isn't an instance of NoteController")
};

noteControllerCanBeInstantiated();

function noteControllerCanAddNotesToList() {
  function NoteListDouble() {
    this.noteCallCount = 0;
  };

  NoteListDouble.prototype = {
    createNote: function() {
      this.noteCallCount++;
    }
  };

  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);

  noteListDouble.createNote("Hello")
  assert.isTrue(noteListDouble.noteCallCount === 1, "Note has not been added")
}

noteControllerCanGetHTML();
