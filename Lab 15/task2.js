function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error.message);
    });
