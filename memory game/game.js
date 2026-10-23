
const animals = [
    "🐼", "🦊", "🦁", "🐸",
    "🐻", "🐵", "🐱", "🐶",
    "🐼", "🦊", "🦁", "🐸",
    "🐻", "🐵", "🐱", "🐶"
];

const cards = document.querySelectorAll(".card");

let firstCard = null;
let secondCard = null;
let lockBoard = false;

let moves = 0;
let pairs = 0;
let seconds = 0;
let timer = null;
let started = false;

function shuffleAnimals() {
    for (let i = animals.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [animals[i], animals[j]] = [animals[j], animals[i]];
    }
}
function startTimer() {
    if (started) return;
    started = true;
    timer = setInterval(() => {
        seconds++;
        document.getElementById("time").innerText =
            formatTime(seconds);
    }, 1000);
}
function formatTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    return String(minutes).padStart(2, "0") + ":" +
           String(secs).padStart(2, "0");
}
function click(event) {
    let card = event.currentTarget;
    if (lockBoard) return;
    if (card.classList.contains("flipped")) return;
    startTimer();
    let index = Array.from(cards).indexOf(card);
    card.innerText = animals[index];
    card.classList.add("flipped");
    if (firstCard === null) {
        firstCard = card;
        return;
    }
    secondCard = card;
    moves++;
    document.getElementById("moves").innerText = moves;
    if (firstCard.innerText === secondCard.innerText) {
        pairs++;
        document.getElementById("pairs").innerText = pairs;

        resetTurn();

        if (pairs === animals.length / 2) {
            clearInterval(timer);
            timer = null;

            alert("Congratulations! You matched all the animals!");
        }
    } else {
        lockBoard = true;

        setTimeout(() => {
            firstCard.innerText = "?";
            secondCard.innerText = "?";

            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            resetTurn();
        }, 800);
    }
}
function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}
function restartGame() {
    clearInterval(timer);
    timer = null;

    moves = 0;
    pairs = 0;
    seconds = 0;
    started = false;

    firstCard = null;
    secondCard = null;
    lockBoard = false;

    document.getElementById("moves").innerText = 0;
    document.getElementById("pairs").innerText = 0;
    document.getElementById("time").innerText = "00:00";

    shuffleAnimals();

    cards.forEach((card) => {
        card.innerText = "?";
        card.classList.remove("flipped");
    });
}

cards.forEach((card) => {
    card.addEventListener("click", click);
});

document.getElementById("restart")
    .addEventListener("click", restartGame);
shuffleAnimals();
