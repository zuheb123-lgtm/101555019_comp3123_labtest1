// Question 1: ES6 Features
// Filters out non-strings and lowercases the remaining words, using a Promise

const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    // Reject if the input is not an array
    if (!Array.isArray(mixedArray)) {
      reject(new Error("Input must be an array"));
      return;
    }

    // Keep only strings, then lowercase them
    const words = mixedArray
      .filter((item) => typeof item === "string")
      .map((word) => word.toLowerCase());

    resolve(words);
  });
};

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

// Resolved case
lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

// Rejected case (shows the promise can also be rejected)
lowerCaseWords("not an array")
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));