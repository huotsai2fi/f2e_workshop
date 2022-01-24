class Student {
  constructor(no, score) {
    this.no = no;
    this.score = score;
  }
}

class MyClass {
  constructor(studentArr) {
    this.students = studentArr;
  }
  getAverageScore = function () {
    let sum = 0;
    this.students.forEach((element) => {
      sum += element.score;
    });
    return sum / this.students.length;
  };
  getHighestStudent = function () {
    let highestStudent = this.students[0];
    this.students.forEach((element) => {
      if (element.score > highestStudent.score) {
        highestStudent = element;
      }
    });
    return highestStudent;
  };
  getLowestStudent = function () {
    let lowestStudent = this.students[0];
    this.students.forEach((element) => {
      if (element.score < lowestStudent.score) {
        lowestStudent = element;
      }
    });
    return lowestStudent;
  };
}

function getStudents() {
  let studentArr = [];
  $("#student-form td:nth-of-type(2n) input").each(function (index, element) {
    let student = new Student();
    student.no = element.value;
    studentArr.push(student);
  });

  $("#student-form td:nth-of-type(3n) input").each(function (index, element) {
    studentArr[index].score = Number(element.value);
  });
  return studentArr;
}

const myClass = new MyClass();
$(".summary").click(function () {
  const myClass = new MyClass(getStudents());
  $("p").empty();
  $("p").append(`平均分數:${myClass.getAverageScore()}<br>`);
  $("p").append(`最高分數:${myClass.getHighestStudent().score}<br>`);
  $("p").append(`最低分數:${myClass.getLowestStudent().score}<br>`);
});

// 隨機產生測試資料
function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

$(document).ready(function () {
  $("#student-form td:nth-of-type(3n) input").each(function (index, element) {
    element.value = getRandomInt(60);
  });
});
