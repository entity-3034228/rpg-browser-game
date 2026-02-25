function drawVillage() {
    ctx.clearRect(0, 0, 800, 400);

    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, 800, 200);

    ctx.fillStyle = "green";
    ctx.fillRect(0, 200, 800, 200);

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
