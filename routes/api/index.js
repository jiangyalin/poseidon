const express = require('express');
const router = express.Router();

// 列表
router.use('/list', require('./list'));

// 缓存
router.use('/caching', require('./caching'));

module.exports = router;
