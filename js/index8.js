let marks = [];
let averageMark = 0;
let totalSumMarks = 0;
for (let i = 1; i <= 10; i += 1) {
  const mark = Number(Math.round(Math.random() * (12 - 1) + 1));
  marks.push(mark);
  // console.log(marks);
  totalSumMarks += mark;
  // console.log(totalSumMarks);
  const marksLenght = marks.length;
  averageMark = Number(Math.round(totalSumMarks / marksLenght));
}
console.log(marks);
console.log(averageMark);
if (averageMark <= 7) {
  console.log(
    `You have got quite bad average mark - ${averageMark}, so it is better to not hear it`
  );
} else {
  console.log(`Ur parents are proud with you! ${averageMark}`);
}