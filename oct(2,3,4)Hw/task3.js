let div = document.createElement("div");
div.style.border="2px solid";
div.style.height = "500px";
div.style.width = "300px";

let img = document.createElement("img");
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjU4g2I4CDzAPWD0ceK-ZWppKt2H_Z9g6WweXZJILrwA&s=10";
img.style.height = "500px";
img.style.width = "300px";
console.log(img);


let like = document.createElement("button");
like.innerText="like";
like.style.backgroundColor = "red";
// like.setAttribute("onclick","lc");
console.log(like);


img.onmouseover = ()=>{
    img.appendChild(like);
}
img.onmouseout = () =>{
    like.remove();
}


like.onclick = ()=>{
    
}

document.body.appendChild(div);
div.appendChild(img);