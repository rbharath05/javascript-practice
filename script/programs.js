//Second largest number

// let a = [10,20,30,40,50];
// let largest = 0;
// let slargest = 0;
// for(let i=0; i<=a.length; i++){
//     if(a[i]>largest){
//         slargest = largest;
//         largest = a[i];
//     }else if(a[i]>slargest && a[i]!=largest) {
//         slargest = arr[i];
//     }
// }
// console.log(slargest);


//Frequency of element

// let str = "programming";
// let f = {};
// for(let i=0; i<=str.length; i++){
//     let ch = str[i];
//     if(f[ch]){
//         f[ch]++;
//     }else{
//         f[ch]=1;
//     }
// }
// console.log(f);

// let n = "hello" , a="";
// for(let i=0; i<=n.length; i++){
//     if(!a.includes(n[i])){
//         a = a+n[i];
//     }
// }
// for(let i=0; i<=a.length; i++){
//     let c = 0;
//     for(let j=0; j<=n.length; j++){
//         if(a[i]==n[j]){
//             c++;
//         }
//     }
//     console.log(a[i] ,"-", c);
// }


//Duplicate values in the array

// let a = [10,20,10,30,40,50];
// let dup = [];
// let k = 0;
// for(let i=0; i<=a.length; i++){
//     for(let j=i+1; j<=a.length; j++){
//         if (a[i]==a[j] && !dup.includes(a[i])){
//             dup[k] = a[i];
//             k++;
//         }
//     }
// }
// console.log(dup);

let students = [
    { name: "Bharath", marks: 85 },
    { name: "Rahul", marks: 32 },
    { name: "Anil", marks: 72 },
    { name: "Kiran", marks: 45 },
    { name: "Ravi", marks: 28 }
];
// console.log(students[1].marks);
let largest = 0;
for(let i=0; i<students.length; i++){
    if(students[i].marks > largest){
        largest = students[i].marks;
    }
}
for(let i=0; i<students.length; i++){
    if(students[i].marks==largest){
        console.log(students[i].name);
    }
}
console.log(largest);   
if(largest>40){
    console.log("pass");
}
