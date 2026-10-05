// let d = document.createElement("div");
// d.style.alignItems = "center";
// d.style.marginTop="150px";

// d.style.height="400px";
// d.style.width = "400px";
// d.style.borderRadius = "10px";
// d.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
// d.style.textAlign = "center";

// let h = document.createElement("h3");
// h.innerText= "✨ GOOD VIBES ✨";
// h.style.color = "offwhite";

// let p1 = document.createElement("p");
// p1.innerText = "Believe in yourself.";
// p1.style.color = "white";

// let p2 = document.createElement("p");
// p2.innerText = "Small steps every day create big changes.";
// p2.style.color = "white";

// let p3 = document.createElement("p");
// p3.innerText = "♡ Keep going ♡";
// p3.style.color = "white";

// function load(){
//     let colour = ["pink","violet","blue","yellow"];
//     let index = Math.floor(Math.random() * colour.length);
//     d.style.backgroundColor = colour[index];
// }

// document.body.style.backgroundColor = "skyblue";
// document.body.style.display = "flex";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";

// d.appendChild(h);
// d.appendChild(p1);
// d.appendChild(p2);
// d.appendChild(p3);
// document.body.appendChild(d);





let d = document.createElement("div");
d.style.height="550px";
d.style.width="400px";
d.style.backgroundColor="violet";
d.style.borderRadius = "20px";
d.style.marginLeft = "550px";
d.style.marginTop = "100px";
console.log(d);



let i = document.createElement("img");
i.src="https://tse1.mm.bing.net/th/id/OIP.8oFWLCxL0VKupQ7BhmjINQHaHa?r=0&pid=Api&h=220&P=0";
i.style.height = "200px";
i.style.width = "200px";
i.style.marginTop = "45px";
i.style.marginLeft = "100px";
console.log(i);

let h =document.createElement("h1");
h.style.fontSize = "20px";
h.style.marginTop = "20px";
h.style.marginLeft = "140px";
h.style.marginRight = "140px";
h.style.color = "yellow";

let hr =document.createElement("h2");
hr.innerText = "The Weeknd"
hr.style.fontSize = "20px";
hr.style.marginLeft = "140px";
hr.style.marginRight = "100px";
hr.style.color = "red";

let m1 = document.createElement("audio");
m1.src="music/starboy.mp3";
m1.controls = true;
m1.style.marginLeft = "50px";
console.log(m1);


let m2 = document.createElement("audio");
m2.src="music/afterhours.mp3";
m2.controls = true;
m2.style.marginLeft = "50px";


let m3 = document.createElement("audio");
m3.src="music/blindingbylights.mp3";
m3.controls = true;
m3.style.marginLeft = "50px";


let m4 = document.createElement("audio");
m4.src="music/thehills.mp3";
m4.controls = true;
m4.style.marginLeft = "50px";


let m5 = document.createElement("audio");
m5.src="music/timeless.mp3";
m5.controls = true;
m5.style.marginLeft = "50px";


function load(){
    let song = [m1,m2,m3,m4,m5];
        let songNames = [
        "STARBOY",
        "AFTER HOURS",
        "BLINDING LIGHTS",
        "THE HILLS",
        "TIMELESS"
    ];
    let index = Math.floor(Math.random()*song.length);
    h.innerText = songNames[index];
    song[index].play();
    d.appendChild(song[index]);
}

document.body.style.backgroundColor="purple";
d.appendChild(i);
d.appendChild(h);
d.appendChild(hr);
document.body.appendChild(d);



// let a = prompt("Enter theame color");
// function load(){
//     if (a == "dark"){
//         document.body.style.backgroundColor="black";
//     }else if(a == "light"){
//         document.body.style.backgroundColor="white";
//     }else {
//         alert("You Entered wrong theame!!");
//     }
// }