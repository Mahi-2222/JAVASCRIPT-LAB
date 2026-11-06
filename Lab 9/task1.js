<!DOCTYPE html>
<html>
<head>
    <title>Change Text</title>
</head>
<body>

    <h1 id="heading">Welcome</h1>

    <button onclick="changeText()">Change text</button>

    <script>
        function changeText() {
            document.getElementById("heading").innerText =
                "Button clicked";
        }
    </script>

</body>
</html>
