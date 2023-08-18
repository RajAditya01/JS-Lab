// What is Javascript Promise? Suppose you are appearing for the exam; your dad
// promises you to give the new mobile after getting a pass with first class. Write a
// javascript code to create a promise object for above mention real world example.

// Ans:- A JavaScript Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a cleaner way to handle asynchronous operations and avoid callback hell by allowing you to chain operations and handle success or failure in a more structured manner.
// In your real-world example, let's create a JavaScript code that simulates the situation where your dad promises to give you a new mobile phone after you pass the exam with a first-class grade. We'll use a Promise to represent this scenario:

function takeExam() {
    return new Promise((resolve, reject) => {
        const passed = true; // Simulate the exam result

        if (passed) {
            resolve("Congratulations! You passed with first class.");
        } else {
            reject("Sorry, you didn't pass the exam.");
        }
    });
}

function getNewMobile(result) {
    return new Promise((resolve, reject) => {
        if (result === "Congratulations! You passed with first class.") {
            resolve("Here's your new mobile phone!");
        } else {
            reject("You need to pass with first class to get the mobile.");
        }
    });
}

// Using the Promises
takeExam()
    .then(result => {
        console.log(result);
        return getNewMobile(result);
    })
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error(error);
    });



//In this code, the takeExam function returns a Promise that simulates whether you passed the exam or not. If you pass, it resolves with a success message; otherwise, it rejects with an error message.

// The getNewMobile function returns a Promise that simulates getting a new mobile phone based on the exam result. It resolves if you passed with first class and rejects otherwise.

// Using .then() and .catch(), we chain the Promises together to simulate the scenario. If you pass the exam with first class, you'll get a new mobile phone. Otherwise, you'll receive an appropriate error message.