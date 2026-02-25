// scenes.js

function drawVillage() {
    ctx.clearRect(0,0,800,400);

    // Sky
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0,0,800,200);

    // Ground blocks (Grass)
    for(let x=0; x<800; x+=20){
        ctx.fillStyle = x%40===0 ? "#228B22" : "#2E8B57"; // slight color variation
        ctx.fillRect(x, 200, 20, 20);
    }

    // House (blocky)
    ctx.fillStyle = "#8B4513"; // wood
    ctx.fillRect(300, 140, 120, 60);
    ctx.fillStyle = "#A52A2A"; // roof
    ctx.beginPath();
    ctx.moveTo(300,140);
    ctx.lineTo(420,140);
    ctx.lineTo(360,100);
    ctx.fill();

    // Trees (blocky)
    for(let i=0;i<3;i++){
        let x = 100 + i*200;
        ctx.fillStyle = "#8B4513"; // trunk
        ctx.fillRect(x, 160, 20, 40);
        ctx.fillStyle = "#006400"; // leaves
        ctx.fillRect(x-10, 140, 40, 20);
        ctx.fillRect(x-15, 120, 50, 20);
    }
}

function drawForest() {
    ctx.clearRect(0,0,800,400);

    // Grass blocks
    for(let x=0;x<800;x+=20){
        ctx.fillStyle = x%40===0 ? "#228B22" : "#2E8B57";
        ctx.fillRect(x, 200, 20, 20);
    }

    // Trees
    for(let i=0;i<5;i++){
        let x = 50 + i*150;
        ctx.fillStyle = "#8B4513"; // trunk
        ctx.fillRect(x, 140, 20, 60);
        ctx.fillStyle = "#228B22"; // leaves
        ctx.fillRect(x-10, 120, 40, 20);
        ctx.fillRect(x-15, 100, 50, 20);
    }
}

function drawCave() {
    ctx.clearRect(0,0,800,400);
    ctx.fillStyle = "#2F4F4F"; // cave ceiling
    ctx.fillRect(0,0,800,120);
    ctx.fillStyle = "#696969"; // floor
    ctx.fillRect(0,220,800,180);

    // Rocks (blocks)
    for(let x=100;x<700;x+=40){
        ctx.fillStyle = "#808080";
        ctx.fillRect(x, 180 + Math.random()*20, 30, 30);
    }
}

function shopSceneGraphics() {
    ctx.clearRect(0,0,800,400);
    // Floor
    ctx.fillStyle = "#A0522D";
    ctx.fillRect(0,220,800,180);

    // Shelves
    ctx.fillStyle = "#8B4513";
    ctx.fillRect(50,100,700,20);
    ctx.fillRect(50,150,700,20);

    // Items
    ctx.fillStyle = "red";
    ctx.fillRect(80,70,20,20); // potion
    ctx.fillStyle = "gold";
    ctx.fillRect(120,70,20,20); // gold item
}
