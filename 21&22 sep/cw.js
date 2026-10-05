// let a = [1,2,3,4,5];
// let n = [];
// for (let i=5; i>0; i--){
//     if (i%2!=0){
//         n.push(i);
//     }
// }
// console.log(n);

// let n = 1;
// let ch = 65;
// for (let i=1; i<=n; i++){
//     for (let j=1; j<=5; j++){
//         if(i==j){
//             document.write(n);
//         }else if(i){
//             document.write(String.fromCharCode(ch++));
//         }
//     }
//     n++;
//     document.write('<br>');
// } 

//Objects class 
// let student = new Object();
// student.id = 101;
// student.name = "Bharath";
// student.mobile = 9381149641;
// student.adhar = 9600;
// student.class = "Java FSD";
// console.log(student);
// student.schlname = "Catherine";
// delete student.adhar;
// student.marks = [20,25,43,56,21];
// console.log(student);

// let student = {
//     name:"Bharath",
//     address : {
//         hno:"1/23-49",
//         place:"tgvp",
//         city:"vizag",
//         state:"Andhra Pradesh"
//     }
// }
// console.log(student.address.city);

// //Rest operator
// add(1,2,3,4,5);
// function add(...a){
//     let sum = 0;
//     for (let x of a){
//         sum = sum+x;
//     }
//     console.log(sum);
// }

//using reduce function
// let a = [1,2,3,4,5];
// let r = a.reduce((sum,x)=>sum+x,0);
// console.log(r);

// //spread operator
// let a = [1,2,3];
// let b = [4,5,6];
// let c = a.concat(b);
// console.log(c);
// console.log(...c);

//destruction in js

// Array destruction
// let num = [1,2,3,4,5];
// let [a,b,c,d,e] = num;
// console.log(c);

// //object destruction
// let student = {
//     rollno : 101,
//     name : "Bharath",
//     marks : [23,45,66],
//     class : "java FSD"
// };
// let {rollno:a ,name:b, marks:c} = student;
// console.log(a,b);
// console.log(c[1]);

//optional chaining(?.)
// let person = {
//     id:1,
//     name:"Bharath",
//     address:{
//         pincode:521163,
//         city:HYD
//     }
// }
// console.log(person.add?.city);

//nullish coalescing operator(??.)
let id;
console.log(id??1);
