/*let a =10;
function greet(){
    let a = 20;
    console.log("inner",a);
    
}
greet();
console.log("outer",a);*/

/*{
    var a = 20;
    console.log("Inner",a);
}
console.log("Outer",a);*/

//Lexical scope
/*function outer(){
    let a = 10;
    function inner(){
        console.log("Inner",a);
    }
    inner();
}
outer();*/

//closure
/*function outer(){
    let a = 10;
    function inner(){
        console.log(a);
        console.log("Iam inner function");
    }
    return inner;
}
let r = outer();
r();*/

