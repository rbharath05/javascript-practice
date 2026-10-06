class Movie{
    constructor(movietitle,actorname,actressname,directorname,releasedate,genre,budget,productionhouse,producers,locations,setworker,stuntman,decoration,fashion){
        this.movietitle=movietitle,
        this.actorname=actorname,
        this.actressname=actressname,
        this.directorname=directorname,
        this.releasedate=releasedate,
        this.genre=genre,
        this.budget=budget,
        this.productionhouse=productionhouse,
        this.producers=producers,
        this.locations=locations,
        this.team={
            setworker:setworker,
            stuntman:stuntman,
            decoration:decoration,
            fashion:fashion
        }
    }
        // reviews(){
        //     console.log("Reviews: Epic story, amazing visuals and powerful performances.");
            
        // }
        // isrunning(){
        //     console.log("Movie is not currently running in theatres.");
            
        // }
    
}

let movie1 = new Movie(
    "Baahubali: The Beginning",
    "Prabhas",
    "Tamannaah Bhatia",
    "S. S. Rajamouli",
    "10-07-2015",
    "Action / Drama",
    "₹170 Crore",
    "Arka Media Works",
    ["Shobu Yarlagadda", "Prasad Devineni"],
    ["Hyderabad", "Kerala", "Mahabaleshwar"],
    120,
    35,
    80,
    25
);

let movie2 = new Movie(
    "Salaar: Part 1 – Ceasefire",
    "Prabhas",
    "Shruti Haasan",
    "Prashanth Neel",
    "22-12-2023",
    "Action / Thriller",
    "₹270 Crore",
    "Hombale Films",
    ["Vijay Kiragandur"],
    ["Hyderabad", "Italy", "Budapest"],
    150,
    45,
    90,
    30
);

let movie3 = new Movie(
    "Spider-Man: Brand New Day",
    "Tom Holland",
    "Zendaya",
    "Destin Daniel Cretton",
    "31-07-2026",
    "Action / Adventure",
    "$200 Million",
    "Marvel Studios / Sony Pictures",
    ["Kevin Feige", "Amy Pascal", "Avi Arad", "Rachel O'Connor"],
    ["New York", "England", "Atlanta"],
    200,
    60,
    100,
    40
);

console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie1.locations[2]);

