/*A teacher wants to process marks of 5 students. 
For every student: 
● Marks >= 40 → Pass 
● Marks < 40 → Fail*/

/*for (let i=1; i<=5; i++){
    let student = prompt("Enter your name:");
    let marks = Number(prompt("Enter your marks:"));
    if (marks>=40){
        document.write(student+":"+"pass"+'<br>');
    }else if(marks<40){
        document.write(student+":"+"fail"+'<br');
    }
}*/

/*2)Temperature Monitoring 
A system records the temperature for 7 days. 
● Temperature > 35 → Hot Day 
● Temperature between 20 and 35 → Normal Day 
● Temperature < 20 → Cold Day 
Task: Display the category for each day.*/

/*for (let i=1; i<=7; i++){
    let days = prompt("Enter week days");
    let temp = Number(prompt("Enter Temperature:"));
    if (temp>35){
        console.log(days,temp,"Hot Day");
    }else if(temp>=20 && temp<=35){
        console.log(days,temp,"Normal Day");
    }else if(temp<20){
        console.log(days,temp,"Cold Day");
    }
}*/

/*3)Movie Ticket Booking 
A cinema has 10 customers. 
For every customer, enter their age. 
● Age >= 18 → Adult Ticket 
● Age < 18 → Child Ticket 
Task: Display the ticket type for each customer */

/*for (let i=1; i<=10; i++){
    let customer = prompt("Enter your name");
    let age = Number(prompt("Enter your age"));
    if (age >= 18){
        console.log(customer,age,"Adult Ticket");
    }else if(age < 18){
        console.log(customer,age,"Child Ticket");
    }
}*/

/*4) Shopping Discount 
A shop has bills from 5 customers. 
For every bill: 
● Bill >= ₹5000 → 20% discount 
● Bill >= ₹2000 → 10% discount 
● Otherwise → No discount 
Task: Calculate the amount for each customer. */

/*let total = 0;
for (let i=1; i<=5; i++){
    document.write("Customers",i,"<br>");
    let bill = Number(prompt("Enter your bill"));
    if (bill >= 5000){
        total = bill - (bill * 20/100);
        document.write(total,"<br>");
    }
    else if (bill >= 2000){
        total = bill - (bill * 10 /100);
        document.write(total,"<br>");
    }
    else{
        document.write("No discount","<br>");
    }
}*/

/*5)Bank Withdrawal 
A customer wants to perform 5 withdrawal attempts. 
For each attempt: 
● If withdrawal amount <= balance → Allow withdrawal and update balance. 
● Otherwise → Display "Insufficient Balance". 
Task: Process all 5 attempts.  */

/*let balance = 10000;
for (let i=1; i<=5; i++){
    let withdraw = Number(prompt("Enter withdraw amount"));
    if (withdraw <= balance){
        balance = balance - withdraw;
        console.log("withdraw amount"+withdraw+" "+"Withdraw successfull"+balance);
    }else {
        console.log("withdraw amount"+withdraw+" "+"Insufficient Balance"+balance);
    }
}*/

/*6)Electricity Bill 
Process electricity bills for 5 houses. 
Rules: 
● Units <= 100 → ₹2/unit 
● Units <= 200 → ₹4/unit 
● Units > 200 → ₹6/unit 
Task: Calculate the bill for every house */

/*let bill = 0;
for (let i=1; i<=5; i++){
    console.log("House",i);
    let units = Number(prompt("Enter Units"));
    if (units <= 100){
        bill = units*2;
        console.log(bill);    
    }else if (units <= 200){
        bill = units*4;
        console.log(bill);
    }else if (units > 200){
        bill = units*6;
        console.log(bill);
    }
}*/

/* 
7)Student Result Processing 
A class has 10 students. 
For every student, enter marks. 
Rules: 
90–100 → Grade A 
75–89  → Grade B 
60–74  → Grade C 
40–59  → Grade D 
Below 40 → Fail 
Task: Display the grade of every student */

/*for (let i=1; i<=10; i++){
    document.write("Student",i,"<br>");
    let marks = Number(prompt("Enter Marks:"));
    if (marks >= 90 && marks <= 100){
        document.write("Grade A<br>");
    }
    else if(marks >= 75 && marks <= 89){
        document.write("Grade B<br>");
    }
    else if(marks >= 60 && marks<=74){
        document.write("Grade C<br>");
    }
    else if(marks >= 40 && marks <= 59){
        document.write("Grade D<br>");
    }
    else if(marks < 40){
        document.write("Fail<br>");
    }else if(marks > 100){
        document.write("Enter correct marks")
    }
}*/

/*8)Take the numbers and operations(additon,subtraction,multiplication,division) from the end 
user and do the task according to that. */

