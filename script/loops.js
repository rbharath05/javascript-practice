//1st SEP
// //type casting 
// let a = prompt("Enter true of false");
// let b = Boolean(a);
// console.log(b);
// console.log(typeof b);

// let a = 2;
// let b = 3;
// //both ways
// (a>b)?(console.log("a is Greater",a)):(console.log("b is Greater",b));
// console.log((a>b)?a:b);

// let a = Number(prompt("Enter any number"));
// let b = Number(prompt("Enter any number"));
// let r = (a>b)?a:b;
// console.log(r);

//even or not
// let a = Number(prompt("Enter any number"));
// let r = (a%2==0)?console.log("Even",a):console.log("Odd",a);

// //divisible by 5 or not
// let a = Number(prompt("Enter any number"));
// let r = (a%5==0)?console.log("Divisible by 5",a):console.log("Not divisible by 5",a);

// //if else
// let user = prompt("Enter username");
// let pass = prompt("Enter any password");
// console.log("Hello Welcome User!!");

// if (user == "admin" && pass == "Admin123"){
//     console.log("Successfully log in");
    
// }else{
//     console.log("Error Invalid credinals");
// }

////Swapping of two numbers using variable
// let n1=10;
// let n2=20;
// let n3 = n1;
// n1 = n2;
// n2 = n3;
// console.log(n1);
// console.log(n2);

// //Swapping of two numbers without variable
// let n1 = 10;
// let n2 = 40;
// n1 = n1+n2
// n2 = n1-n2;
// n1 = n1-n2;
// console.log(n1);
// console.log(n2);

// //ATM notes
// let amt = Number(prompt("Enter Amount"));
// let count_500 = 0;
// let rem = 1;
// while (amt>0){
//     amt = Math.floor(amt/500);
//     count_500++;
//     rem = amt%500;
// }
// console.log(count_500);

// let n1 = Number(prompt("Enter any number"));
// let n2 = Number(prompt("Enter any number"));
// let p = 1;
// for (let i=n1; i<=n2; i++){
//     p = p*i;
// }
// console.log(p);

// let n1 = Number(prompt("Enter any number"));
// let n2 = Number(prompt("Enter any number"));
// for (let i=n2;i>=n1;i--){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let num = Number(prompt("Enter any number"));
// let sum = 0;
// while (num>0){
//     let n = num%10;
//     sum = sum+n;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// let num = Number(prompt("Enter any number"));
// let pr = 1;
// while (num>0){
//     let n = num%10;
//     pr = pr*n;
//     num = Math.floor(num/10);
// }
// console.log(pr);

// let num = Number(prompt("Enter any number"));
// let sq = 1;
// let sum = 0;
// while(num>0){
//     let n = num%10;
//     sq = n*n;
//     sum = sum+sq;
//     num = Math.floor(num/10);
// }
// console.log(sum);

// let num = Number(prompt("Enter any number"));
// let count = 0;
// while (num>0){
//     let n = num%10;
//     if(n!=0){
//         count++;
//     }
//     num = Math.floor(num/10);
// }
// console.log(count);

// let num = Number(prompt("Enter any number"));
// let last = num%10;
// let temp = num;
// while (temp >= 10){
//     temp = Math.floor(temp/10);
// }
// document.write("First digit: "+temp+"<br>");
// document.write("Second digit: "+last);

