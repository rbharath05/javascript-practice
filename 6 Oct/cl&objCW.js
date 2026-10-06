// //OOPS
// //Objects
// let student1 = {
//     rollno:101,
//     name:"bharath",
//     class:65,
//     mobileno:93811,
//     study:function(){
//         console.log("Student is Studying");
        
//     },
//     display: function (){
//         console.log("My roll number is:"+student1.rollno);
//         console.log("My name is:"+student1.name);
//         console.log("I'm From class:"+student1.class);
//         console.log("Mobile number is:"+student1.mobileno);
//     }
// }

// let student2 = {
//     rollno:103,
//     name:"ravi",
//     class:62,
//     mobileno:97048,
//     study:function(){
//         console.log("Student is Studying");
        
//     },
//     display: function (){
//         console.log("My roll number is:"+student2.rollno);
//         console.log("My name is:"+student2.name);
//         console.log("I'm From class:"+student2.class);
//         console.log("Mobile number is:"+student2.mobileno);
//     }
// }
// // console.log(student1.display());
// // console.log(student2.display());
// console.log(student1);
// console.log(student2);

//problem to create multiple objects

// //Solution for multiple objects
// //Classes and objects
// //class : Blueprint of objects
// class Student{
//     constructor(rollno,name,marks,mobile,obj){
//         this.RollNo=rollno;
//         this.Name = name;
//         this.Marks = marks;
//         this.Mobile = mobile;
//         this.obj = {
//      };
//     }
//     study(){
//         console.log("Student studying in Innomatics");
//     }
//     display(){
//         console.log("Student name is: "+this.Name);
//         console.log("Student Marks: "+this.Marks);
//         console.log("Student Marks: ",this.obj);
//     }
// }
// let student1 = new Student(1,"Bharath",[95,96,98],9381149,{fathername:"Ravi",mothername:"Annapurna",mobile:9756});
// let student2 = new Student(2,"Ravi",[98,80,90],9704824,{fathername:"Ravi",mothername:"Annapurna",mobile:9756});

// console.log(student1);
// student1.study();
// student1.display();
// console.log(student2);
// student2.study();
// student2.display();