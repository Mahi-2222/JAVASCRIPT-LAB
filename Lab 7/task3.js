function Student(name, marks) {
    this.name = name;
    this.marks = marks;
}

Student.prototype.result = function() {
    return this.marks >= 40 ? "Pass" : "Fail";
};

const student1 = new Student("Asha", 88);
console.log(student1.result());
