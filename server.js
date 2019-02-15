const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')

const server = express();

// Global Middleware
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

module.exports = server;