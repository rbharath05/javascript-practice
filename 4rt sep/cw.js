//Decoding & programs

/*let n1 = Number(prompt("Enter range:"));
let n2 = Number(prompt("Enter end point"));
//let c;
let c = 0;
for (let i=n1; i<=n2; i++){
    if (i%2==0){
        c++;
        //console.log(c);
    }
}
console.log(c);*/

//factorial
/*let num = Number(prompt("Enter any number"));
let result = 1;
for (let i=1; i<=num; i++){
    result = result*i;  
}
document.write(result);*/

//max number in a digit
let num = Number(prompt("Enter any number"));
let m1;
let m2;
while (n != 0){
    let r = n%10;
    if (m1>m2){
        console.log(m1);
    }else{
        console.log(m2);
    }
    num = Math.floor(num/10);
}