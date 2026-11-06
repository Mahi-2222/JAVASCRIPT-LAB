Lab 13: Reduce, Some, Every and Map
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To master iterative array methods in JavaScript including reduce(), some(), every(), and map(), focusing on functional programming paradigms and non-mutating transformations.

2. Concepts Covered
Accumulation patterns with Array.prototype.reduce() and initial accumulator values.
Boolean predicate evaluation: existential quantification with some() and universal quantification with every().
Immutable array transformation using Array.prototype.map().
Immutability: verifying that the source array remains intact after transformation.
3. Task-wise Description
Task 1 (Task1.js): Create array prices = [120, 45, 300]. Use reduce starting with initial value 0 to calculate and print the total price (465).
Task 2 (Task2.js): Create array marks = [72, 85, 30, 90]. Use some() to verify if any mark is below 40 (true), and use every() to check if all marks are 35 or more (false due to 30). Print both boolean results.
Task 3 (Task3.js): Create array marks = [72, 85, 64, 90]. Use map() to create a new array incrementing each mark by 5. Print both the new array and original array, confirming that the original remains unchanged.
4. List of Files
Task1.js: reduce accumulator script.
Task2.js: some and every predicate testing script.
Task3.js: map array transformation script.
README.md: Lab documentation.
images/: Directory reserved for output screenshots.
5. How to Run the Programs

Execute using Node.js:

bash
node Task1.js
node Task2.js
node
