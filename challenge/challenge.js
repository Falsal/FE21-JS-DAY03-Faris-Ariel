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