/*let op = prompt("Enter operator(+,-,*,/)");
let n1 = Number(prompt("Enter number 1:"));
let n2 = Number(prompt("Enter number 2:"));
let r;
switch(op){
    case '+' :{
        r = n1 + n2;
        document.write(r);
        break;
    }
    case '-' :{
        r = n1 - n2;
        document.write(r);
        break;
    }
    case '*' :{
        r = n1 * n2;
        document.write(r);
        break;
    }    
    case '/' :{
        r = n1 / n2;
        document.write(r);
        break;
    }
}*/

/*9)Movie Ticket Booking  
A cinema wants to process 5 customers. 
1. Regular Ticket - ₹150 
2. Premium Ticket - ₹250 
3. VIP Ticket - ₹400 
For each customer: 
● Enter ticket choice 
● Enter number of tickets 
● Calculate the bill 
Sample Input 
Customer 1 
Choice: 2 
Quantity: 3 
Expected Output 
Customer 1 
Ticket: Premium 
Quantity: 3 
Bill: ₹750 */

/*document.write("1. Regular Ticket - ₹150 <br>");
document.write("2. Premium Ticket - ₹250 <br>");
document.write("3. VIP Ticket - ₹400 <br>");
let bill;
for (let i=1; i<=5; i++){
    document.write("Customer"+i+"<br>");
    let ticket = Number(prompt("Choice:"));
    let quantity = Number(prompt("Quantity:"));
    if (ticket == 1){
        document.write("Ticket: Regular<br>");
        document.write("Quantity:"+quantity+"<br>");
        bill = quantity*150;
        document.write("Bill: "+"₹"+bill+"<br>");
    }
    else if (ticket == 2){
        document.write("Ticket: Premium<br>")
        document.write("Quantity:"+quantity+"<br>");
        bill = quantity*250;
        document.write("Bill: "+"₹"+bill+"<br>");
    }else if (ticket == 3){
        document.write("Ticket: VIP<br>");
        document.write("Quantity:"+quantity+"<br>");
        bill = quantity*400;
        document.write("Bill: "+"₹"+bill+"<br>");
    }
}*/

/*10)Calculate delivery charges based on distance. 
0 - 5 km     → ₹30 
6 - 10 km    → ₹50 
11 - 20 km   → ₹80 
Above 20 km  → ₹120 
Input: 
Distance: 15 km 
Output: 
Delivery Charge: ₹80 */

/*let dist = Number(prompt("Enter Distance (km):"));
if (dist <= 5){
    document.write("Delivery Charge: ₹30");
}
else if(dist <= 10){
    document.write("Delivery Charge: ₹50");
}
else if(dist <= 20){
    document.write("Delivery Charge: ₹80");
}
else if(dist > 20){
    document.write("Delivery Charge: ₹120");
}*/

/*
11)Hotel Room Pricing 
Select the number of days stayed. 
1 - 2 days    → ₹2,000/day 
3 - 5 days    → ₹1,800/day 
6 - 10 days   → ₹1,500/day 
Above 10 days → ₹1,200/day 
Input: 
Days: 7 
Output: 
Room Rate: ₹1500/day  */

/*let days = Number(prompt("Days: "));
if (days >=1 && days <= 2){
    document.write("Days: "+days+"<br>");
    document.write("Room Rate: ₹2000/day");
}
else if(days >=1 && days <= 5){
    document.write("Days: "+days+"<br>");
    document.write("Room Rate: ₹1800/day");
}
else if(days >=1 && days<=10){
    document.write("Days: "+days+"<br>");
    document.write("Room Rate: ₹1500/day");
}else if(days > 10){
    document.write("Days: "+days+"<br>");
    document.write("Room Rate: ₹1200/day");
}*/

/*12)Restaurant Customer Type 
Based on total bill: 
₹5,000 or more → Platinum Customer 
₹3,000 - ₹4,999 → Gold Customer 
₹1,000 - ₹2,999 → Silver Customer 
Below ₹1,000 → Regular Customer 
Display the customer category */

/*let bill = Number(prompt("Enter Your Bill"));
if (bill >= 5000){
    document.write("Platinum Customer");
}
else if(bill >= 3000 && bill <= 4999){
    document.write("Gold Customer");
}else if(bill >= 1000 && bill <= 2999){
    document.write("Silver Customer");
}else if(bill < 1000){
    document.write("Regular Customer");
}*/

/*13)Print  10 Multiples of 5  . */

/*for (let i=1; i<=10; i++){
    document.write("5*"+i+"="+5*i+"<br>");
}*/

/*14)Daily Expenses 
A person wants to record expenses for 7 days. 
Take the expense for each day. 
Input: 
Day 1: 200 
Day 2: 150 
Day 3: 300 
Day 4: 250 
Day 5: 100 
Day 6: 350 
Day 7: 200 
Output: 
Weekly Expense: ₹1550 */

/*let day;
let ex = 0;
for (let i=1; i<=7; i++){
    day = Number(prompt("Day "+i+":"));
    ex = ex + day
}
document.write("Weekly Expenses: "+ex);*/