Lab 11: Scope and Closures
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To investigate variable scope hierarchies (global scope, block scope, and function scope) and master lexical closures in JavaScript.

2. Concepts Covered
Block scoping ({ ... }) introduced by ES6 let and const.
Variable shadowing within nested blocks.
Lexical scoping and closure mechanics: functions maintaining access to their outer lexical environment even after the outer function has returned.
Global scope accessibility across function calls.
3. Task-wise Description
Task 1 (Task1.js): Declare level = "outer". Inside a nested block, declare another level = "inner". Print inner from inside the block, then print outer from after the block.
Task 2 (Task2.js): Implement makeCounter(), initializing count = 0. Return an inner function that increments and returns count. Call the counter twice and print both returned values.
Task 3 (Task3.js): Declare global variable school = "Sample College". Create function showSchool() that accesses the global variable and prints "Welcome to Sample College". Call the function.
4. List of Files
Task1.js: Block scoping script.
Task2.js: Closure counter script.
Task3.js: Global scope access script.
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
inner
outer

Task 2:
text
1
2

Task 3:
text
Welcome to Sample College

7. Screenshot Placeholder Instructions
Note for Student:
Run each script in your terminal and take a screenshot showing the output. Save the screenshots inside the images/ directory of this lab.
