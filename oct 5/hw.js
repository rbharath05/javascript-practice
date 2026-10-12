let nav = document.createElement("div");
nav.style.height = "80px";
nav.style.backgroundColor = "violet";

let logo = document.createElement("img");
logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPSEfWjwvRWdprXqfz96eNv6gZ5V-sucTWXYqLu7j8g&s=10";
logo.style.height = "60px";
logo.style.width = "60px";
logo.style.marginTop = "10px";
logo.style.marginLeft = "10px";

let cbtn = document.createElement("button");
cbtn.innerText = "cart";
cbtn.style.marginLeft="600px";

let images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYh-z77h7C3OzvXCHqhd1aJOqf5ISPM5GBNc-dc8s4iw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ISuOKTPtwOkhNKvbYztOO4HS12y5NnBUOx71E0Uo2Q&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPG8VFgzU6c6O70z3EFgD8FTBya6ziOqkx94q56jLFg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4AovoXfTY_qORzg3n442FKdyu_3gWgowJzOtYJqDGA&s=10"
]

for (let i=0; i<=images.length-1; i++){
    
}

let mob1 = document.createElement("img");
mob1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ISuOKTPtwOkhNKvbYztOO4HS12y5NnBUOx71E0Uo2Q&s=10";
mob1.style.height = "200px";
mob1.style.width = "200px";
mob1.style.marginTop = "50px";


let addtc = document.createElement("button");
addtc.innerText = "Add to cart";

addtc.onclick=()=>{
    
}

document.body.style.backgroundColor = "purple";
document.body.appendChild(nav);
document.body.appendChild(mob1);
document.body.appendChild(addtc);
addtc.after(mob1);
// document.body.appendChild(addtc);
nav.appendChild(logo);
nav.appendChild(cbtn);