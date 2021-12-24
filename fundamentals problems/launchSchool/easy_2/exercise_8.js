/* exercise_8.js

Grade Book

Write a function that determines the mean (average) of the three scores passed
to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative
values or values greater than 100. */

function betweenTwoNum(query, num1, num2) {
  return query >= num1 && query <= num2;
}

function getGrade(grade1, grade2, grade3) {
  const gradeAverage = (grade1 + grade2 + grade3) / 3;

  if (betweenTwoNum(gradeAverage, 90, 100)) return 'A';
  if (betweenTwoNum(gradeAverage, 80, 89)) return 'B';
  if (betweenTwoNum(gradeAverage, 70, 79)) return 'C';
  if (betweenTwoNum(gradeAverage, 60, 69)) return 'D';

  return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
