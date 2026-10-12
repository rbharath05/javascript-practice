/*1)Find the product of numbers in the given range. */

/*let n1 = Number(prompt("Enter start point"));
let n2 = Number(prompt("Enter end point"));
let prod = 1;
for (let i=n1; i<=n2; i++){
    prod = prod * i;
}
document.write(prod);*/

/*2)print the even numbers in the given range  in reverse order. */

/*let n1 = Number(prompt("Enter start point"));
let n2 = Number(prompt("Enter end point"));
for (let i=n2; i>=n1; i--){
    if (i%2==0){
        document.write(i+"<br>");
    }
}*/

/*3)Write a program to print the multiplication table of a given number.  */

/*let num = Number(prompt("Enter any Number"));
let mul = 1;
for (let i=1; i<=10; i++){
    mul = num*i;
    document.write(num+"*"+i+"="+mul+"<br>");
}*/

/*4)write a program to print the odd numbers in the given range. */

/*let n1 = Number(prompt("Enter start point"));
let n2 = Number(prompt("Enter end point"));
for (let i=n1; i<=n2; i++){
    if (i%2!=0){
        document.write(i+"<br>");
    }
}*/

/*6)find the sum of digits of a number  */

/*let num = Number(prompt("Enter Any Number"));
let sum = 0;
while (num > 0){
    let m = num%10;
    sum = sum+m;
    num = Math.floor(num/10);
}
document.write(pro);*/

/*product of the digits.*/

/*let num = Number(prompt("Enter Any Number"));
let product = 1;
while (num > 0){
    let m = num%10;
    product = product*m;
    num = Math.floor(num/10);
}
document.write(product);*/

/*7)sum of squares of digits of a number.*/

/*let num = Number(prompt("Enter Any Number"));
let sq = 1;
let sum = 0;
while(num > 0){
    let m = num%10;
    //sq = sq*m;
    sum = sum+(m*m);
    num = Math.floor(num/10);
}
document.write(sum);*/

/*8)Count the number of digits in a number.  */

/*let n = Number(prompt("Enter any number"));
let count = 0;
while (n > 0){
    n = Math.floor(n/10);
    count++;
}
console.log(count);*/

/*9)take the number from the user and print only the first number and last number from the given number.  */

/*let num = Number(prompt("Enter any number"));
let last = num%10;
let temp = num;
while (temp >= 10){
    temp = Math.floor(temp/10);
}
document.write("First digit: "+temp+"<br>");
document.write("Second digit: "+last);*/




/*10)Count Even and Odd Digits 
Number: 583214 
output: 
Even digits: 3 
Odd digits: 3 */

/*let num = Number(prompt("Enter any number"));
let countev = 0;
let countod = 0;
while (num > 0){
    m = num%10;
    if (m%2==0){
        countev++;
    }else {
        countod++
    }
    num = Math.floor(num/10);
}
document.write("Even digits: "+countev+"<br>");
document.write("Odd digits: "+countod+"<br>");*/

/*11)Find the Largest Digit  
Input: 
Number: 58329 
Expected Output: 
Largest digit: 9 */

/*let n = Number(prompt("Enter any number"));
let m1;
let largest = 0;
while (n > 0){
    m1 = n%10;
    if (m1 > largest){
        largest = m1;
    }
    n = Math.floor(n/10);
}
document.write(largest);*/

/*
12)Count a Particular Digit  
Input: 
Number: 1223342 
Digit to find: 2 
Expected Output: 
2 occurs 3 times 
*/

/*let n = Number(prompt("Enter any number"));
let f = Number(prompt("Enter Digit to find"));
let count = 0;
while (n > 0){
    let m = n%10;
    if (m == f){
        count++;
    }
    n = Math.floor(n/10);
}
document.write(f+" "+"occurs"+" "+count+" "+"times");*/

/*13)Sum Only Even Digits  
Input: 
Number: 583214 
Expected Output: 
Sum of even digits: 8 */

/*let n = Number(prompt("Enter any number"));
let sum = 0;
while (n > 0){
    let m = n%10;
    if (m%2==0){
        sum = sum+m;
    }
    n = Math.floor(n/10);
}
document.write(sum);*/

/*14)Find the average of digits in a given number. Example: 624 → (6 + 2 + 4) / 3 = 4 */

/*let n = Number(prompt("enter any number"));
let count = 0;
let sum = 0;
while (n>0){
    let m = n%10;
    count++;
    sum = sum + m;
    n = Math.floor(n/10);
}
let avg = sum / count;
document.write(avg);*/

/*15)Find the difference between the largest digit and the smallest digit in a given number. Example: 
58321 → Largest = 8, Smallest = 1 → Difference = 8 - 1 = 7.*/

/*let n = Number(prompt("Enter any number"));
let m = n%10;
let largest = m;
let smallest = m;
while(n > 0){
    m = n%10;
    if (m > largest){
        largest = m;
    }else if (m <= smallest){
        smallest = m;
    }
    n = Math.floor(n/10);
}
document.write("Largest = "+largest+"<br>");
document.write("Smallest = "+smallest+"<br>");
let diff = largest - smallest;
document.write("Difference = "+diff);*/

