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

