// 1. LOGIC THỜI GIAN SINH TỒN
let survivalTime = 30;
const timeDisplay = document.getElementById("time");

const gameClock = setInterval(() => {
    if (survivalTime > 0) {
        survivalTime--;
        timeDisplay.innerText = survivalTime;
    } else {
        clearInterval(gameClock);
        alert("HẾT GIỜ! Game Over!");
    }
}, 1000);

// 2. LOGIC HỆ THỐNG CHAT
function sendMessage() {
    const input = document.getElementById("chat-input");
    const messageText = input.value.trim();
    
    if (messageText !== "") {
        const chatMessages = document.getElementById("chat-messages");
        
        // Tạo một dòng tin nhắn mới
        const newMessage = document.createElement("p");
        newMessage.innerText = `Người chơi: ${messageText}`;
        
        chatMessages.appendChild(newMessage);
        input.value = ""; // Xóa chữ trong ô nhập sau khi gửi
        
        // Tự động cuộn khung chat xuống dưới cùng
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// 3. LOGIC QUYỀN CỦA HOST
function kickPlayer() {
    alert("Host đã kích hoạt lệnh KICK một người chơi gian lận!");
}

function closeServer() {
    alert("Host đã ĐÓNG máy chủ phòng này!");
}
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Thông số nhân vật "Kì cục"
let player = {
    x: 50,
    y: 50,
    size: 30,
    color: "#00ff00" // Màu xanh phe Tốt
};

// Danh sách các khối vuông (Map bé)
const obstacles = [
    {x: 150, y: 100, w: 50, h: 50},
    {x: 250, y: 200, w: 80, h: 20},
    {x: 100, y: 220, w: 40, h: 40}
];

function drawGame() {
    // Xóa màn hình để vẽ khung hình mới
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Vẽ các chướng ngại vật trong Map
    ctx.fillStyle = "#555";
    obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
    });

    // Vẽ nhân vật của cậu (Bo tròn nhẹ bằng cách vẽ hình chữ nhật bo góc)
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.roundRect(player.x, player.y, player.size, player.size, 8); // Bo tròn 8px
    ctx.fill();

    requestAnimationFrame(drawGame);
}

drawGame(); // Bắt đầu vẽ
#gameCanvas {
    background-color: #000; /* Nền đen để thấy Map xám */
    border: 3px solid #444;
    display: block;
    margin: 20px auto;
    border-radius: 10px; /* Bo tròn map cho đồng bộ */
}



