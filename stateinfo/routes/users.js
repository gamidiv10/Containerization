const express = require('express');

const { getUsers, logout } = require('../controller/users');

const router = express.Router();

router
    .route('/')
    .get(getUsers)

router
    .route('/loggedOut/:emailId')
    .get(logout)

module.exports = router;