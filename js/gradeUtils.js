export function calculateFinalGrade(student) {
    const { quiz, lab, exam } = student;

    return (
        quiz * 0.25 +
        lab * 0.35 +
        exam * 0.40
    );
}


export function getAcademicStatus(grade) {

    if (grade >= 90) {
        return "Excellent";
    } else if (grade >= 75) {
        return "Passed";
    } else if (grade >= 70) {
        return "Needs Improvement";
    } else {
        return "Failed";
    }
}


export function searchStudents(students, query) {

    const searchQuery = query.trim().toLowerCase();

    return students.filter(({ name }) =>
        name.toLowerCase().includes(searchQuery)
    );
}


export function filterStudentsByBlock(students, block) {

    if (block === "All") {
        return students;
    }

    return students.filter(student =>
        student.block === block
    );
}


export function filterStudentsByStatus(students, status) {

    if (status === "All") {
        return students;
    }

    return students.filter(student => {

        const grade = calculateFinalGrade(student);
        const academicStatus = getAcademicStatus(grade);

        return academicStatus === status;
    });
}


export function calculateClassAverage(students) {

    if (students.length === 0) {
        return 0;
    }

    const total = students.reduce(
        (sum, student) => sum + calculateFinalGrade(student),
        0
    );

    return total / students.length;
}


export function countPassingStudents(students) {

    return students.filter(student => {

        const grade = calculateFinalGrade(student);

        return grade >= 75;
    }).length;
}


export function getTopStudent(students) {

    if (students.length === 0) {
        return null;
    }

    return students.reduce((topStudent, student) => {

        const currentGrade = calculateFinalGrade(student);
        const topGrade = calculateFinalGrade(topStudent);

        if (currentGrade > topGrade) {
            return student;
        }

        return topStudent;

    });
}


export function getPerformanceRemark(grade) {

    switch (true) {

        case grade >= 90:
            return "Outstanding";

        case grade >= 85:
            return "Very Good";

        case grade >= 80:
            return "Good";

        case grade >= 75:
            return "Satisfactory";

        default:
            return "Unsatisfactory";
    }
}