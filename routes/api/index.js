const express = require('express');
const router = express.Router();

// 列表
router.use('/list', require('./list'))

// 详情
router.use('/info', require('./info'))

// 缓存
router.use('/caching', require('./caching'))

module.exports = router;
