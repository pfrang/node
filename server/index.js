const http = require("http");
const { WebSocketServer } = require("ws");
const url = require("url");
const server = http.createServer();

const uuidv4 = require("uuid").v4

const wsServer = new WebSocketServer({ server: server });

const port = 8000;

const connections = {};
const users = {};

const handleMessage = (bytes, uuid) => {
	// message = { "x" : 0, y: 100}
}

const handleClose = uuid => {

}
wsServer.on('connection', (connection, request) => {
	//ws ://localhost:8000?username=Alex

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
			onlineStatus: "in a zoom meeting"
		}

	}

	connection.on('message', message => handleMessage(message, uuid));
	connection.on('close', () => handleClose(uuid));

})

server.listen(port, () => {
	console.log(`Websocket server is runing on port ${port}`);
});
