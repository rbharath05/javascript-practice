/*for (let i=1; i<=3; i++){
    for (let j=1; j<=3; j++){
        document.write('$');
    }
    document.write('<br>');
}*/


/*let star = 5;
for (let i=1; i<=5; i++){
    for (let j=1; j<=star; j++){
        document.write('* ');
    }
    star--;
    document.write('<br>');
}*/

/*let star = 1;
let space = 4;
for (let i=1; i<=5; i++){
    for (let j=1; j<=space; j++){
        document.write("&nbsp;&nbsp;&nbsp;");
    }
    for (let k=1; k<=star; k++){
        document.write('* ');
    }
    space--;
    star++;
    document.write('<br>');
}*/

/*let star = 5;
let space = 0;
for (let i=1; i<=5; i++){
    for (let k=1; k<=space; k++){
        document.write("&nbsp;&nbsp;");
    }
    for(let j=1; j<=star; j++){
        document.write('*');
    }
    space++;
    star--;
    document.write('<br>');
}*/

/*let num = 1;
for (let i=1; i<=4; i++){
    for (let j=1; j<=i; j++){
        document.write(num);
        num = num*2;
    }   
    document.write('<br>');
}*/

let pas = prompt("Enter your password");
let uc = false;
let lc = false;
let n = false;
for (let i=0; i<=pas.length; i++){
    let ch = pas[i];
    if (ch>='A' && ch<='Z'){
        uc=true;
    }
    if (ch>='a' && ch<='z'){
        lc = true;
    }
    if (ch>='0' && ch<='9'){
        n = true;
    }
}
if (pas.length>=8 && uc && lc && n){
    document.write("Strong Password");
}else {
    document.write("Weak password");
}