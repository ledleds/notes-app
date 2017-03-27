(function(exports) {

  function Note(note) {
    var text = [note]
  };

  Note.prototype.viewNote = function () {
    console.log(text[0])
  };

  exports.viewNote = viewNote;
})(this);
