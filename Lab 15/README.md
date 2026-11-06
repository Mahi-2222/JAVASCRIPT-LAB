Lab 15: Promises and Async/Await with Local Data
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To master asynchronous JavaScript programming utilizing ES6 Promise (creation, fulfillment, and rejection handling via .then() and .catch()) and ES8 async/await syntactic sugar with try...catch error propagation, working with local mock data.

2. Concepts Covered
Creating Promises using the new Promise((resolve, reject) => ...) constructor.
Chaining fulfillment with .then() and catching rejection errors with .catch().
Modern asynchronous control flow using async functions and the await keyword.
Structured asynchronous error handling using standard try...catch statements.
Simulating asynchronous data retrieval using local datasets without external API dependencies.
3. Task-wise Description
Task 1 (Task1.js): Implement checkMarks(marks) returning a Promise that resolves marks if between 0 and 100, and rejects with Error("Marks out of range") otherwise. Call with 80 and log the resolved value.
Task 2 (Task2.js): Call checkMarks(120) and handle the rejection using .catch(), printing the rejection error message "Marks out of range".
Task 3 (Task3.js): Implement an async function run(). Inside try, await checkMarks(65) and log it, then await checkMarks(-5). In catch, catch the error and print "Caught: " + error.message. Call run().
Task 4 (Task4.js): Implement getUsers() returning a Promise that resolves after 100 milliseconds with local objects: Asha (id 1), Rohan (id 2), and Meera (id 3). Create an async function that awaits getUsers() and iterates through the users printing each name on a new line.
4. List of Files
Task1.js: Promise resolution script.
Task2.js: Promise rejection script.
Task3.js: Async/await with try-catch script.
Task4.js: Async data resolution script.
README.md: Lab documentation.
images/: Directory reserved for output screenshots.
5. How to Run the Programs

Execute using Node.js:

bash
node Task1.js
node Task2.js
node Task3.js
node Task4
