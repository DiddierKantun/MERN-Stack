import 'dotenv/config';
import '../database/connection';
import app from '../app';
import http from 'http';

/** Get port from environment and store in Express. */
const port = (process.env.PORT || '4000');
app.set('port', port);

/** Create HTTP server. */
const server = http.createServer(app);

async function start() {
    await server.listen(app.get('port'));
    console.log('Listening on port ' + port);
}

start();