test({
  singleNoteViewTakesNoteModelUponInstantiation: function(){
    function NoteDouble(){};
    var noteDouble = new NoteDouble();
    var singleNoteView = new SingleNoteView(noteDouble);

    assert.isEqual(singleNoteView.note, noteDouble)
  }
})
