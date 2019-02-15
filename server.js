const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')

const projectsRouter = require('./projects/projectsRouter');
const actionsRouter = require('./actions/actionsRouter');

const server = express();

// Global Middleware
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

// Routes
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;