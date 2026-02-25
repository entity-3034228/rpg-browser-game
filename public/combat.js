function startCombat(type) {
    inCombat = true;

    if (type === "wolf") {
        enemy = { name: "Wolf", health: 15, attack: 4, defense: 1, gold: 6 };
    } else if (type === "goblin") {
        enemy = { name: "Goblin Guard", health: 20, attack: 6, defense: 2, gold: 12 };
    }

    clearLog();
    log("A " + enemy.name + " appears!");
    drawEnemy();
    combatMenu();
}

function combatMenu() {
    updateStats();
    setChoices([
        { text: "Attack", action: playerAttack },
        { text: "Flee", action: attemptFlee }
    ]);
}

function playerAttack() {
    let damage = Math.max(1, player.attack - enemy.defense);
    enemy.health -= damage;
    log("You hit the " + enemy.name + " for " + damage + " damage!");

    if(enemy.health <= 0){
        log("You defeated the " + enemy.name + "!");
        player.gold += enemy.gold;
        inCombat = false;
        villageMenu();
        return;
    }

    enemyAttack();
}

function enemyAttack() {
    let damage = Math.max(1, enemy.attack - player.defense);
    player.health -= damage;
    log("The " + enemy.name + " hits you for " + damage + " damage!");

    if(player.health <= 0){
        alert("GAME OVER");
        location.reload();
        return;
    }

    combatMenu();
}

function attemptFlee() {
    if(Math.random() < 0.5){
        log("You escaped!");
        inCombat = false;
        villageMenu();
    } else {
        log("Failed to flee!");
        enemyAttack();
    }
}

// Simple enemy drawing
function drawEnemy() {
    ctx.clearRect(250, 50, 300, 200);
    ctx.fillStyle = "darkred";
    ctx.fillRect(300, 100, 100, 80); // enemy body
    ctx.fillStyle = "black";
    ctx.fillText(enemy.name, 320, 90);
}
