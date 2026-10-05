//1. Email Validation 
/*let email = prompt("Enter email:");
let a = email.includes('@');
let b = email.includes('.');
let c = email.charAt(0);
if(a==true && b==true && c!='@'){
    document.write("Valid email");
}else {
    document.write("Invalid email");
}*/

//2) Extract Username From Email
/*let email = prompt("Enter your email");
let sp = email.split("@");
document.write("Username: "+sp[0]+"<br>");
document.write("Domain: "+sp[1]);*/

//3. Mobile Number Masking 
/*let num = prompt("Enter your number");
let sl = num.slice(6);
document.write("*****"+sl);*/

//4. Employee ID Processing 
/*let inp = prompt("Enter employee id");
let emp = inp.split('-');
document.write("Employee Type: "+emp[0]+'<br>');
document.write("Year: "+emp[1]+'<br>');
document.write("Employee Number: "+emp[2]);*/

//5)Extract the username from a social media handle. 
/*let names = prompt("enter any name");
let n = names.replace('@','');
document.write(n);*/

//
let a = 60;
document.write(a);
alert("Server is busy");