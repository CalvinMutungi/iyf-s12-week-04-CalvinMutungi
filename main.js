// Task 7.1: Variables & Personal Data
let developerName = "Calvin Mutungi";
let developerAge = 21;
const birthYear = 2005;
let isStudent = true;
let favoriteColors = ["Black", "Silver", "Blue"];
let registrationDate = new Date();

console.log(`Developer: ${developerName}, Type: ${typeof developerName}`);
console.log(`Age: ${developerAge}, Type: ${typeof developerAge}`);
console.log(`Is Student: ${isStudent}, Type: ${typeof isStudent}`);
console.log(`Favorite Colors:`, favoriteColors);
console.log(`System Date:`, registrationDate);

// Mini-Project: Interactive Console Calculator
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Tests to verify calculator logic
console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 - 5 =", calculate(10, "-", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 5 =", calculate(10, "/", 5));
console.log("10 / 0 =", calculate(10, "/", 0));
console.log("2 ** 3 =", calculate(2, "**", 3));

// Mini-Project: Student Grade Tracker
const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return 0;
        const grades = Object.values(student.grades);
        if (grades.length === 0) return 0;
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return Number((sum / grades.length).toFixed(2));
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        const subjectGrades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);
        if (subjectGrades.length === 0) return 0;
        const sum = subjectGrades.reduce((total, grade) => total + grade, 0);
        return Number((sum / subjectGrades.length).toFixed(2));
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;
        let topStudent = this.students[0];
        let maxAvg = this.getStudentAverage(topStudent.name);
        
        for (const student of this.students) {
            const avg = this.getStudentAverage(student.name);
            if (avg > maxAvg) {
                maxAvg = avg;
                topStudent = student;
            }
        }
        return topStudent.name;
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(student.name) < 70)
            .map(student => student.name);
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";
        const avg = this.getStudentAverage(name);
        let report = `Report Card for ${student.name}:\n`;
        for (const [subject, score] of Object.entries(student.grades)) {
            report += `- ${subject}: ${score} (${this.getLetterGrade(score)})\n`;
        }
        report += `Overall Average: ${avg} (${this.getLetterGrade(avg)})`;
        return report;
    }
};

// Test implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log("Alice Average:", gradeTracker.getStudentAverage("Alice")); // 91.67
console.log("Math Average:", gradeTracker.getSubjectAverage("math")); // 75.67
console.log("Top Student:", gradeTracker.getTopStudent()); // Alice
console.log("Struggling Students:", gradeTracker.getStrugglingStudents()); // [Charlie]
console.log("\n" + gradeTracker.generateReportCard("Alice"));