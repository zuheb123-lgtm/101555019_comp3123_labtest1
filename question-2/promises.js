// Question 2: Promises

//after 500ms, it resolves the message
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { 'message': 'delayed success!' };
            resolve(success);
        }, 500);
    });
};

// after 500ms, rejects the message 
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

// Call both promises separately, handle resolve/reject results
resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));