//print number in range except 7
/*let n1 = Number(prompt("Enter any number"));
let n2 = Number(prompt("Enter any number"));
for (let i=n1; i<=n2; i++){
    if(i!=7){
        document.write()
    }
}*/



//Prime Number
/*let num = Number(prompt("Enter any number"));
let count = 0;
for (let i=1; i<=num; i++){
    if (num%i==0){
        count++;
    }
}
if (count==2){
    document.write("Prime Number");
}
else {
    document.write("Not a prime number");
}*/

//reverse of a number
/*let n = Number(prompt("Enter any number"));
let rev = 0;
while (n > 0){
    let m = n%10;
    rev = rev*10+m;
    n = Math.floor(n/10);
}
document.write(rev);*/

//palindrome of number
/*let num = Number(prompt("enter any number"));
let n = num;
let rev = 0;
while(n>0){
    let m = n%10;
    rev = rev * 10 + m;
    n = Math.floor(n/10);
}
if (num == rev){
    document.write("Palindrome");
}
else {
    document.write("Not an Palindrome");
}*/

//fibonacci series
/*let a = 0;
let b = 1;
let c = a+b;
document.write(a+"<br>");
document.write(b+"<br>");
//Important (a+b)
while ((a+b) <= 50){
    c = a+b;
    document.write(c+"<br>");
    a = b;
    b = c;   
}*/

//print fibonacci series till 10


//print first 10 fibonacci series
let a = 0;
let b = 1;
let c = 0;
document.write(a+"<br>");
document.write(b+"<br>");
for (let i=1; i<=8; i++){
    c = a+b;
    document.write(c+"<br>");
    a = b;
    b = c;
}
