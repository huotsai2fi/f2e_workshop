// class Student {
//   constructor(no, score) {
//     this.no = no;
//     this.score = score;
//   }
// }
function Student(no, score) {
  this.no = no;
  this.score = score;
}

//取得學生資料
function getStudents() {
  let studentArr = [];
  $("#student-form td:nth-of-type(2) input").each(function (index, element) {
    let student = new Student();
    student.no = element.value;
    studentArr.push(student);
  });

  $("#student-form td:nth-of-type(3) input").each(function (index, element) {
    studentArr[index].score = Number(element.value);
  });
  return studentArr;
}

//計算平均分數
function getAverageScore(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element.score;
  });
  return sum / array.length;
}

//計算最高分數
function getHighestStudent(array) {
  let highestStudent = array[0];
  array.forEach((element) => {
    if (element.score > highestStudent.score) {
      highestStudent = element;
    }
  });
  return highestStudent;
}

//計算最低分數
function getLowestStudent(array) {
  let lowestStudent = array[0];
  array.forEach((element) => {
    if (element.score < lowestStudent.score) {
      lowestStudent = element;
    }
  });
  return lowestStudent;
}

//計算不及格人數
function getfailedCount(array) {
  let failedCount = 0;
  array.forEach((element) => {
    if (element.score < 60) {
      failedCount++;
    }
  });
  return failedCount;
}

//調整分數至超過50%人數及格
function adjustScore(array) {
  while (getfailedCount(array) > array.length / 2) {
    array.forEach((element) => {
      if (element.score < 100) {
        element.score++;
      }
    });
  }
  return array;
}

// 統計分數動作
$(".summary").click(function () {
  const students = getStudents();
  $("p").empty();
  $("p").append(`平均分數:${getAverageScore(students)}<br>`);
  $("p").append(`最高分數:${getHighestStudent(students).score}<br>`);
  $("p").append(`最低分數:${getLowestStudent(students).score}<br>`);
});

// 調整分數動作
$(".adjust").click(function () {
  if ($(`table tr`).find(`th:eq(3)`).length == 0) {
    let students = getStudents();
    students = adjustScore(students);
    $(`#student-form tr:first-of-type`).append(`<th>調整後分數</th>`);
    students.forEach((element, index) => {
      const data = `<td><input type="text" value="${element.score}"></td>`;
      $(`#student-form tr:nth-of-type(${index + 2})`).append(data);
    });
  } else {
    $(`table tr`).find(`th:eq(3),td:eq(3)`).remove();
  }
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