var assert = {
  isTrue: function(assertionToCheck, errorMessage) {
    if (!assertionToCheck) {
      throw new Error (errorMessage);
    } else {
      console.log("%cOh so true", "color: #28B463")
    }
  },

  isEqual: function(expected, actual) {
    if (expected !== actual) {
      throw new Error ("Expected " + expected + " but got " + actual + ".")
    } else {
      console.log("%cWooo, so equal.", "color: #0097A7")
    }
  },

  contains: function(haystack, needle) {
    if (!haystack.includes(needle)) {
      throw new Error ("Expected " + needle + " to be within " + haystack + ", but it was not.")
    } else {
      console.log("%cOh YEAH, '" + needle + "' is in there.", "color: #E91E63")
    }
  }
};

function test(tests) {
  for (var testName in tests) {
    if (tests.hasOwnProperty(testName) && typeof tests[testName] === "function") {
      tests[testName].call(tests)
    }
  }
};
