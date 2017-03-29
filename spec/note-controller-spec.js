function noteControllerCanBeInstantiated(){
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController, "NoteList is an instance of NoteController")
};

noteControllerCanBeInstantiated();
