// *
// **
// ***
// ****
// *****

// // let stars = 1;
// for (let i=1; i<=5; i++){
//     for (let j=1; j<=i; j++){
//         document.write("*");
//     }
//     // stars++;
//     document.write("<br>");
// }


// *****
// ****
// ***
// **
// *

// for (let i=1; i<=5; i++){
//     for (let j=5; j>=i; j--){
//         document.write("*");
//     }
//     document.write("<br>");
// }


//     *
//    **
//   ***
//  ****
// *****

// for (let i=1; i<=5; i++){
//     for (let j=4; j>=i; j--){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(let k=1; k<=i; k++){
//         document.write("*");
//     }
//     document.write("<br>");
// }


// for (let i=1; i<=5; i++){
//     for (let j=4; j>=i; j--){
//         document.write("&nbsp;&nbsp;");
//     }
//     for(let k=1; k<=)
// }


for (let i=1; i<=5; i++){
    let k = 1;
    for(let j=1; j<=i; j++){
        if(i%2==1){
            if(j%2==1){
                document.write(k);  
            }else{
                document.write(String.fromCharCode(64+k));
                k++;
            }
        }else{
            if(j%2==1){
                document.write(String.fromCharCode(64+k));
                k++;
            }else{
                document.write(k);
            }
        }
    }
    document.write("<br>");
}