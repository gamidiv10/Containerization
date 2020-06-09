const express = require('express');

const { getUser, setOnline } = require('../controller/users');

const router = express.Router();

router
    .route('/:emailId')
    .get(getUser)

router
    .route('/loggedIn/:emailId')
    .get(setOnline)

module.exports = router;