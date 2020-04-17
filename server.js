const express = require('express');

const ProjectsRouter = require('./projects/projects-router.js');

const server = express();

server.use(express.json());
server.use(logger);
server.use('/api/project', ProjectsRouter);

function logger(req, res, next) {
  console.log(`\n=== LOG ===\nRequest method: ${req.method}\nRequest URL: ${req.originalUrl}\nTimestamp: ${new Date()}\n`);

  next();
}

module.exports = server;
