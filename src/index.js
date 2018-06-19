import http 						from 'http';
import express 						from 'express';
import cors 						from 'cors';
import morgan 						from 'morgan';
import bodyParser 					from 'body-parser';
import WebSocketServer, {Server}	from 'uws';

const PORT 	= 3000;
const app 	= express();
app.server 	= http.createServer(app);


app.use(morgan('dev'));


app.use(cors({
    exposedHeaders: "*"
}));

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use((req, res) => {
	res.send('Hello World');
});

app.wss = new Server({
	server: app.server
});

app.wss.on('connection', (connection) => {
	console.log('New Client Connected');

	//Listen event new message from client.

	connection.on('message', (message) => {
		console.log('Got new message from Cleint, the message is: ', message)

		//after getting new message from client. We send back to the client with new message
		connection.send('Hi David nice to meet you');
	});
});

app.set('root', __dirname);

app.server.listen(process.env.PORT || PORT, () => {
        console.log(`App is running on port ${app.server.address().port}`);
});

export default app;