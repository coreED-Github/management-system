#! usr/bin/env Node
import inquirer from "inquirer";
class student{
    id: string;
  name: string;
  coursesEnrolled: string[];
 feesAmount: number; 

constructor(id: string, name: string, coursesEnrolled: string[],feesAmount: number){
this.id = id
this.name = name 
this.coursesEnrolled = coursesEnrolled
this.feesAmount = feesAmount
}
}
let baseID =50000
let studentID: string = "";
let continueEnrollment = true;
let students: student[] = []



do{
    let action = await inquirer.prompt({
    type: "list",
name: "ans",
message: "please select an option:\n",
choices: ["Enroll a student","show student status"]
})
if(action.ans === "Enroll a student"){
let studentName = await inquirer.prompt({
    type: "input",
    name: "ans",
    message: "please enter your name:"
})
let trimmedStudentName = (studentName.ans).trim().toLowerCase()
let studentNameCheck = students.map(check => check.name)
if(studentNameCheck.includes(trimmedStudentName) === false ){
if(trimmedStudentName !== ""){
    baseID++
    studentID = "ABCD" + baseID  
    console.log("\n\ congratulaion! your acount has been created");
console.log(`Welcome, ${trimmedStudentName}!`);

let course = await inquirer.prompt({
type: "list",
name: "ans",
message: "please select your course",
choices: ["English language","JavaScript","Amazone","Python","Web Development"]
})
let courceFees = 0;
switch(course.ans) {
case "English language" :
    courceFees = 5000;
break;
    case "JavaScript" :
        courceFees = 3000;
    break;

 case "Amazone" :
            courceFees = 2000;
        break;

case "Python" :
                courceFees = 3500;
            break;

    case "Web Development" :
                    courceFees = 6000;
                break;
}
let courseConfirm = await inquirer.prompt({
    type: "confirm",
    name: "ans",
    message: "Do you want to enroll in this course"

})
if(courseConfirm.ans === true){
let Student = new student(studentID, trimmedStudentName, [course.ans], courceFees)
students.push(Student)

console.log("you have enrolledin this course");
}




}else{
console.log("invalid name")
}
}else{
    console.log("this name is already exists")
}


}else if(action.ans === "show student status"){

    if(students.length !== 0){
let nameCheck = students.map(s => s.name)

let selectStudents = await inquirer.prompt({
    type: "list",
    name: "ans",
    message: "please select name",
    choices : nameCheck
}
)
let foundSutdent = students.find(s=>s.name===selectStudents.ans)

console.log("student information")
console.log(foundSutdent)
console.log("\n");

    }else{

        console.log("record is empty");
    }
}
let confirmation = await inquirer.prompt({
type: "confirm",
name: "ans",
message:  " do you want to continous?"

})
if(confirmation.ans === false){
    continueEnrollment = false
}


}while(continueEnrollment)