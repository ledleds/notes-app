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
  }

};
