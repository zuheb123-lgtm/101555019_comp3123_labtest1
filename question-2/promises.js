// Question 2: Promises
// Promise versions of delayedSuccess and delayedException from callbacks.js

// Similar to delayedSuccess: resolves a message after 500ms
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { 'message': 'delayed success!' };
            resolve(success);
        }, 500);
    });
};

// Similar to delayedException: rejects an error message after 500ms
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('delayed exception!');
            } catch (e) {
                reject({ 'error': e.message });
            }
        }, 500);
    });
};

// Call both promises separately and handle resolve/reject results
resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));