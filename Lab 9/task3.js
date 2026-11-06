<!DOCTYPE html>
<html>
<head>
    <title>Local Storage</title>
</head>
<body>

    <input type="text" id="note" placeholder="Enter your note">

    <button onclick="saveNote()">Save</button>

    <script>
        let noteBox = document.getElementById("note");

        // Show saved text when page opens
        noteBox.value = localStorage.getItem("note") || "";

        function saveNote() {
            let text = noteBox.value;

            localStorage.setItem("note", text);

            alert("Note saved!");
        }
    </script>

</body>
</html>
