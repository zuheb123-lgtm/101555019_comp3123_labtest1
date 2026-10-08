// Question 1: ES6 Features

const lowerCaseWords = (mixedArray) => {
  return new Promise((resolve, reject) => {
    // if input isnt an array, dont accept it
    if (!Array.isArray(mixedArray)) {
      reject(new Error("Input must be an array"));
      return;
    }

    // onlu strings, then lowercase
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

// Rejected case 
lowerCaseWords("not an array")
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));