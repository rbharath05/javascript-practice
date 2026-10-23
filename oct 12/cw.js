// //prototype - relation b/w objects
// let persons = {
//     name: "Bharath",
//     address: "Vizag"
// }
// let student = {
//     role: "student"
// }
// student.__proto__ = persons;
// console.log(student.name);

// // uses of prototype
// let college = {
//     collegename: "JNTU",
//     clgaddress: "KBHP",
//     collegecode: 321
// }
// let teacher = {
//     name: "Vani shree",
//     role: "Lecture",
//     subject: "JS",
// }
// let student = {
//     name:"Bharath",
//     role:"student",
//     rollno: 51
// }
// // teacher.__proto__ = college;
// // student.__proto__ = college;
// Object.setPrototypeOf(teacher,college);
// Object.setPrototypeOf(student,college);
// console.log(teacher.collegecode);
// console.log(student.collegename);

// let student2 = Object.create(college);
// student2.name = "Adithya";
// console.log(student2.clgaddress);

//************************************************************************* */

//Synchronous & Asynchronous

// //Synchronous:-
// console.log(1);
// console.log(2);
// console.log(3);

// //Asynchronous:-
// console.log(1);
// console.log(2);
// console.log(3);
// setTimeout(() => {
//     console.log(4);
// }, 1000);
// console.log(5);
// console.log(6);

// //Asynchronous to Synchronous 

// function num(a,callback){
//     setTimeout(() => {
//         console.log(a);
//         if(callback){
//         callback();
//     }
//     }, 2000);
// }
// num(1,()=>{
//     num(2,()=>{
//         num(3,()=>{
//             num(4,()=>{
//                 num(5,()=>{
//                     num(6,()=>{
//                         num(7,()=>{
//                             num(8,()=>{
//                                 num(9,()=>{
//                                     num(10)
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

//Problem:-  callback hell = pyramid of doom 
//realtime example to understand callback problem
//login
//booktickets
//payment
//ticket generated
//notification
//track
function login(callback){
    setTimeout(() => {
        console.log("Login successfull");
        callback();
    }, 2000);
}
function ticketsbook(callback){
    setTimeout(() => {
        console.log("tickets booked successfull");
        callback();
    }, 2000);
}
function payments(callback){
    setTimeout(() => {
        console.log("payment is successfull");
        callback();
    }, 2000);
}
function ticketgen(callback){
    setTimeout(() => {
        console.log("Ticket generated successfull");
        callback();
    }, 2000);
}
function notify(callback){
    setTimeout(() => {
        console.log("Notification send successfull");
        callback();
    }, 2000);
}
function tracking(){
    setTimeout(() => {
        console.log("Tracking");
    }, 2000);
}
login(()=>{
    ticketsbook(()=>{
        payments(()=>{
            ticketgen(()=>{
                notify(()=>{
                    tracking()
                })
            })
        })
    })
});