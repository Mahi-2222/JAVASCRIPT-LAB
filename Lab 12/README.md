Lab 12: Callbacks and Higher-Order Functions
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To understand the concept of First-Class Functions in JavaScript, creating Higher-Order Functions (functions that accept other functions as arguments), and employing callback functions for composition and iteration.

2. Concepts Covered
Functions as first-class citizens in JavaScript.
Higher-Order Functions (HOFs).
Callback invocation and passing arguments to callbacks.
Function composition using repetitive application (fn(fn(x))).
3. Task-wise Description
Task 1 (Task1.js): Create applyTwice(fn, value) which evaluates fn(fn(value)). Create addTen(num) that adds 10. Call and print applyTwice(addTen, 5) to obtain 25.
Task 2 (Task2.js): Create formatMarks(marks, callback) where the callback receives marks and formats the string. Pass an arrow callback returning "Marks: 76/100" and print the output.
Task 3 (Task3.js): Create repeatAction(times, action) which invokes the action callback for each round from 1 through times. Call repeatAction(3, ...) to output "Round 1", "Round 2", and "Round 3".
4. List of Files
Task1.js: Higher-order function composition script.
Task2.js: Callback formatting script.
Task3.js: Repetitive callback execution script.
README.md: Lab documentation.
images/: Directory reserved for output screenshots.
5. How to Run the Programs

Execute using Node.js:

bash
node Task1.js
node Task2.js
node Task3.js

6. Expected Output
Task 1:
text
25

Task 2:
text
Marks: 76/100

Task 3:
text
Round 1
Round 2
Round 3

7. Screenshot Placeholder Instructions
Note for Student:
Run each script in your terminal and take a screenshot showing the output. Save the screenshots inside the images/ directory of this lab.
