function startCombat(type) {
    inCombat = true;

    if (type === "wolf") {
        enemy = { name: "Wolf", health: 15, attack: 4, defense: 1, gold: 6 };
    } else if (type === "goblin") {
        enemy = { name: "Goblin Guard", health: 20, attack: 6, defense: 2, gold: 12 };
    }

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
    log("You hit for " + damage + " damage!");

    if (enemy.health <= 0) {
        log("You defeated the " + enemy.name);
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
    log("Enemy hits for " + damage);

    if (player.health <= 0) {
        alert("GAME OVER");
        location.reload();
    }

    combatMenu();
}

function attemptFlee() {
    if (Math.random() < 0.5) {
        log("You escaped!");
        inCombat = false;
        villageMenu();
    } else {
        log("Failed to flee!");
        enemyAttack();
    }
}
