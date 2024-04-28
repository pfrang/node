const url = require("url");
const uuidv4 = require("uuid").v4
const connections = {};
const users = {};

const broadcast = () => {
  Object.keys(connections).forEach((uuid) => {
    const connection = connections[uuid];
    const message = JSON.stringify(users);
    connection.send(message);
  })
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

module.exports =  function handler(connection, request) {

  const { username } = url.parse(request.url, true).query
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
