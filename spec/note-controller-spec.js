function noteControllerCanBeInstantiated(){
  function NoteListDouble(){};

  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);
  assert.isTrue(noteController instanceof NoteController, "Object isn't an instance of NoteController")
};

noteControllerCanBeInstantiated();

function noteControllerCanAddNotesToList() {
  function NoteListDouble() {
    this.noteCallCount = 0;
  };

  NoteListDouble.prototype = {
    addNote: function() {
      this.noteCallCount++;
    }
  };

  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);

  noteController.addNoteToList("Hello")
  assert.isTrue(noteListDouble.noteCallCount === 1, "Note has not been added")
}

// noteControllerCanAddNotesToList();
//
// function passingDocumentToHtml() {
// var noteList = new NoteList();
// var noteController = new NoteController(noteList);
// var dummyElement = document.createElement('div id="app"');
// console.log(dummyElement)
//
// };
//
// passingDocumentToHtml();
