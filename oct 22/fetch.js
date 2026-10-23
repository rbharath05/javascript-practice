////Using promises to fetch data
// let id = Number(prompt("Enter any post"));
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data.title);
//         console.log(data.body);
//         console.log(data.userId);
//     })


// //Using async and await concept
// async function posts(){
//     try{
//         let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let data = await res.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// posts();



////Images fetching
// let h = document.querySelector("h1");
// let btn = document.querySelector("button");
// let div = document.createElement("div");
// let img = document.createElement("img");

// btn.onclick=()=>{
//     let pic = document.getElementById("in");
//     fetch(`https://jsonplaceholder.typicode.com/photos/${pic.value}`)
//         .then(res=>res.json())
//         .then(data=>{
//             div.style.width="500px";
//             div.style.height="500px";
//             div.style.border = "2px solid";

//             img.style.width = "490px";
//             img.style.height = "490px";
//             img.src = data.url;
//             div.appendChild(img);
//             document.body.appendChild(div);
//         })
// }


////Movies Fetching
let h = document.querySelector("h1");
let h3 = document.getElementById("h3");
let btn = document.querySelector("button");
let div = document.createElement("div");
div.style.width="500px";
div.style.height="500px";
div.style.border = "2px solid";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

let img = document.createElement("img");
img.style.width = "490px";
img.style.height = "490px";


async function call(){
    div.innerHTML = "";
    h3.innerText = "";
    try{
        let movie = document.getElementById("in").value;
        // let movie = prompt("Enter movie name");
        let m = await fetch(`https://raw.githubusercontent.com/samyak2403/daily-movies-api/main/movies/telugu/telugu.json`);
        let data = await m.json();
        for(let item of data.movies){
            if(item.title.toLowerCase().includes(movie.toLowerCase())){
                img.src = item.thumbnail;

                h3.innerText = item.title;
                div.appendChild(img);
                document.body.appendChild(div);
                return;
            }
        }

        h3.innerText = "Movie not found!!!";
    }
    catch(error){
        console.log(error);
    }
}
btn.onclick=()=>{
    call();
}