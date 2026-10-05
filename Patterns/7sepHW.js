

/*  * ^ * ^ *
    * ^ * ^ *
    * ^ * ^ *
    * ^ * ^ *
    * ^ * ^ *
for (let i=1; i<=4; i++){
    for (let j=1; j<=5; j++){
        if(j%2!=0){
            document.write('*');
        }else if(j%2==0){
            document.write('^');
        }
    }
    document.write('<br>');
}*/

/*  *   *   *   *   *
    *   *   *   *   *
    *   *   -   *   *
    *   *   *   *   *
    *   *   *   *   *
for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==3 && j==3){
            document.write('-'); 
        }else{
            document.write('*');
        }
    }
    document.write('<br>');
}*/

/*  * * * * *
    * 0 0 0 *
    * 0 0 0 *
    * * * * *
for (let i=1; i<=4; i++){
    for (let j=1; j<=5; j++){
        if (i==1 || j==1 || i==4 || j==5){
            document.write('1 ');
        }
        else{
            document.write('0 ');
        }
    }
    document.write('<br>');
}*/

//A 5x4
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=4; j++){
        if (i==1 || j==1 || i==3 || j==4){
            document.write('* ');
        }else{
            document.write('&nbsp;&nbsp;&nbsp;');
        }
    }
    document.write('<br>')
}*/

//C 5x5
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==1 || j==1 || i==5){
            document.write('* ');
        }
    }
    document.write('<br>')
}*/

//O 
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==1 || j==1 || i==5 || j==5){
            document.write('* ');
        }else {
            document.write('&nbsp;&nbsp;&nbsp;')
        }
    }
    document.write('<br>')
}*/

//E
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==1 || j==1 || i==3 || i==5){
            document.write('* ');
        }
    }
    document.write('<br>');
}*/

//F
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==1 || j==1 || i==3){
            document.write('* ');
        }
    }
    document.write('<br>');
}*/

//I
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==1 || j==3 || i==5){
            document.write('* ');
        }
        else{
            document.write('&nbsp;&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}*/

//L
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (j==1 || i==5){
            document.write('* ');
        }
    }
    document.write('<br>');
}*/

//U 
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (j==1 || i==5 || j==5){
            document.write('* ');
        }else{
            document.write('&nbsp;&nbsp;&nbsp;')
        }
    }
    document.write('<br>');
}*/

//S
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==1 || i==3 || i==5 || i==2 && j==1 || i==4 && j==5){
            document.write('* ');
        }
        //else if(i==2 && j==1 || i==4 && j==5){
            //document.write('* ');
        //}
        else{
            document.write('&nbsp;&nbsp;&nbsp;')
        }
    }
    document.write('<br>');
}*/

// "\"
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==1 && j==1 || i==2 && j==2 || i==3 && j==3 || i==4 && j==4 || i==5 && j==5){
            document.write('* ');
        }
        else{
            document.write('&nbsp;&nbsp&nbsp;');
        }
    }
    document.write('<br>');
}*/

// "/"
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
//we can simply write if (i+j==6)
        if (i==1 && j==5 || i==2 && j==4 || i==3 && j==3 || i==4 && j==2 || i==5 && j==1){
            document.write('* ');
        }else{
            document.write('&nbsp;&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}*/

// X
/*for (let i=1; i<=5; i++){
    for (let j=1; j<=5; j++){
        if (i==j || i+j==6){
            document.write('* ');
        }else{
            document.write('&nbsp;&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}*/

// Z
/*for (let i=1; i<=5; i++){
    for (let j=1;j<=5; j++){
        if (i==1 || i==5 || i+j==6){
            document.write('* ')
        }else{
            document.write('&nbsp;&nbsp;&nbsp');
        }
    }
    document.write('<br>');
}*/