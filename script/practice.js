//Money Notes//
// let amount = Number(prompt("Enter amount:"));
// let no_500 = Math.floor(amount/500);
// let remaining = Math.floor(amount%500);
// let no_200 = Math.floor(remaining/200);
// remaining = Math.floor(remaining%200);
// let no_100 = Math.floor(remaining/100);
// remaining = Math.floor(remaining%100);
// console.log(no_500);
// console.log(no_200);
// console.log(no_100);

//conditional statements//
//Example 1//
/*let num = Number(prompt("Enter any number:"));
if (num > 0){
    console.log("positive");
}
else if (num < 0){
    console.log("negative");
}
else if (num == 0){
    console.log("zero");
}*/

//example 2//
/*
let age = Number(prompt("Enter your age:"));
if (age <= 12){
    console.log("Child");
}else if (age <=19){
    console.log("Teenager");
}else if (age <= 59){
    console.log("Adult");
}else if (age >= 60){
    console.log("Senior Citizen");
}*/


//example 3//
/*let marks = Number(prompt("Enter your marks:"));
if (marks >= 85){
    console.log(marks,"A grade");
}
else if(marks >= 65){
    console.log(marks,"B grade");
}
else if(marks >= 45){
    console.log(marks,"C grade");
}
else{
    console.log(marks,"Fail");
}*/

//example 4    4642%10=2 2+ 4642/10 464
/*let a = Number(prompt("Enter number:"));
let add = 0;
let rem;
let num;
for (let i = 1; i <= a; i++){
    rem = Math.floor(a%10);
    add = (add + rem);
    num = Math.floor(a/10);
}
console.log(add);*/

/*let a = Number(prompt("enter any number:"));
let sum = 0;
console.log(a);
let num = a;
let remain=a;
let num = Math.floor(a%10);
let remain = Math.floor(a/10);
sum = sum+num;
console.log(num , remain,sum);
num = Math.floor(remain%10);
remain = Math.floor(remain/10);
sum = sum+num;
console.log(num , remain,sum);
num = Math.floor(remain%10);
remain = Math.floor(remain/10);
sum = sum+num;
console.log(num , remain,sum);
num = Math.floor(remain%10);
remain = Math.floor(remain/10);
sum = sum+num;
console.log(num , remain,sum);
//console.log(num1+num2+num3+num4);

for(let i=1; i<5; i++){
    num = Math.floor(remain%10);
    remain = Math.floor(remain/10);
    sum = sum+num;
    console.log(num , remain,sum);
}*/

// let att = Number(prompt("Enter your attendance:"));
// if (att>=75){
//     let mar = Number(prompt("Enter your marks:"));
//     if (mar>=40){
//         console.log("pass");
//     }else{
//         console.log("fail");
//     }
// }else{
//     console.log("Attendance is not greater than 75");
// }


// let a = [10,20,10,30,40,50,50,50,50];
// let duplicate = [];
// let k = 0;
// for(let i=0; i<=a.length; i++){
//     for(let j=i+1; j<=a.length; j++){
//         if (a[i]==a[j] && !duplicate.includes(a[i])){
//             duplicate[k] = a[i];
//             k++;
//         }
//     }
// }
// console.log(duplicate); 

// let n = "programming", d = ""
// for (let i = 0; i < n.length; i++) {
//     if (!d.includes(n[i]))
//         d += n[i]
// }
// // document.writeln(d)
// for (let i = 0; i < d.length; i++) {
//     let c = 0
//     for (let j = 0; j < n.length; j++) {
//         if (d[i] == n[j])
//             c++
//     }
//     document.writeln(d[i] + " -> " + c + "<br>")
// }

