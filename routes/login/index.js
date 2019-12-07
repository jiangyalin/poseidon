const express = require('express');
const router = express.Router();

//登陆
router.use('/',require('./login'));

//登出
router.use('/',require('./signout'));

module.exports = router;
