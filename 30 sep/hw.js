// function co(event){
//     document.body.style.backgroundColor = event.target.value; 
// }



// let b = document.createElement("button");
// b.innerText = "show";
// b.setAttribute("onclick","fun()");
// console.log(b);

// let d = document.createElement("div");
// d.style.height = "200px";
// d.style.width = "200px";
// d.style.backgroundColor = "violet";

// function fun(){
//     if(b.innerText == "show"){
//         document.body.appendChild(d);
//         b.innerText = "hide";
//     }else if(b.innerText == "hide"){
//         d.remove();
//         b.innerText = "show";
//     }
// }
// document.body.appendChild(b);




// //Shows images using mouse events
// let d = document.createElement("div");
// d.style.height = "300px";
// d.style.width = "300px";
// d.style.border = "2px solid";

// let d1 = document.createElement("div");
// d1.style.height = "300px";
// d1.style.width = "300px";
// d1.style.border = "2px solid";

// let d2 = document.createElement("div");
// d2.style.height = "300px";
// d2.style.width = "300px";
// d2.style.border = "2px solid";

// let d3 = document.createElement("div");
// d3.style.height = "300px";
// d3.style.width = "300px";
// d3.style.border = "2px solid";

// let i1 = document.createElement("img");
// i1.style.height = "300px";
// i1.style.width = "300px";
// let i2 = document.createElement("img");
// i2.style.height = "300px";
// i2.style.width = "300px";
// let i3 = document.createElement("img");
// i3.style.height = "300px";
// i3.style.width = "300px";
// let i4 = document.createElement("img");
// i4.style.height = "300px";
// i4.style.width = "300px";

// d.onmouseover = () =>{
//     i1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHqSGTPhWOgBYdS82EHFO9yP5e_vkHBGWGNY-sAJLtg&s=10";
//     d.appendChild(i1);
// }
// d.onmouseout = ()=>{
//     i1.remove();
// }

// d1.onmouseover = () =>{
//     i2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwTdSrcfpMwMhU6l0YDc-FBAE5V2ICAaf9riF1aDFzQ&s=10";
//     d1.appendChild(i2);
// }
// d1.onmouseout = ()=>{
//     i2.remove();
// }

// d2.onmouseover = () =>{
//     i3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_2CZBLpqFq7TwZie7H_4fxUxCi_ci3lPVCe2u3kW6w&s=10";
//     d2.appendChild(i3);
// }
// d2.onmouseout = ()=>{
//     i3.remove();
// }

// d3.onmouseover = () =>{
//     i4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhQnPPf1vNY6Qo5k_iQs9ZYxF3sfZqU6jYNBVvjt51A&s=10";
//     d3.appendChild(i4);
// }
// d3.onmouseout = ()=>{
//     i4.remove();
// }


// document.body.appendChild(d);
// document.body.appendChild(d1);
// document.body.appendChild(d2);
// document.body.appendChild(d3);
// //document.body.append(d,d1,d2,d3);
// document.body.style.display = "flex";
// document.body.style.justifyContent = "space-between";


// //All click events in single function
// let d1 = document.createElement("div");
// d1.style.height = "200px";
// d1.style.width = "200px";
// d1.style.border = "2px solid";
// d1.style.backgroundColor = "violet";
// d1.setAttribute("onclick","clicks(d1)");
// //when we clicking we need to pass that particular element or tag in parameters

// let d2 = document.createElement("div");
// d2.style.height = "200px";
// d2.style.width = "200px";
// d2.style.border = "2px solid";
// d2.style.backgroundColor = "skyblue";
// d2.setAttribute("onclick","clicks(d2)");

// let d3 = document.createElement("div");
// d3.style.height = "200px";
// d3.style.width = "200px";
// d3.style.border = "2px solid";
// d3.style.backgroundColor = "yellow";
// d3.setAttribute("onclick","clicks(d3)");

// function clicks(a){
//     document.body.style.backgroundColor = a.style.backgroundColor;
// }

// document.body.append(d1,d2,d3);


// //dropdown list
// let s = document.createElement("select");
// s.innerText = "Anime";

// let o1 = document.createElement("option");
// o1.innerText = "Solo leveling";
// console.log(o1);

// let o2 = document.createElement("option");
// o2.innerText = "Demon slayer";

// let o3 = document.createElement("option");
// o3.innerText = "One punch Man";

// let o4 = document.createElement("option");
// o4.innerText = "Jujutsu kaisen";

// let h = document.createElement("h1");
// console.log(h);

// s.onchange = (event)=>{
//     h.innerText = event.target.value;
// }

// // s.onchange = () =>{
// //     console.log(s.value);
// // }

// document.body.appendChild(s);
// document.body.appendChild(h);
// s.appendChild(o1);
// s.appendChild(o2);
// s.appendChild(o3);
// s.appendChild(o4);