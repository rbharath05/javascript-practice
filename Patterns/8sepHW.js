// for (let i=1; i<=5; i++){
//     for (let j=1; j<=5; j++){
//         let k=i+j;
//         if (k%2==0){
//             document.write('*');
//         }else{
//             document.write('#');
//         }
//     }
//     document.write('<br>');
// }

// let star = 1;
// let space = 4;
// for (let i=1; i<=5; i++){
//     for (let j=1; j<=space; j++){
//         document.write('&nbsp;&nbsp;');
//     }
//     for (let  k=1; k<=star; k++){       
//         document.write('*');
//         }
//     star+=2;
//     space--;
//     document.write('<br>');
// }

// let star = 1;
// let space = 4;
// for (let i=1; i<=9; i++){
//     for (let j=1; j<=space; j++){
//         document.write('&nbsp;&nbsp;');
//     }
//     for (let k=1; k<=star; k++){
//         document.write('*');
//     }
//     if (i<5){
//         star+=2;
//         space--;
//     }else{
//         star-=2;
//         space++;
//     }
//     document.write('<br>');
// }

// let star = 9;
// let space = 0;
// for (let i=1; i<=9; i++){
//     for (let k=1; k<=space; k++){
//         document.write('&nbsp;&nbsp;');
//     }
//     for (let j=1; j<=star; j++){
//         document.write('*');
//     }
//     if (i<5){
//         star-=2;
//         space++;
//     }else {
//         star+=2;
//         space--;
//     }
//     document.write('<br>');
// }

// let star=1;
// for(let i=1; i<=9; i++){
//     for(let j=1; j<=star; j++){
//         document.write('*')
//     }
//     if(i<5){
//         star++;
//     }else{
//         star--;
//     }
//     document.write('<br>');
// }

// let star = 1;
// let space = 4;
// for (let i=1; i<=9; i++){
//     for (let j=1; j<=space; j++){
//         document.write('&nbsp;&nbsp;');
//     }
//     for (let k=1; k<=star; k++){
//         document.write('*');
//     }
//     if(i<5){
//         star++;
//         space--;
//     }else {
//         star--;
//         space++;
//     }
//     document.write('<br>');
// }

// //Numbers patterns
// let num = 5;
// for (let i=1;i<=5;i++){
//     let n = 5;
//     for (let k=1;k<=num;k++){
//         document.write(n--);
//     }
//     num --;
//     document.write("<br>");
// }


// let space = 4;
// let num = 1;
// for (let i=1; i<=5; i++){
//     let n=1;
//     for(let j=1; j<=space; j++){
//         document.write('&nbsp;&nbsp;');
//     }
//     for (let k=1; k<=num; k++){
//         document.write(i);
//     }
//     num+=2;
//     space--;
//     document.write('<br>');
// }

// let ch = 65;
// for (let i=1; i<=5; i++){
//     for (let j=1;j<=i; j++){
//         document.write(String.fromCharCode(ch));
//     }
//     document.write('<br>');
//     ch++;
// }

// for (let i=1; i<=5; i++){
//     let ch = 65;
//     for (let j=1;j<=i; j++){
//         document.write(String.fromCharCode(ch++));
//     }
//     document.write('<br>');
// }

// let ch = 65;
// for (let i=1; i<=5; i++){

//     for (let j=1;j<=i; j++){
//         document.write(String.fromCharCode(ch++));
//     }
//     document.write('<br>');
// }

// for (let i=1; i<=5; i++){
//     let ch = 65;
//     for (let j=1;j<=5; j++){
//         document.write(String.fromCharCode(ch++));
//     }
//     document.write('<br>');
// }

// for (let i = 0; i < 5; i++) {
//     let row = "";
//     for (let j = 0; j < 5; j++) {
//         row += String.fromCharCode(65 + i + j);
//     }
//     console.log(row);
// }

// for (let i = 1; i < 5; i++) {
//     let row = "";
//     for (let s = 1; s < 4 - i; s++) {
//         row += " ";
//     }
//     for (let j = 1; j < 2 * i + 1; j++) {
//         row += String.fromCharCode(65 + j);
//     }
//     console.log(row);
// }

// for (let i = 0; i <= 5; i++) {
//     let row = "A";
//     for (let j = 1; j <= i; j++) {
//         row += j;
//     }
//     console.log(row);
// }