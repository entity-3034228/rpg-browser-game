// combat.js

function startCombat(type) {
    inCombat = true;

    if(type==="wolf"){
        enemy = { name: "Wolf", health: 15, attack:4, defense:1, gold:6 };
    } else if(type==="goblin"){
        enemy = { name: "Goblin Guard", health:20, attack:6, defense:2, gold:12 };
    }

    clearLog();
    log(`A wild ${enemy.name} appears!`);
    drawEnemy();
    combatMenu();
}

function combatMenu() {
    updateStats();
    setChoices([
        { text: "Attack", action: playerAttack },
        { text: "Use Item", action: useItem },
        { text: "Flee", action: attemptFlee }
    ]);
}

function playerAttack() {
    let damage = Math.max(1, player.attack - enemy.defense);
    enemy.health -= damage;
    log(`You hit the ${enemy.name} for ${damage} damage!`);

    if(enemy.health<=0){
        log(`You defeated the ${enemy.name}!`);
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
    log(`The ${enemy.name} hits you for ${damage} damage!`);

    if(player.health<=0){
        alert("GAME OVER");
        location.reload();
        return;
    }

    combatMenu();
}

function attemptFlee(){
    if(Math.random()<0.5){
        log("You escaped!");
        inCombat = false;
        villageMenu();
    } else {
        log("Failed to flee!");
        enemyAttack();
    }
}

function useItem(){
    if(player.inventory.length===0){
        log("You have no items!");
        combatMenu();
        return;
    }

    clearLog();
    log("Choose an item to use:");
    player.inventory.forEach((item,index)=>{
        log(`${index+1}: ${item}`);
    });

    setChoices(player.inventory.map((item,index)=>({
        text: item,
        action: ()=>{
            if(item==="Small Potion"){
                let heal = 10;
                player.health = Math.min(player.maxHealth, player.health + heal);
                log(`You use a Small Potion and heal ${heal} HP!`);
            }
            player.inventory.splice(index,1);
            enemyAttack();
        }
    })).concat([{ text:"Cancel", action: combatMenu }]));
}

function drawEnemy(){
    ctx.clearRect(250,50,300,200);
    ctx.fillStyle = "darkred";
    ctx.fillRect(300,120,80,60);
    ctx.fillStyle = "black";
    ctx.fillText(enemy.name, 300,110);
}
