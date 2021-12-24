// pp_class_records_summary.js

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  let scoreData = Object.keys(scores).map(student => scores[student].scores);

  // transform the above score objects into an array of arrays for exam scores
  let examData = scoreData.map(score => score.exams);

  console.log(scoreData);
  console.log(examData);

  // return {
  //   studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
  //   exams: getExamSummary(examData),
  // };
}
/*
function getStudentScore(scoreObj) {
  // ...
}

function getExamSummary(examData) {
  // ...
}
*/
generateClassRecordSummary(studentScores);

/* returns:

{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}

*/

/* algorithm:
  - declare (gradeReport) to {}
  - declare (students) and assign to array of studentScores keys
  - iterate through each key, declare (studentResults) and build object with
    examAverage, exerciseScore, finalGrade, letterGrade
  - iterate through (studentResults) and build (studentGrades) array
    - add (studentGrades) array to (gradeReport) object
*/
