// Question:
// To solve this task, you will need two arrays: Student and MathGrades. The arrays should have respectively in Students, the students names and in the MathGrades, in the same index, the students grade for Maths going from 0 to 100.

// Students = [“John”, “Jane”]

// MathGrades = [70, 85]

// There should be a variable that can store a student's name. This name should be compared to the Students array and, when it is found, should output the name and grade, nicely on the screen. I.e.:

// John has reached 70 points in Math this season.

// The grades should also be checked and if it is less than 60 it should show it in red color, if it is between 60 and 70, it should be yellow, over 70 it should show green and if it is 100, it should be blue.


// Hint: 

// prompt() function will make an alert window that has an input inside, when the user types its name in it, it can be saved in a variable, for example:

// var result = prompt("type your name");

let students = ["Mike", "George", "Abas", "Ulrich", "Suzanna", "Sara"];
let Grades = [55, 65, 75, 86, 91, 100];

// ========= point at click element & add event==========
let clickHere = document.getElementById("prompt");
clickHere.addEventListener("click", promptName);

// ========= point at result element ==========
let resultSpace = document.getElementsByClassName("result");

// ========= Prompt  && Display ==========
let selectedName;
let grade = -2;

function promptName() {
  selectedName = prompt("Type your name here", "Abas");

  // ======= get the grade with selectedName from prompt value =======
  grade = extractGrade(selectedName);
  console.log(grade);

  // ========= Display  in 'result' class ==========
  resultSpace[0].innerHTML = ` ${selectedName} received ${grade}`;

  // ======= given the grade find out what color =======
  let bgColor;
  bgColor = decideColor(grade);

  // ======= now assign bgColor to font color =======
  resultSpace[0].style.color = bgColor;
}

// ======== Function declerations =========

function extractGrade(name) {
  console.log(name);
  let g = -1;
  students.map((std, i) => (std === name ? (g = Grades[i]) : g));
  return g;
}

function decideColor(g) {
  // console.log(g)
  let c = "black";
  switch (true) {
    case g < 60:
      // console.log("red case")
      c = "red";
      break;
    case g >= 60 && g < 70:
      // console.log("yellow case")
      c = "yellow";
      break;
    case g >= 70 && g < 100:
      // console.log("green case")
      c = "green";
      break;
    case g === 100:
      // console.log("blue case")
      c = "blue";
      break;
    default:
      // console.log("blue case")
      c = "black";
  }
  console.log(c);
  return c;
}
