/*let a = [23,24,25,26];
a.splice(1, 2, 1, 2, 3);
console.log(a);

let arr = ["john",2,4,"madhu",0];
arr.splice(1, 3, 1);
console.log(arr);

let arr1 = ["john",2,4,"madhu",0];
arr1.splice(0, 3, "karan")
console.log(arr1);

let salaries = [2000,4000,1000,500,3000];
let newsal = [];
let sum=2000;
for(let i=0;i<salaries.length;i++){
    newsal.push(sum+salaries[i]);

}
console.log(newsal);*/

//Using for loop
/*let n = [21,43,55,32,8,10];
let n1 = [];
let n2 = [];
let s = 5;
for (let i=0; i<n.length; i++){
    n1.push(s+n[i]);
    if(n[i]>30){
        n2.push(n[i]);
    }
}
console.log(n1);
console.log(n2);*/

//Using map() and filter()
/*let num = [1,2,3,4,5];
let n = num.map(x=>x*2);
console.log(n);
let n1 = num.filter(s=>s%2==0);
console.log(n1);
let n2 = num.map(x=>x*x);
console.log(n2);
let n3 = num.filter(s=>s%3==0);
console.log(n3);*/

/*let arr = ["madhu","kiran","ravi","hari"];
let arr1 = arr.filter(x=>x.length==5);
console.log(arr1);
let arr2 = arr.map(x=>x.toUpperCase());
console.log(arr2);
let arr3 = arr.map(x=>x[0].toUpperCase()+x.slice(1));
console.log(arr3);
*/

/*let n = [1,2,3,4,5];
let s = 0
for (let i=0; i<n.length; i++){
    s = s+n[i];
}
console.log(s);*/

//using reduce() sum of numbers
/*let n = [1,2,3,4,5];
let r = n.reduce((s,x)=>s+x,0);
console.log(r);*/

//Using reduce() Product of numbers method
/*let n = [1,2,3,4,5];
let r = n.reduce((pro,x)=>pro*x,1);
console.log(r);*/

