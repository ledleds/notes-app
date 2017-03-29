var assert = {
  isTrue: function(assertionToCheck, errorMessage) {
    if (!assertionToCheck) {
      throw new Error (errorMessage);
    } else {
      console.log("Oh yeah...so true")
    }
  },

  isEqual: function(expected, actual) {
    if (expected !== actual) {
      throw new Error ("Expected " + expected + " but got " + actual + ".")
    } else {
      console.log("Wooo, so equal.")
    }
  },

  contains: function(haystack, needle) {
    if (!haystack.includes(needle)) {
      throw new Error ("Expected " + needle + " to be within " + haystack + ", but it was not.")
    } else {
      console.log("Oh YEAH, '" + needle + "' is in there.")
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
