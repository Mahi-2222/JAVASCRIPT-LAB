Lab 9: DOM, Validation, Storage and Quiz
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To develop interactive browser-based web applications using JavaScript DOM manipulation, event handling, form validation logic, browser persistence with the Web Storage API (localStorage), and dynamic quiz state verification.

2. Concepts Covered
Document Object Model (DOM) selection (getElementById, querySelector) and property updates (textContent, className).
Event Listeners (addEventListener) for user interactions (click, DOMContentLoaded).
Client-side form input validation.
Persistent key-value storage using window.localStorage (setItem, getItem).
Interactive evaluation of radio buttons in HTML forms.
3. Task-wise Description
Task 1 (Task1.html, Task1.css, Task1.js): A webpage featuring a heading "Welcome" and a button "Change text". When clicked, the heading updates to "Button clicked".
Task 2 (Task2.html, Task2.css, Task2.js): A validation function validateForm(name) returning an array of errors containing "Name is required" if the name is empty. Demonstrates both console logging (for "Asha" and empty name "") and interactive webpage validation.
Task 3 (Task3.html, Task3.css, Task3.js): A webpage with a text input area and a "Save" button. Clicking "Save" persists the note under the localStorage key "note". On page reload/open, the saved text is automatically retrieved and loaded back into the text box.
Task 4 (Task4.html, Task4.css, Task4.js): A quiz webpage presenting the question "What is 2 + 3?" with radio button options 4, 5, and 6. Clicking the "Check answer" button evaluates the selection, displaying "Correct" if 5 is selected, and "Try again" otherwise.
4. List of Files
Task1.html, Task1.css, Task1.js: DOM manipulation program.
Task2.html, Task2.css, Task2.js: Form validation program.
Task3.html, Task3.css, Task3.js: Web Storage / localStorage program.
Task4.html, Task4.css, Task4.js: Quiz evaluation webpage program.
README.md: Lab documentation.
images/: Directory reserved for output screenshots.
5. How to Run the Programs
Open any of the HTML files (Task1.html, Task2.html, Task3.html, Task4.html) directly in a web browser (Chrome, Edge, or Firefox).
For Task2.js, you can also test the console validation logic using Node.js:
bash
node Task2.js

6. Expected Output
Task 1:
Initial state: Heading displays Welcome.
After clicking the button: Heading updates to Button clicked.
Task 2:
Console:
text
Validation for 'Asha': []
Validation for empty name: [ 'Name is required' ]

Browser: Submitting an empty field displays "Name is required", while entering "Asha" displays success.
Task 3:
Entering text and clicking "Save Note" stores the value in localStorage.
Refreshing the browser page automatically loads and populates the text box with the stored value.
Task 4:
Selecting radio button 5 and clicking "Check answer" displays Correct.
Selecting 4 or 6 (or no option) and clicking "Check answer" displays Try again.
7. Screenshot Placeholder Instructions

Open each HTML page in your browser. Perform the interactions (clicking buttons, saving notes, checking answers) and capture screenshots of the active browser window. Save the screenshot files inside the images/ directory of this lab.
