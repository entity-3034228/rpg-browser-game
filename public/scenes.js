function drawVillage() {
    ctx.clearRect(0, 0, 800, 400);

    // Sky
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, 800, 200);

    // Ground
    ctx.fillStyle = "green";
    ctx.fillRect(0, 200, 800, 200);

    // Simple house
    ctx.fillStyle = "brown";
    ctx.fillRect(300, 150, 200, 150);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(300, 150);
    ctx.lineTo(500, 150);
    ctx.lineTo(400, 100);
    ctx.fill();
}

function villageMenu() {
    updateStats();
    setChoices([
        { text: "Visit Forest", action: forestScene },
        { text: "Visit Cave", action: caveScene },
        { text: "Shop", action: shopScene }
    ]);
}

// Example forest scene
function forestScene() {
    clearLog();
    log("You enter the Whispering Forest...");
    drawForest();

    setChoices([
        { text: "Look for herbs", action: forestHerbs },
        { text: "Follow a sound", action: () => startCombat("wolf") },
        { text: "Return to village", action: villageMenu }
    ]);
}

function drawForest() {
    ctx.clearRect(0, 0, 800, 400);

    // Sky
    ctx.fillStyle = "lightsteelblue";
    ctx.fillRect(0, 0, 800, 140);

    // Trees
    ctx.fillStyle = "saddlebrown";
    for(let i=1;i<=4;i++){
        let x = 60 + i*100;
        ctx.fillRect(x, 200, 20, 80);
        ctx.fillStyle = "forestgreen";
        ctx.beginPath();
        ctx.ellipse(x+10, 165, 35, 30, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.fillStyle = "saddlebrown";
    }
}

// Herbs example
function forestHerbs() {
    clearLog();
    let chance = Math.random();
    if (chance < 0.6) {
        log("You find a Small Potion!");
        player.inventory.push("Small Potion");
    } else {
        log("You find nothing.");
    }
    setChoices([
        { text: "Return to forest menu", action: forestScene }
    ]);
}

// Cave placeholder
function caveScene() {
    clearLog();
    log("You enter the Old Stone Cave...");
    drawCave();
    setChoices([
        { text: "Go deeper", action: () => startCombat("goblin") },
        { text: "Return to village", action: villageMenu }
    ]);
}

function drawCave() {
    ctx.clearRect(0, 0, 800, 400);
    ctx.fillStyle = "dimgray";
    ctx.fillRect(0, 0, 800, 120); // ceiling
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 220, 800, 180); // floor
}

// Shop placeholder
function shopScene() {
    clearLog();
    log("You enter the shop. Buy items here.");
    setChoices([
        { text: "Buy Small Potion (8 gold)", action: buyPotion },
        { text: "Return to village", action: villageMenu }
    ]);
}

function buyPotion() {
    if(player.gold >= 8){
        player.gold -= 8;
        player.inventory.push("Small Potion");
        log("You bought a Small Potion!");
    } else {
        log("Not enough gold.");
    }
    shopScene();
}
