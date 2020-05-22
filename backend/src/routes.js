const express = require('express');

const UserControllers = require('./controllers/UserController');

const routes = express.Router('controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com');

routes.post('/users', UserControllers.create);

module.exports = routes;