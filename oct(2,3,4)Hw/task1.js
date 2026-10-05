let fl = document.createElement("button");
fl.innerText = "Flowers🌸";
fl.style.backgroundColor = "pink";
fl.style.borderRadius = "4px";
fl.style.marginTop = "150px";

let mob = document.createElement("button");
mob.innerText = "Mobiles📱";
mob.style.backgroundColor = "skyblue";
mob.style.borderRadius = "4px";
mob.style.marginLeft = "10px";
mob.style.marginTop = "150px";

let act = document.createElement("button");
act.innerText = "Actors🎭";
act.style.backgroundColor = "violet";
act.style.borderRadius = "4px";
act.style.marginLeft = "10px";
act.style.marginTop = "150px";




let flowers = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfq2MbULDRnxhzOInPua9OaxOyt9uLDtLbnS1yTC_YUg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzi2M1HskOGJXW_cOAxXtk1ptHs1yGmpDXeslqZWMxMA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetzYzuIk10tx2RSMeFrcGbHshyBROeQXoHTS5qZFy7Q&s=10"
];

let mobiles = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTscmvL5dE6U8tStxTKSRsMtKpTtLNiuX9VsoABK1LlQw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiuiOoGN_ZdSUEltzzYbuxb4DAI4_EHZhBUyRZ1CJLxQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJgTYsqjHwMKPWzFXsr2oWX0sj3t7EchxTVbiEXoxyQ&s=10"
];

let actors = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHsWzFRikgOA8_zDWkNoLjHwFsC9X6wI_2aqAzjEDxCA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4tRElkY5gG_BpvpVg3pL1R7gBiZENRUL3ubgosBVxg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kBpJ4QDDIwhmGlUJFSBP6Y_m6lcblKbp9lopnR6gew&s=10"
];

fl.onclick=()=>{
    for(let i=0; i<= flowers.length-1; i++){
        let flower = document.createElement("img");
        flower.src = flowers[i];
        flower.style.height = "100px";
        flower.style.width = "100px";
        document.body.appendChild(flower);
        document.createElement("br");
    }
}

mob.onclick=()=>{
    for(let i=0; i<= mobiles.length-1; i++){
        let mobile = document.createElement("img");
        mobile.src = mobiles[i];
        mobile.style.height = "100px";
        mobile.style.width = "100px";
        document.body.appendChild(mobile);
        document.createElement("br");
    }
}

act.onclick=()=>{
    for(let i=0; i<= actors.length-1; i++){
        let actor = document.createElement("img");
        actor.src = actors[i];
        actor.style.height = "100px";
        actor.style.width = "100px";
        document.body.appendChild(actor);
        document.createElement("br");
    }
}

document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";
// document.body.style.display = "flex";
document.body.appendChild(fl);
document.body.appendChild(mob);
document.body.appendChild(act);