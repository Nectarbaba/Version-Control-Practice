function Student(name, age, weight, height, grade, section, rollNo, classTeacher,fatherName,motherName, fatherOccupation, motherOccupation) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.grade = grade;
    this.section = section;
    this.rollNo = rollNo;
    this.classTeacher = classTeacher;
    this.fatherName = fatherName;
    this.motherName = motherName;
    this.fatherOccupation = fatherOccupation;
    this.motherOccupation = motherOccupation;
}

const fatherNames = ['Mr. John', 'Mr. Ade', 'Mr. Smith', 'Mr. Williams'];

function getRandomFatherName() {
    return fatherNames[Math.floor(Math.random() * fatherNames.length)];
}

const Kudirat = new Student('Kudirat ', 12, 40, 4.5, 6, 'A', 1, 'Mr. Smith', getRandomFatherName(), 'Mrs. Kudirat', 'Engineer', 'Nurse');
console.log(Kudirat);
const Olawole = new Student('Olawole', 13, 45, 5.0, 7, 'B', 2, 'Mr. Smith', getRandomFatherName(), 'Mrs. Kudirat', 'Engineer', 'Nurse');
console.log(Olawole);
const Oluwaseun = new Student('Oluwaseun', 11, 35, 4.0, 5, 'C', 3, 'Mr. Smith', getRandomFatherName(), 'Mrs. Kudirat', 'Engineer', 'Nurse');
console.log(Oluwaseun);
const Kingsley = new Student('Kingsley', 14, 50, 5.5, 8, 'D', 4, 'Mr. Smith', getRandomFatherName(), 'Mrs. Kudirat', 'Engineer', 'Nurse');
console.log(Kingsley);
Kudirat.nationality = 'Nigerian';

function myFunction() {
    document.getElementById("name").innerHTML = "Name: " + Kudirat.name + Kudirat.nationality;

    document.getElementById("age").innerHTML = "Age: " + Kudirat.age;

    document.getElementById("weight").innerHTML = "Weight: " + Kudirat.weight;

    document.getElementById("height").innerHTML = "Height: " + Kudirat.height;

    document.getElementById("grade").innerHTML = "Grade: " + Kudirat.grade;

    document.getElementById("section").innerHTML = "Section: " + Kudirat.section;

    document.getElementById("roll_no").innerHTML = "Roll No: " + Kudirat.rollNo;

    document.getElementById("class_teacher").innerHTML = "Class Teacher: " + Kudirat.classTeacher;

}

function myFunction_2() {
    document.getElementById("name").innerHTML = "Name: " + Olawole.name;

    document.getElementById("age").innerHTML = "Age: " + Olawole.age;

    document.getElementById("weight").innerHTML = "Weight: " + Olawole.weight;

    document.getElementById("height").innerHTML = "Height: " + Olawole.height;

    document.getElementById("grade").innerHTML = "Grade: " + Olawole.grade;

    document.getElementById("section").innerHTML = "Section: " + Olawole.section;

    document.getElementById("roll_no").innerHTML = "Roll No: " + Olawole.rollNo;

    document.getElementById("class_teacher").innerHTML = "Class Teacher: " + Olawole.classTeacher;

}

function myFunction_3() {
    document.getElementById("name").innerHTML = "Name: " + Oluwaseun.name;

    document.getElementById("age").innerHTML = "Age: " + Oluwaseun.age;

    document.getElementById("weight").innerHTML = "Weight: " + Oluwaseun.weight;

    document.getElementById("height").innerHTML = "Height: " + Oluwaseun.height;

    document.getElementById("grade").innerHTML = "Grade: " + Oluwaseun.grade;

    document.getElementById("section").innerHTML = "Section: " + Oluwaseun.section;

    document.getElementById("roll_no").innerHTML = "Roll No: " + Oluwaseun.rollNo;

    document.getElementById("class_teacher").innerHTML = "Class Teacher: " + Oluwaseun.classTeacher;

}

function myFunction_4() {
    document.getElementById("name").innerHTML = "Name: " + Kingsley.name;

    document.getElementById("age").innerHTML = "Age: " + Kingsley.age;

    document.getElementById("weight").innerHTML = "Weight: " + Kingsley.weight;

    document.getElementById("height").innerHTML = "Height: " + Kingsley.height;

    document.getElementById("grade").innerHTML = "Grade: " + Kingsley.grade;

    document.getElementById("section").innerHTML = "Section: " + Kingsley.section;

    document.getElementById("roll_no").innerHTML = "Roll No: " + Kingsley.rollNo;

    document.getElementById("class_teacher").innerHTML = "Class Teacher: " + Kingsley.classTeacher;

}

