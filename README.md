# Real-Time Room State Management

This project is a **Node.js** server using **Express** and **Socket.IO** to manage and synchronize the state of lights across rooms (bedroom and kitchen) in real-time. It is designed to work with a frontend client hosted on `http://localhost:5173`.

---

## Features
- Real-time state synchronization of room lights using WebSockets.
- Handles multiple connected clients, ensuring all clients see the updated state.
- Lightweight backend setup with `Express` and `Socket.IO`.
- Easy-to-configure CORS setup for frontend integration.
- Server automatically broadcasts updates to all connected clients.

---

## Prerequisites

Before you proceed, make sure you have the following installed:

1. **Node.js** (v14 or higher)
2. **npm** (comes with Node.js)
3. A frontend client (e.g., a React/Vite app) hosted at `http://localhost:5173`.

---

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
```bash
npm install
```
This command installs all required packages, including:
- `express`
- `socket.io`
- `cors`

### 3. Configure the Server (Optional)
By default, the server listens on port `3001`. To change the port, set the `PORT` environment variable:

#### Option 1: Update in the code
Edit this line in `index.js`:
```javascript
const PORT = process.env.PORT || 3001;
```

#### Option 2: Use environment variables
Create a `.env` file in the project root and add:
```env
PORT=your_custom_port
```

### 4. Start the Server
Run the following command to start the server:
```bash
npm start
```
This will start the server and log:
```plaintext
Server running on port 3001
```

---

## API and WebSocket Setup

### WebSocket Connection
The server listens for WebSocket connections from the client. It communicates on the following events:

1. **`initialState` (Server -> Client):**
   - Sent to new clients when they connect, containing the initial state of all rooms.

2. **`roomUpdate` (Client -> Server):**
   - Sent by clients to update the state of a room.

3. **`roomUpdate` (Server -> All Clients):**
   - Broadcasts the updated state to all connected clients.

### Example Room State
```json
{
  "bedroom": {
    "light1": false,
    "light2": false
  },
  "kitchen": {
    "light1": false,
    "light2": false
  }
}
```

---

## Folder Structure
```plaintext
root
├── index.js         # Main server file
├── package.json     # Project metadata and dependencies
├── package-lock.json
├── .env             # Optional environment variables file
└── README.md        # Project documentation
```

---

## Frontend Setup
Ensure the frontend is hosted at `http://localhost:5173`. You can change the `origin` in the `cors` and `Socket.IO` configuration if the frontend is hosted elsewhere:

### Update in `index.js`
```javascript
const io = new Server(server, {
  cors: {
    origin: "<your-frontend-url>",
    methods: ["GET", "POST"]
  }
});
```

### Example Frontend Integration
To connect the frontend client to this WebSocket server, use the following example code:

```javascript
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

socket.on("initialState", (state) => {
  console.log("Initial State:", state);
});

socket.on("roomUpdate", (updatedState) => {
  console.log("Updated State:", updatedState);
});

// Example to send room updates
socket.emit("roomUpdate", {
  bedroom: {
    light1: true,
    light2: false
  },
  kitchen: {
    light1: true,
    light2: true
  }
});
```

---

## Troubleshooting

### Common Issues
1. **CORS Errors:**
   - Make sure the frontend URL matches the `origin` setting in both `cors` and `Socket.IO` configuration.

2. **Server Port Conflicts:**
   - If port `3001` is already in use, change the port in the code or use an environment variable.

3. **Client Not Receiving Updates:**
   - Verify that the client is correctly connected to the WebSocket server.
   - Check the browser console for WebSocket errors.

4. **Frontend and Backend Out of Sync:**
   - Ensure both frontend and backend use the same WebSocket events (`initialState`, `roomUpdate`).

### Debugging Tips
- Use `console.log` to track events and data in the server.
- Use browser developer tools to monitor WebSocket connections.
- Test WebSocket connections using tools like [Postman](https://www.postman.com/) or [WebSocket Debugger](https://www.websocket.org/echo.html).

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Contributions
Feel free to open issues or submit pull requests to enhance this project. Collaboration is welcome!
