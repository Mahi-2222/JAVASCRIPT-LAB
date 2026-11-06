Lab 7: Constructor Functions and Classes
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To explore object-oriented programming (OOP) paradigms in JavaScript through traditional constructor functions, the prototype chain (prototype), and modern ES6 class syntax.

2. Concepts Covered
Object creation via Constructor Functions with the new keyword.
The this context inside constructor functions and classes.
ES6 class declaration, constructor(), and instance methods.
Prototypal inheritance and attaching methods via Constructor.prototype.
3. Task-wise Description
Task 1 (Task1.js): Implement constructor function Student(name, marks). Instantiate Asha with marks 88, and print name and marks on separate lines.
Task 2 (Task2.js): Implement ES6 class Book accepting title and pages, with a method summary() returning "<title> has <pages> pages". Instantiate "Algorithms", 320 pages and print its summary.
Task 3 (Task3.js): Define Student(name, marks) and attach a result() method to Student.prototype returning "Pass" if marks >= 40 and "Fail" otherwise. Instantiate Asha with 88 marks and print her result.
4. List of Files
Task1.js: Constructor function script.
Task2.js: ES6 class script.
Task3.js: Prototypal method script.
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
Asha
88

Task 2:
text
Algorithms has 320 pages

Task 3:
text
Pass

7. Screenshot Placeholder Instructions

Run each script in your terminal and take a screenshot showing the command and corresponding output. Save the screenshots inside the images/ directory of this lab.
