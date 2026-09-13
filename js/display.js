import {
    calculateFinalGrade,
    getAcademicStatus,
    getPerformanceRemark,
    calculateClassAverage,
    countPassingStudents,
    getTopStudent
} from "./gradeUtils.js";


const studentList = document.getElementById("studentList");
const classAverage = document.getElementById("classAverage");
const passingCount = document.getElementById("passingCount");
const displayedCount = document.getElementById("displayedCount");
const topStudent = document.getElementById("topStudent");
const messageArea = document.getElementById("messageArea");


export function displayStudents(students) {

    studentList.innerHTML = "";

    if (students.length === 0) {
        displayMessage("No students found");
        return;
    }

    students.forEach(student => {

        const {
            id,
            name,
            block,
            quiz,
            lab,
            exam
        } = student;

        const finalGrade = calculateFinalGrade(student);
        const status = getAcademicStatus(finalGrade);
        const remark = getPerformanceRemark(finalGrade);

        const card = document.createElement("article");

        card.classList.add("student-card");
        card.dataset.id = id;

        card.innerHTML = `
            <div class="student-header">

                <div>
                    <h2>${name}</h2>
                    <div class="block">${block}</div>
                </div>

                <div class="grade">
                    ${finalGrade.toFixed(2)}
                </div>

            </div>

            <div class="scores">

                <div class="score">
                    <small>Quiz</small>
                    <strong>${quiz}</strong>
                </div>

                <div class="score">
                    <small>Laboratory</small>
                    <strong>${lab}</strong>
                </div>

                <div class="score">
                    <small>Prelim Exam</small>
                    <strong>${exam}</strong>
                </div>

            </div>

            <div class="status-row">
                <span class="badge">${status}</span>
                <span class="badge">${remark}</span>
            </div>
        `;

        studentList.appendChild(card);
    });

    displayMessage("");
}


export function displaySummary(students) {

    const average = calculateClassAverage(students);
    const passing = countPassingStudents(students);
    const top = getTopStudent(students);

    classAverage.textContent = average.toFixed(2);
    passingCount.textContent = passing;
    displayedCount.textContent = students.length;

    if (top === null) {

        topStudent.textContent = "None";

    } else {

        const topGrade = calculateFinalGrade(top);

        topStudent.textContent =
            `${top.name} (${topGrade.toFixed(2)})`;
    }
}


export function displayMessage(message) {

    messageArea.textContent = message;
}
