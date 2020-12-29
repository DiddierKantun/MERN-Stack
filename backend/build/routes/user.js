"use strict";

var express = require('express');

var router = express.Router();
/** Controllers that are used. */

var userController = require('../controllers/userController');
/** GET: api/user */


router.get('/', userController.getUsers);
/** GET: api/user/{id} */

router.get('/:id', userController.getUserById);
/** POST: api/user */

router.post('/', userController.createUser);
/** PUT: api/user/{id} */

router.put('/:id', userController.updateUserById);
/** DELETE: api/user/{id} */

router["delete"]('/:id', userController.deleteUserById);
module.exports = router;