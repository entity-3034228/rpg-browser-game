const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    name: "Hero",
    health: 30,
    maxHealth: 30,
    attack: 5,
    defense: 2,
    gold: 10,
    inventory: []
};

let currentScene = "village";
let inCombat = false;
let enemy = null;

function log(text) {
    document.getElementById("log").innerHTML += text + "<br>";
}

function clearLog() {
    document.getElementById("log").innerHTML = "";
}

function updateStats() {
    document.getElementById("stats").innerHTML =
        `${player.name} | HP: ${player.health}/${player.maxHealth} | ATK: ${player.attack} | DEF: ${player.defense} | Gold: ${player.gold}`;
}

function setChoices(options) {
    let div = document.getElementById("choices");
    div.innerHTML = "";
    options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option.text;
        btn.onclick = option.action;
        div.appendChild(btn);
    });
}

function startGame() {
    player.name = prompt("What is your name?") || "Hero";
    log("Welcome to Oakrest, " + player.name + "!");
    drawVillage();
    villageMenu();
}

startGame();
