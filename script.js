

console.log("Lab 8 Web structure is ready!");

console.log("");
console.log("Part 1:");

//Part 1: Understanding and Creating Objects
let student = {
    name: "Mike",
    age: 25,
    enrolled: true,
    courses: ["Math", "Computer", "English"],  
    basicStudentInfo: function() {
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

