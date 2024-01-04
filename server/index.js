const express = require("express");
const cors = require('cors');
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 5051;
const config = require("./config/key.js");

const http = require('http');
const { Server } = require("socket.io");
const Message = require('./model/Message');

// CORS 설정: 클라이언트 주소 허용
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
}));

const server = http.createServer(app);

// Socket.IO 서버 및 CORS 설정
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// Socket.IO 연결 핸들러
io.on('connection', (socket) => {

    socket.on('disconnect', () => {

    });

    // 메시지 이벤트 핸들러
    socket.on('chat message', async (msg) => {
        try {
            const newMessage = new Message({
                username: msg.username,
                message: msg.message,
                photoURL: msg.photoURL
            });
            await newMessage.save();
            io.emit('chat message', newMessage);
        } catch (error) {
            console.error('Message save error', error);
        }
    });
});

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", require("./router/post.js"));
app.use("/api/user", require("./router/user.js"));
app.use("/api/reple", require("./router/reple.js"));
app.use("/api/chat", require("./router/chat.js"));

server.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
