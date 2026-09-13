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


