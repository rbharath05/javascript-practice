//1. Find the first number greater than 50
/*let a = [10, 25, 60, 45, 80, 30];
let r = a.find(x=>x>50);
console.log(r);*/

//2.Check whether the array contains at least one negative number 
/*let a = [10, 20, -5, 30, 40];
let r = a.some(x=>x<0);
console.log(r);*/

//3.Check whether all students passed Passing mark = 40 
/*let a = [65, 72, 45, 80, 55];
let r = a.every(x=>x>40);
console.log(r);*/

//4.Find the first transaction amount greater than ₹10,000 
/*let a =  [2500, 5000, 8500, 15000, 20000];
let r = a.find(x=>x>15000);
console.log(r);*/

//5.Add ₹500 bonus to every salary 
/*let a = [25000, 30000, 35000, 40000];
let r = a.map(x=>x+500);
console.log(r);*/

//6.Convert all names to uppercase 
/*let a =  ["ravi", "anil", "kiran", "raj"];
let r = a.map(x=>x.toUpperCase());
console.log(r);*/

//7.Filter names having more than 5 characters 
/*let a =  ["Ravi", "Kiran", "Prakash", "Anil", "Suresh"];
let r = a.filter(x=>x.length>5);
console.log(r);*/

//8.Calculate the total marks 
/*let a = [75, 80, 65, 90, 85];
let r = a.reduce((sum,x)=>sum+x,0);
console.log(r);*/

//9.Check whether all numbers are even 
/*let a =  [10, 20, 30, 40] ;
let r = a.every(x=>x%2==0);
console.log(r);*/

//10. Convert marks into grades 
/*let a =  [95, 82, 72, 65, 45] ;
let r = a.map(x=>{
    if (x>=90){
        return "A+";
    }else if(x>=80){
        return "A";
    }else if(x>=70){
        return "B";
    }else if(x>=60){
        return "C";
    }else if(x>=40){
        return "D"
    }
    });
console.log(r);*/

//1. Find the Largest Element in an Array
let a = [10, 45, 23, 67, 12];
let r = 