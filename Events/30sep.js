// let a = document.createElement("h1");
// a.innerText = "Hello";
// let l = document.createElement("p");
// l.innerText= "Enter any name:";
// function input(event){
//     // console.log(event.target);
//     // console.log(event.target.value);
//     // console.log(event.type);
//     a.innerText = event.target.value;
//     l.innerText = "The length of the character is: "+event.target.value.length;
// }
// document.body.appendChild(a);
// document.body.appendChild(l);

// Checking admin
// let a = document.createElement("h1");
// a.innerText = "";
// function input(event){
//     if (event.target.value == "admin"){
//         alert("Hello welcome admin");
//     }else {
//         a.innerText = "Invalid credentials!!";
//     }
// }
// document.body.appendChild(a);
// document.body.appendChild(l);


// //checking first letter is startswith a and length is 6
// let a = document.createElement("h1");
// a.innerText = "";
// function input(event){
//     let i = event.target.value;
//     if (i.startsWith("a") && i.length == 6){
//         alert("Hello welcome admin");
//     }else {
//         a.innerText = "Invalid credentials!!";
//     }
// }
// document.body.appendChild(a);
// document.body.appendChild(l);

// // Click
// let b = document.getElementById("btn");
// b.onclick=()=>{
//     console.log("button clicked");
    
// }

// let b = document.getElementById("btn");
// b.onclick=()=>{
//     alert("Hello welcome");
// }

// let d = document.getElementById("div");
// d.onclick=()=>{
//     d.style.backgroundColor = "violet";
// }

// let b = document.getElementById("btn");

// let b1 = document.getElementById("btn1");

// let d = document.createElement("div");
// d.style.border = "2px solid";
// d.style.height = "100px";
// d.style.width = "100px";
// d.setAttribute("onmouseover","over()");

// b.onclick=()=>{
//     document.body.appendChild(d);
    
// }
// b.ondblclick=()=>{
//     d.style.backgroundColor="violet";
// }
// b1.onclick=()=>{
//     d.remove();
// }

//mouse events
let d = document.createElement("div");
d.style.border = "2px solid";
d.style.height = "400px";
d.style.width = "400px";
d.setAttribute("onmouseover","over()");
d.setAttribute("onmouseout","out()");
d.style.backgroundColor = "violet";

function over(){
    d.style.backgroundColor = "purple";
}
function out(){
    d.style.backgroundColor = "violet";
}

document.body.appendChild(d);