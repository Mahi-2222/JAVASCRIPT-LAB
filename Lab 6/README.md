Lab 6: JSON Text
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To understand JavaScript Object Notation (JSON), serialization of JavaScript objects into JSON strings using JSON.stringify(), deserialization (parsing) of JSON strings using JSON.parse(), and handling malformed JSON errors using try...catch blocks.

2. Concepts Covered
JavaScript Object Notation (JSON) format and rules.
Object serialization with JSON.stringify().
Parsing JSON data into native objects with JSON.parse().
Error handling in parsing workflows using try...catch.
3. Task-wise Description
Task 1 (Task1.js): Create an object with name: "Rohan" and marks: [70, 80]. Serialize it using JSON.stringify() and print the resulting JSON string.
Task 2 (Task2.js): Store the JSON string '{"city":"Pune","pin":411001}'. Parse it using JSON.parse() and print the city property (Pune).
Task 3 (Task3.js): Store invalid JSON text "{name: Rohan}". Parse it within a try block and catch the SyntaxError, printing "Invalid JSON".
4. List of Files
Task1.js: JSON serialization script.
Task2.js: JSON deserialization script.
Task3.js: JSON parsing exception handling script.
README.md: Lab documentation.
images/: Directory reserved for output screenshots.
5. How to Run the Programs

Execute each script using Node.js:

bash
node Task1.js
node Task2.js
node Task3.js

6. Expected Output
Task 1:
text
{"name":"Rohan","marks":[70,80]}

Task 2:
text
Pune

Task 3:
text
Invalid JSON

7. Screenshot Placeholder Instructions

Run each script in your terminal and take a screenshot showing the command and corresponding output. Save the screenshots inside the images/ directory of this lab.
