function NoteDouble() {
  this.text = "Patate"
};

test({
  singleNoteViewTakesNoteModelUponInstantiation: function(){
    var noteDouble = new NoteDouble();
    var singleNoteView = new SingleNoteView(noteDouble);

    assert.isEqual(singleNoteView.note, noteDouble)
  },

  returnsStringOfHtmlFromNoteModel: function(){
    var noteDouble = new NoteDouble();
    var singleNoteView = new SingleNoteView(noteDouble);
    assert.isEqual(singleNoteView.generateHtmlForSingleNote(), "<div>Patate</div>")
  }
})
