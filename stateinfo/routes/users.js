const express = require('express');

const { getUsers } = require('../controller/users');

const router = express.Router();

router
    .route('/')
    .get(getUsers)

module.exports = router;