const { parse } = require('url');
const next = require('next');
const { createServer } = require('http');
const WebSocket = require('ws');
require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;


const uuidv4 = require("uuid").v4
const connections = {};
const users = {};

const broadcast = () => {
  Object.keys(connections).forEach((uuid) => {
    const connection = connections[uuid];
    if (connection.readyState === WebSocket.OPEN) {
      const message = JSON.stringify(users);
      connection.send(message);
    }
  });
}

const handleMessage = (bytes, uuid) => {
  // message = { "x" : 0, y: 100}
  if (bytes.toString()) {
    try {
      const message = JSON.parse(bytes.toString());
      const user = users[uuid];
      user.state = message;

      broadcast()

      console.log(`${user.username} has updated their state to ${JSON.stringify(user.state)}`);
    } catch (e) {
      console.log(`Error: ${JSON.stringify(e)}`);
    }
  }
}

const handleClose = uuid => {

  console.log(`${users[uuid].username} has disconnected`);
  delete connections[uuid];
  delete users[uuid];

  // Ideally send a message that someone has disconnected
  broadcast()
}

const handler = (connection, request) => {

  const { username } = parse(request.url, true).query
  const uuid = uuidv4();
  console.log(username);
  console.log(uuid);
  // broadcast // fan out
  connections[uuid] = connection
  users[uuid] = {
    username,
    state: {
      x: 0,
      y: 0,
    }
  }

  connection.on('message', message => handleMessage(message, uuid));
  connection.on('close', () => handleClose(uuid));
}


nextApp.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res, parse(req.url, true)))
  const wss = new WebSocket.Server({ noServer: true });

  // WebSocket server
  wss.on('connection', (connection, request) => {
    handler(connection, request);
  });
  // Next.js handling
  server.on('upgrade', function (req, socket, head) {
    const { pathname } = parse(req.url, true);
    if (pathname !== '/_next/webpack-hmr') {
      wss.handleUpgrade(req, socket, head, function done(ws) {
        wss.emit('connection', ws, req);
      });
    }
  });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port} and ws://localhost:${port}`)
  })
});
