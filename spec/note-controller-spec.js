test({
  noteControllerCanBeInstantiated: function(){
    function NoteListDouble(){};

    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController instanceof NoteController, "Object isn't an instance of NoteController")
  },

  noteControllerCanAddNotesToList: function() {
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
  },

  passingDocumentToHtml: function() {
    function dummyElement(){
      this.innerHTML = ''
    };

    function NoteListDouble(){};
    NoteListDouble.prototype = {
      viewNotes: function() {
        return 'YO';
      }
    };

    function NoteListViewDouble(){};
    NoteListViewDouble.prototype = {
      generateHTML: function() {
        return "<ul><li><div>" + "YO" + "</div></li></ul>"
      }
    };

    var dummyElement = new dummyElement
    var noteController = new NoteController(NoteListDouble);
    var noteListViewDouble = new NoteListViewDouble(NoteListDouble);

    noteController.createNoteListView(noteListViewDouble)
    noteController.insertHTML(dummyElement)

    assert.isEqual("<ul><li><div>YO</div></li></ul>", dummyElement.innerHTML)
  }
})
