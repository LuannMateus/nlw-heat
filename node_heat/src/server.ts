import http from 'http';
import App from './app';
import { Server, Socket } from 'socket.io';

const PORT = process.env.PORT || 4000;

const app = new App().getApp;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log(`User connected with ID [${socket.id}]`);
});

server.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export { io };
