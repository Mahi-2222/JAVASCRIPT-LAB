Lab 14: Timers and Intervals
Student Information
Student Name: Mahi
Roll Number: [ENTER YOUR ROLL NUMBER]
Course: B.Tech CSE (Second Year)
Subject: JavaScript Programming Lab (BCS354)
University: Invertis University, Bareilly
1. Aim of the Experiment

To understand asynchronous timer management in JavaScript, exploring the Event Loop and Macrotask queue with setTimeout(), cancelling timers using clearTimeout(), and executing periodic routines with setInterval() and clearInterval().

2. Concepts Covered
JavaScript Concurrency model and the Event Loop.
Microtasks vs. Macrotasks: why setTimeout(..., 0) executes only after synchronous code completes.
Storing timer identifiers and aborting execution using clearTimeout().
Periodic repetition using setInterval() and controlling termination with clearInterval().
3. Task-wise Description
Task 1 (Task1.js): Print "Start", schedule setTimeout() with 0 milliseconds to print "Timer done", and print "End". Demonstrates that synchronous statements execute first (Start -> End), followed by the macrotask (Timer done).
Task 2 (Task2.js): Schedule a timer for 1000 milliseconds to print "Not shown". Immediately cancel the timer using its timer ID with clearTimeout(timerId), and print "Cancelled".
Task 3 (Task3.js): Schedule an interval at 200 ms to output "Tick 1", "Tick 2", and "Tick 3". Clear the interval using clearInterval() when the counter reaches 3.
4. List of Files
Task1.js: Event loop order demonstration script.
Task2.js: Timer cancellation script.
Task3.js: Periodic interval execution script.
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
Start
End
Timer done

Task 2:
text
Cancelled

Task 3:
text
Tick 1
Tick 2
Tick 3

7. Screenshot Placeholder Instructions
Note for Student:
Run each script in your terminal and take a screenshot showing the output. Save the screenshots inside the images/ directory of this lab.
