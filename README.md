## client

npx create-react-app .
npm install react-icons --save
npm install socket.io-client

## server

npm init -y;
npm install express socket.io
npm install cors

## 실시간 채팅 구현

### client

npm install socket.io-client

### server

npm install express socket.io

### 개요

Node.js를 서버로 사용하여 Socket.io를 활용한 실시간 채팅 기능을 구현했습니다. Socket.io를 선택한 주된 이유는 이 기능을 구현하기 위해 온라인에서 조사한 결과, Socket.io를 사용한 다양한 예시가 많이 나와있었고, 이를 참고하기에 적합했기 때문입니다.

### 구현

client > components > contents > Chat.jsx

```js
// 소켓과 연결 : socket.io-client을 사용하여 서버와의 WebSocket 연결을 설정하여 데이터를 주고받도록 함
const socket = io("http://localhost:5051");

// 데이터 저장 변수
const [message, setMessage] = useState("");
const [chat, setChat] = useState([]);
const user = useSelector((state) => state.user); // redux를 사용하여 유저정보를 불러옴

// 채팅 메세지 수신 설정 : socket.on('chat message', callback)을 사용하여 'chat message' 이벤트 리스너를 설정합니다. 받은 메세지는 setChat 함수를 통해 chat 배열 상태에 추가되며, 이것은 UI에 표시됩니다.
useEffect(() => {
  socket.on("chat message", (msg) => {
    setChat((prevChat) => [...prevChat, msg]);
  });
  return () => socket.off("chat message");
}, []);

// 이전 채팅 불러오기 : 새로고침을 하면 기존 채팅이 사라져서 loadMessages 함수를 호출하여 서버에서 이전 채팅 메시지를 불러옵니다. loadMessages는 fetch를 사용해 서버의 /api/chat/getMessages 엔드포인트로부터 이전 채팅 메시지를 가져옵니다.
useEffect(() => {
  const loadMessages = async () => {
    try {
      const response = await fetch(
        "http://localhost:5051/api/chat/getMessages"
      );
      const data = await response.json();
      setChat(data);
    } catch (error) {
      console.error("Failed to load messages", error);
    }
  };
  loadMessages();
}, []);

// 메세지 전송 : sendMessage함수를 정의하여 메세지를 전송합니다. 전송하는 데이터는 messageData로 username, message, photoURL을 포함하고 있습니다. socket.emit을 통해 데이터가 서버로 전송됩니다.
const sendMessage = (e) => {
  e.preventDefault();
  console.log("Current user:", user);

  if (message !== "") {
    const messageData = {
      username: user.displayName,
      message: message,
      photoURL: user.photoURL,
    };
    socket.emit("chat message", messageData);
    setMessage("");
  }
};
```

server > index.js

```js
// CORS를 설정 후 서버에 Socket.IO를 연결, localhost:3000에서 실행되는 클라이언트 애플리케이션이 localhost:5051에서 호스팅되는 서버에 접근할 수 있게 합니다. 해당 과정이 없으면 CORS에러가 발생
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// socket.io와 연결 :
```
