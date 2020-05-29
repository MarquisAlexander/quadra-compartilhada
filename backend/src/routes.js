const express = require('express');

const UserControllers = require('./controllers/UserController');
const SessionControllers = require('./controllers/SessionController');
const PagstartControllers = require('./controllers/PagstartController');
const QuadraControllers = require('./controllers/QuadraController');

const routes = express.Router('controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com');

routes.post('/users', UserControllers.create);

routes.post('/sessions', SessionControllers.create); 

routes.get('/profile', PagstartControllers.index);

routes.post('/createquadra', QuadraControllers.create);
routes.delete('/quadra/:id', QuadraControllers.delete);
routes.post('/quadra/:id', QuadraControllers.index);

module.exports = routes;