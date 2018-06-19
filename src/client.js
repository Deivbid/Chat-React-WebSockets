const WebSocket = require('uws');
/* Connect to the server */
const ws = new WebSocket('ws://localhost:3000');

ws.on('open', () => {
	console.log('Client Succesfull connected ti the server.');

	//Send new message from this client to the server

	ws.send('Hello Server my name is David from Client.js');

	ws.on('message', (message) => {
		console.log("Got back message from the server with message is: ", message);
	});
});
