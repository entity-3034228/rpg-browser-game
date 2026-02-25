let player = {
    hp: 100,
    level: 1,
    xp: 0
};

let enemy = {
    hp: 50
};

function updateUI() {
    document.getElementById("playerHP").innerText = player.hp;
    document.getElementById("level").innerText = player.level;
    document.getElementById("xp").innerText = player.xp;
    document.getElementById("enemyHP").innerText = enemy.hp;
}

function attack() {
    let playerDamage = Math.floor(Math.random() * 15) + 5;
    let enemyDamage = Math.floor(Math.random() * 10) + 3;

    enemy.hp -= playerDamage;

    if (enemy.hp <= 0) {
        player.xp += 20;
        enemy.hp = 50;

        if (player.xp >= 100) {
            player.level++;
            player.xp = 0;
            player.hp = 100;
            alert("You leveled up!");
        }

        document.getElementById("log").innerText = "Enemy defeated!";
    } else {
        player.hp -= enemyDamage;
        document.getElementById("log").innerText =
            "You dealt " + playerDamage + " damage. Enemy dealt " + enemyDamage;
    }

    if (player.hp <= 0) {
        alert("Game Over!");
        player.hp = 100;
        player.xp = 0;
        player.level = 1;
    }

    updateUI();
}

updateUI();
