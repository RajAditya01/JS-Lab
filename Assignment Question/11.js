// Write a javascript code to create a class to represent a Student details include the Student Roll No, Name of the Student, Branch, year, location and college. Assign initial values using constructor. Calculate average of marks of 6 subjects and
// calculate attendance percentage



class Student {
    constructor(rollNo, name, branch, year, location, college) {
        this.rollNo = rollNo;
        this.name = name;
        this.branch = branch;
        this.year = year;
        this.location = location;
        this.college = college;
        this.marks = [];
        this.attendance = [];
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    calculateAverage() {
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
        return totalMarks / this.marks.length;
    }

    addAttendance(isPresent) {
        this.attendance.push(isPresent);
    }

    calculateAttendancePercentage() {
        const totalDays = this.attendance.length;
        const presentDays = this.attendance.filter(isPresent => isPresent).length;
        return (presentDays / totalDays) * 100;
    }
}

// Create student instance and add marks and attendance
const student = new Student(11212714, "Aditya", "Computer Science", 3, "India", "MMEC College");
student.addMark(95);
student.addMark(90);
student.addMark(98);
student.addMark(92);
student.addMark(100);
student.addMark(95);

student.addAttendance(true);
student.addAttendance(true);
student.addAttendance(true);
student.addAttendance(true);
student.addAttendance(true);
student.addAttendance(true);
student.addAttendance(false);

// Calculate and display average marks and attendance percentage
console.log(`Student - ${student.name}`);
console.log(`Average Marks: ${student.calculateAverage()}%`);
console.log(`Attendance Percentage: ${student.calculateAttendancePercentage()}%`);
