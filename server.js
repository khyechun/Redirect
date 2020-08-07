// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// const MongoClient = require('mongodb').MongoClient;

// Get our API routes
// const api = require('./server/routes/api');
const route = require('./server/routes/routes');
const app = express();



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Point static path to dist
app.use(express.static(path.join(__dirname, 'assets')));
// Set our API routes
// app.use('/api', api);
// Catch all other routes and return the index file
// app.get('*', (req, res) => { res.sendFile(path.join(__dirname, 'dist/index.html')); });
app.use('/', route)
// Get port from environment and store in Express
const port = process.env.PORT || '8080';
// res.redirect('www.lenstalk.com.my');
app.set('port', port);
// Create HTTP server
const server = http.createServer(app);


server.listen(port, () => console.log(`API running on localhost:${port}`));


