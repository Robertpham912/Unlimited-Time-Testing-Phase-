const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 1. THÔNG SỐ NHÂN VẬT & MAP
let survivalTime = 30;
let player = { x: 50, y: 50, size: 30, color: "#00ff00" };

// Map bé gồm các khối vật cản (Parkour)
const obstacles = [
    {x: 150, y: 100, w: 60, h: 60},
    {x: 250, y: 200, w: 100, h: 20},
    {x: 50, y: 220, w: 40, h: 40}
];

// 2. LOGIC ĐẾM THỜI GIAN
setInterval(() => {
    if (survivalTime > 0) {
        survivalTime--;
        document.getElementById("time").innerText = survivalTime;
    }
}, 1000);

// 3. HÀM VẼ TẤT CẢ LÊN MAP
function draw() {
    // Vẽ nền đen cho Map
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Vẽ các khối vật cản (Map xám)
    ctx.fillStyle = "#555";
    obstacles.forEach(obs => {
        ctx.beginPath();
        ctx.roundRect(obs.x, obs.y, obs.w, obs.h, 5); // Bo tròn nhẹ vật cản
        ctx.fill();
    });

    // Vẽ nhân vật (Khối vuông xanh bo tròn)
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.roundRect(player.x, player.y, player.size, player.size, 8); 
    ctx.fill();

    requestAnimationFrame(draw); // Vẽ liên tục để tạo chuyển động
}

// 4. HỆ THỐNG CHAT
function sendMessage() {
    const input = document.getElementById("chat-input");
    if (input.value.trim() !== "") {
        const msg = document.createElement("p");
        msg.innerText = "Người chơi: " + input.value;
        document.getElementById("chat-messages").appendChild(msg);
        input.value = "";
    }
}

// Bắt đầu chạy game
draw();
