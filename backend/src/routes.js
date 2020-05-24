const express = require('express');

const UserControllers = require('./controllers/UserController');
const SessionControllers = require('./controllers/SessionController');
const PagstartControllers = require('./controllers/PagstartController');

const routes = express.Router('controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com');

routes.post('/users', UserControllers.create);

routes.post('/sessions', SessionControllers.create);

routes.get('/profile', PagstartControllers.index);

module.exports = routes;