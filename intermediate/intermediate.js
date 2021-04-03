
// Exercise 1 | Compare two numbers   --->                                  Create a JavaScript program that will show the average grade for each student. Here are the points for each student:

// Martin = 76 / Thomas = 85/ Klaus = 65/ Maria = 93/ David = 81

// Based on their points, output the grade, according to the following table:

// < 60 F, < 70 D, < 80 C,< 90 B,< 100 A

// Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).

let students={
Martin : 76,

Thomas : 85,

Klaus : 65,

Maria : 93,

David : 81,
}

// NONE OF THE COMMENTED METHODS BELOW WORKED TO ITERATE OVER THE OBJECT "students"
// https://dzone.com/articles/js-array-from-an-array-like-object  
// let studentsArray=Array.from(students)
// let studentsArray=[...students]
// console.log(studentsArray[0])
// students=Array.prototype.slice.call(students)
// students.map((stud,i) => 
//     console.log(' Name...' + i +'Grade...'+ stud[i])
//     )

// let studArray=Object.entries(students)
// console.log(typeof(studArray))
// studArray.map(
//     (stud,i) => 
//     console.log(' studinfo...'+i+"Name"+stud[i])
    // console.log(' Name...' + i +'Grade...'+ stud[i])
// )

// ONLY for in works

for (let Name in students){
    let studGrade=students[Name]
    let grade;
    // console.log(studGrade)
    switch(true){
        case (studGrade < 60):
            grade='F';
            break;
        case (studGrade>60 && studGrade<70):
            grade='D';
            break;
        case (studGrade > 70 && studGrade<80):
            grade='C';
            break;
        case (studGrade>80 && studGrade<90):
            grade='B';
            break;
        case (studGrade > 90):
            grade='A';
            break;
    }
    console.log(grade+'--'+Name)
    document.getElementById('students').innerHTML+=`${Name}   ${students[Name]} Grade .. ${grade} <br>`
   
}

