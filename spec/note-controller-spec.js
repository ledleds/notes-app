function NoteListDouble() {
  this.noteCallCount = 0;
};

NoteListDouble.prototype = {
  viewNotes: function() {
    return 'YO';
  }
};

NoteListDouble.prototype = {
  addNote: function() {
    this.noteCallCount++;
  }
};

function DummyElement(){
  this.innerHTML = 'empty'
};

function NoteListViewDouble(){};

NoteListViewDouble.prototype = {
  generateHTML: function() {
    return "<ul><li><div>" + "YO" + "</div></li></ul>"
  }
};

test({
  noteControllerCanBeInstantiated: function(){
    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController instanceof NoteController, "Object isn't an instance of NoteController")
  },

  noteControllerCanAddNotesToList: function() {
    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);
    noteController.addNoteToList("Hello")
    assert.isTrue(noteListDouble.noteCallCount === 1, "Note has not been added")
  },

  passingDocumentToHtml: function() {
    var dummyElement = new DummyElement();
    var noteController = new NoteController();
    var noteListViewDouble = new NoteListViewDouble(NoteListDouble);

    noteController.createNoteListView(noteListViewDouble)
    noteController.insertHTML(dummyElement)
    assert.isEqual("<ul><li><div>YO</div></li></ul>", dummyElement.innerHTML)
  }
})
