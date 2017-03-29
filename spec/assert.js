var assert = {
  isTrue: function(assertionToCheck, errorMessage) {
    if (!assertionToCheck) {
      throw new Error (errorMessage);
    } else {
      console.log("Your test: " + assertionToCheck + " passed")
    }
  },

  isEqual: function(expected, actual) {
    if (expected !== actual) {
      throw new Error ("Expected " + expected + " but got " + actual + ".")
    } else {
      console.log("Woo, so equal")
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
