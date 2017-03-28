var assert = {
  isTrue: function(assertionToCheck, errorMessage) {
    if (!assertionToCheck) {
      // throw new Error ("Assertion failed: " + assertionToCheck + " is not truthy");

      throw new Error (errorMessage);
    } else {
      console.log("Your test: " + assertionToCheck + " passed")
    }
  }
};
