

console.log("Lab 8 Web structure is ready!");



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