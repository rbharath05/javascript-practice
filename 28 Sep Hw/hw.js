// //Card 

// let d = document.createElement("div");
// d.style.height="550px";
// d.style.width="400px";
// d.style.backgroundColor="violet";
// d.style.borderRadius = "20px";
// d.style.marginLeft = "550px";
// d.style.marginTop = "100px";
// console.log(d);

// let i = document.createElement("img");
// i.src="https://tse1.mm.bing.net/th/id/OIP.8oFWLCxL0VKupQ7BhmjINQHaHa?r=0&pid=Api&h=220&P=0";
// i.style.height = "200px";
// i.style.width = "200px";
// i.style.marginTop = "45px";
// i.style.marginLeft = "100px";
// console.log(i);

// let h =document.createElement("h1");
// h.innerText = "STARBOY"
// h.style.fontSize = "30px";
// h.style.marginTop = "20px";
// h.style.marginLeft = "140px";
// h.style.marginRight = "140px";
// h.style.color = "yellow";

// let hr =document.createElement("h2");
// hr.innerText = "The Weekend"
// hr.style.fontSize = "20px";
// // hr.style.marginTop = "10px";
// hr.style.marginLeft = "145px";
// hr.style.marginRight = "100px";
// hr.style.color = "red";

// let p = document.createElement("p");
// p.innerText="“Starboy” by The Weeknd is a dark, stylish, and confident song about fame, success, wealth, and the transformation that comes with becoming a superstar. The song has a futuristic, atmospheric sound produced by Daft Punk, with The Weeknd reflecting on his new lifestyle while showing a bold and mysterious attitude.";
// p.style.color = "white";
// p.style.marginLeft="30px";
// p.style.marginRight="30px";
// p.style.marginTop="30px";

// document.body.style.backgroundColor="purple";
// d.appendChild(i);
// d.appendChild(h);
// d.appendChild(hr);
// d.appendChild(p);
// // i.after(hr);
// // i.remove();
// // i.before(hr);
// document.body.appendChild(d);


// //Count( + 0 - )

// let bt1 = document.createElement("button");
// bt1.innerText = "+";
// bt1.style.border = "2px solid";
// bt1.style.width = "50px";
// bt1.style.borderRadius = "4px";
// bt1.onclick = inc;
// console.log(bt1);

// let h = document.createElement("h1");
// h.innerText = "0";
// let count = 0;
// function inc(){
//     count++;
//     h.innerText = count;
// }

// function dec(){
//     count--;
//     h.innerText = count;
// }


// let bt2 = document.createElement("button");
// bt2.innerText = "-";
// bt2.style.border = "2px solid";
// bt2.style.width = "50px";
// bt2.style.borderRadius = "4px";
// bt2.onclick = dec;
// // bt2.style.marginLeft = "50px";

// document.body.appendChild(bt1);
// document.body.appendChild(h);
// document.body.appendChild(bt2);


// //Stop Watch

// let h = document.createElement("h1");
// h.innerText="00:00:00";
// h.style.marginLeft = "90px";

// let st = document.createElement("button");
// st.innerText = "Start";
// st.style.border = "2px solid";
// st.style.width = "70px";
// st.onclick = starts;

// let sp = document.createElement("button");
// sp.innerText="Stop";
// sp.style.border = "2px solid";
// sp.style.width = "70px";
// sp.style.marginLeft = "20px";
// sp.onclick = stops;

// let r = document.createElement("button");
// r.innerText="Reset";
// r.style.border = "2px solid";
// r.style.width = "70px";
// r.style.marginLeft = "20px";
// r.onclick = reset;

// let count = 0;
// let a;
// function starts(){
//     a = setInterval(() => {
//             count++;
//             h.innerText = count;
//         }, 10);
// }

// function stops(){
//     clearInterval(a);
// }

// function reset(){
//     clearInterval(a);
//     h.innerText = 0;
// }

// document.body.appendChild(h);
// document.body.appendChild(st);
// document.body.append(sp);
// document.body.append(r);


// //append, prepend, after, before, remove()

// let h1 = document.getElementById("one");
// let h2 = document.getElementById("two");
// let h3 = document.getElementById("three");

// h2.after(h3);