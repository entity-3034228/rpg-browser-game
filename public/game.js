// game.js

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    name: "",
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
    const logDiv = document.getElementById("log");
    logDiv.innerHTML += text + "<br>";
    logDiv.scrollTop = logDiv.scrollHeight;
}

function clearLog() {
    document.getElementById("log").innerHTML = "";
}

function updateStats() {
    document.getElementById("stats").innerHTML =
        `${player.name} | HP: ${player.health}/${player.maxHealth} | ATK: ${player.attack} | DEF: ${player.defense} | Gold: ${player.gold}`;
}

function setChoices(options) {
    const div = document.getElementById("choices");
    div.innerHTML = "";
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option.text;
        btn.onclick = option.action;
        div.appendChild(btn);
    });
}

// ====================
// Start Game Sequence
// ====================
function startGame() {
    clearLog();
    log("Welcome, traveler...");

    setChoices([
        { text: "Continue", action: askName }
    ]);
}

function askName() {
    player.name = prompt("What is your name?") || "Hero";
    clearLog();
    log(`Greetings, ${player.name}.`);
    log("You awake near the village of Oakrest,");
    log("where forests, caves, and old ruins await.");

    // Starting item
    player.inventory.push("Small Potion");
    log("You have obtained a Small Potion!");

    setChoices([
        { text: "Enter Oakrest Village", action: () => {
            clearLog();
            drawVillage();
            villageMenu();
        }}
    ]);
}

// ====================
// Village Menu
// ====================
function villageMenu() {
    updateStats();
    setChoices([
        { text: "Visit Forest", action: forestScene },
        { text: "Explore Cave", action: caveScene },
        { text: "Visit Shop", action: shopScene },
        { text: "Check Inventory", action: showInventory },
        { text: "Rest at Inn (5 gold)", action: restAtInn }
    ]);
}

// ====================
// Inventory
// ====================
function showInventory() {
    clearLog();
    if(player.inventory.length === 0){
        log("You have no items.");
    } else {
        player.inventory.forEach((item, index) => {
            log(`${index + 1}. ${item}`);
        });
    }
    setChoices([
        { text: "Return to Village", action: villageMenu }
    ]);
}

// ====================
// Rest at Inn
// ====================
function restAtInn() {
    clearLog();
    if(player.gold < 5){
        log("You don't have enough gold to rest.");
    } else {
        player.gold -= 5;
        player.health = player.maxHealth;
        log("You rest at the inn. Your health is fully restored.");
    }
    villageMenu();
}

// ====================
// Start everything
// ====================
startGame();
