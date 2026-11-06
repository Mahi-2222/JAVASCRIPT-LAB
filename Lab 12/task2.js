function formatMarks(marks, callback) {
    return callback(marks);
}

let result = formatMarks(76, (marks) => {
    return "Marks: " + marks + "/100";
});

console.log(result);
