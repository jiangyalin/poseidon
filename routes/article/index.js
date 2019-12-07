const express = require('express');
const router = express.Router();

//文档列表
router.use('/',require('./article-list'));

//文档添加
router.use('/article-add',require('./article-add'));

//文档添查看
router.use('/article-info',require('./article-info'));

module.exports = router;
