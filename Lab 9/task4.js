<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Quiz</title>
</head>
<body>

    <h2>What is 2 + 3?</h2>

    <input type="radio" name="answer" value="4"> 4
    <br>

    <input type="radio" name="answer" value="5"> 5
    <br>

    <input type="radio" name="answer" value="6"> 6
    <br><br>

    <button onclick="checkAnswer()">Check Answer</button>

    <p id="result"></p>

    <script>
        function checkAnswer() {
            let answer = document.querySelector(
                'input[name="answer"]:checked'
            );

            let result = document.getElementById("result");

            if (answer === null) {
                result.innerText = "Please select an answer";
            }
            else if (answer.value === "5") {
                result.innerText = "Correct!";
            }
            else {
                result.innerText = "Try again";
            }
        }
    </script>

</body>
</html>
