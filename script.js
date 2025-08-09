

console.log("Lab 8 Web structure is ready!");

console.log("");
console.log("Part 1:");

//Part 1: Understanding and Creating Objects
let student = {
    name: "Mike",
    age: 25,
    enrolled: true,
    courses: ["Math", "Computer", "English"],
    basicStudentInfo: function () {
        // I had issues with this part as it wasn't in the class example. 
        return `Student: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;

        // console.log(`Student: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`); = I previously did it this way and returned "undifined"
    }
};

console.log(student.name); // Mike
console.log(student.age);  // 25
console.log("Student Info:", student.basicStudentInfo()); // Student Info: Student: Mike, Age: 25, Enrolled: true



console.log("");

console.log("Part 2:");
//Part 2: Working with JSON
let jsonString = JSON.stringify(student);
console.log(jsonString); // Output:

let jsonToObject = JSON.parse(jsonString);
console.log("Student converted from JASON:", jsonToObject); // Output:



console.log("");

console.log("Part 3:");
//Part 3: Using Destructuring Assignment
let { name, courses } = student;
console.log("Destructured name"); // Output: Mike
console.log("Destructured courses"); // 'Math', 'Computer', 'English' 
let scores = [85, 92, 78, 90];
let [score1, score2] = scores
console.log("Score 1: ", score1); // Output:85
console.log("Score 2: ", score2); // Output:92



console.log("");

console.log("Part 4:");
//Part 4: The Spread Operator


let clonedStudent = { ...student, graduationYear: 2025 };
console.log("Cloned Student and Graduation Year:", clonedStudent);

const newCourses = ["java 101", "Web Design"];
const allCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", allCourses);
