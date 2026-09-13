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
  if (students.length === 0) {
    studentList.innerHTML = "";
    displayMessage("No students found");
    return;
  }

  students.forEach(() => {});
  studentList.innerHTML = students.map(student => {
    const { id, name, block, quiz, lab, exam } = student;
    const finalGrade = calculateFinalGrade(student);
    const status = getAcademicStatus(finalGrade);
    const remark = getPerformanceRemark(finalGrade);

    return `
      <article class="student-card" data-id="${id}">
        <div class="student-header">
          <div>
            <h2>${name}</h2>
            <div class="block">${block}</div>
          </div>
          <div class="grade">${finalGrade.toFixed(2)}</div>
        </div>
        <div class="scores">
          <div class="score"><small>Quiz</small><strong>${quiz}</strong></div>
          <div class="score"><small>Laboratory</small><strong>${lab}</strong></div>
          <div class="score"><small>Prelim Exam</small><strong>${exam}</strong></div>
        </div>
        <div class="status-row">
          <span class="badge">${status}</span>
          <span class="badge">${remark}</span>
        </div>
      </article>
    `;
  }).join("");

  displayMessage("");
}

export function displaySummary(students) {
  const average = calculateClassAverage(students);
  const passing = countPassingStudents(students);
  const top = getTopStudent(students);

  classAverage.textContent = average.toFixed(2);
  passingCount.textContent = passing;
  displayedCount.textContent = students.length;
  topStudent.textContent = top
    ? `${top.name} (${calculateFinalGrade(top).toFixed(2)})`
    : "None";
}

export function displayMessage(message) {
  messageArea.textContent = message;
}