/*16) check whether the given number is spy or not.(sum of digits =product of digits) 
example:123=1+2+3=1*2*3=6  */

/*let num = Number(prompt("Enter Any Number"));
let n = num;
let sum = 0;
let mul = 1;
while (n > 0){
    let m = n%10;
    sum = sum + m;
    mul = mul * m;
    n = Math.floor(n/10);
}
document.write(sum+"<br>");
document.write(mul+"<br>");
if (sum == mul){
    document.write("The given number: "+num+" "+"is SPY");
}
else{
    document.write("Not a SPY");
}*/

/*17)check whether the given number is neon or not 
Example:9 
9*9=81 
8+1=9 */

/*let num = Number(prompt("Enter any number"));
let prod = num * num;
let sum = 0;
while (prod > 0){
    let m = prod%10;
    sum = sum + m;
    prod = Math.floor(prod/10);
}
if (num == sum){
    document.write("The given number is neon");
}
else{
    document.write("the given number is not neon");
}*/

/*18)Count total numbers of digits  Greater Than the First Digit 
Input: 
583927=First digit:=5 output:3 digits */

/*let n = Number(prompt("Enter Any Number"));
let temp = n;
let count = 0;
while (temp >= 10){
    temp = Math.floor(temp/10);
}
let fd = temp;
while (n > 0){
    let m = n%10;
    if (m > fd){
        count++;
    }
    n = Math.floor(n/10);
}
document.write(count);*/

/*19)Count Digits Having an Even Number of Occurrences 
Input: 
11223345 
Occurrences: 
1 → 2 
2 → 2 
3 → 2 
4 → 1 
5 → 1 
Output: 
Digits with even occurrences = 3 */

/*let num = Number(prompt("Enter any number"));
let count = [0,0,0,0,0,0,0,0,0,0];
while (num > 0){
    let m = num%10;
    count[m]++;
    num = Math.floor(num/10);
}
document.write(count+"<br>");
if (count%2==0){
    document.write("c");
}*/

/*21)Find the difference between the sum of even and odd digits 
 Input: 583241 
 Output: 
Even sum = 14 
Odd sum = 9 
Difference = 5 */

/*let n = Number(prompt("Enter any number"));
let ev_sum = 0;
let od_sum = 0;
while (n > 0){
    let m = n%10;
    if (m%2==0){
        ev_sum = ev_sum+m;
    }else if(m%2!=0){
        od_sum = od_sum+m;
    }
    n = Math.floor(n/10);
}
document.write("Even sum = "+ev_sum+"<br>");
document.write("Odd sum = "+od_sum+"<br>");
let diff = ev_sum-od_sum;
document.write("Difference = "+diff);*/

/*22)Find the largest even digit 
 Input: 
58392764 
Output: 
8 */

/*let n = Number(prompt("Enter any number"));
let m = n%10;
let largest = m;
let m1; //8264
while (n > 0){
    m = n%10;
    if (m%2==0){
        m1 = m;
    }
    n = Math.floor(n/10);
    if (m1 > largest){
        largest = m1;
    }
}
document.write(largest);*/

/*let n = Number(prompt("Enter any number"));

let largest = 0;

while (n > 0) {
    let m = n % 10;

    if (m % 2 == 0 && m > largest) {
        largest = m;
    }

    n = Math.floor(n / 10);
}

document.write(largest);*/

/*23)Count how many digits are greater than the average digit 
Input: 2468 
First calculate: 
Sum = 20 
Number of digits = 4 
Average = 5 
Then count digits greater than 5. 
Output: 
2 */

/*let num = Number(prompt("enter any number"));
let n = num;
let sum = 0;
let count = 0;
while (n > 0){
    let m = n%10;
    sum = sum + m;
    count++;
    n = Math.floor(n/10);
}
document.write("Sum: "+sum+"<br>");
document.write("Number of digits"+count+"<br>");
let avg = sum / count;
document.write("Average"+avg+"<br>");
let add = 0;
while(num > 0){
    let m1 = num%10;
    if(m1 > avg){
        add++;
    }
    num = Math.floor(num/10);
}
document.write(add);*/

/*24)Find the Smallest Even Digit 
Input: 58392764 
Output: 2 */

/*let num = Number(prompt("enter any number"));
let n = num;
let firsteven = 0;
while (num > 0){
    let m = num%10;
    if (m%2==0){
        firsteven = m;
        break;
    }
    num = Math.floor(num/10);
}
let smallest = firsteven;
while (n > 0){
    let m = n%10;
    if (m%2==0 && m < smallest){
        smallest = m;
    }
    n = Math.floor(n/10);
}
document.write(smallest);*/


/*25)Find the First Digit Greater Than 7 
Input: 583927 
Output: 8 
*/

/*let n = Number(prompt("Enter any number"));
let num = n;
let m = num%10;
let find = m;
let final = 0;
while (n >=  10){
    let mm = n%10;
    if (mm > find){
        final = mm;
        break;
    }
    n = Math.floor(n/10);
}
document.write(final);*/

/**/

