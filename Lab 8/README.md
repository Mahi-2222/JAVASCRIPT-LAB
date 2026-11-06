Lab 8: Inheritance, Methods and Composition
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To implement class inheritance using ES6 extends and super, method definitions for state validation, and object composition (has-a relationships) in JavaScript.

2. Concepts Covered
Class inheritance with extends keyword and invoking parent constructor via super().
Method overriding in derived classes.
Instance methods and state verification (PIN validation).
Object composition pattern ("has-a" relationship) vs. inheritance ("is-a" relationship).
3. Task-wise Description
Task 1 (Task1.js): Create class Person with a greet() method. Create class Teacher extending Person with property subject. Instantiate Anita teaching Maths and output her greeting.
Task 2 (Task2.js): Create class Locker with default PIN 1234. Implement checkPin(number) returning true if matched, otherwise false. Print results for PINs 1111 and 1234.
Task 3 (Task3.js): Create class Engine storing power. Create class Car that contains an Engine instance. Instantiate Car with power 150 and implement start() returning "Car starts with 150 HP".
4. List of Files
Task1.js: Inheritance and method override script.
Task2.js: Method validation script.
Task3.js: Object composition script.
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
Hello, my name is Anita and I teach Maths

Task 2:
text
false
true

Task 3:
text
Car starts with 150 HP

7. Screenshot Placeholder Instructions

Run each script in your terminal and take a screenshot showing the command and corresponding output. Save the screenshots inside the images/ directory of this lab.
