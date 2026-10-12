let a = [10, 20, 30, 40];
let b = [20, 40, 50, 60];
let c = [];
for (let i=0; i<a.length; i++){
    for (let j=0; j<=b.length; j++){
        if (i==j){
            c = c.push();
        }
    }
}
console.log(c);