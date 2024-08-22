const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
require('dotenv').config();
const server = express();
server.use(cors());

const config = {
    port: 3000,
    host: 'localhost'
};
server.use(parser.json());
server.listen(config.port, config.host, () => {
    console.log(`Server started successfully http://${config.host}:${config.port} `)
});