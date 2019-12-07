const express = require('express');
const router = express.Router();

//文档页面
router.get('/',function (req, res) {
    res.render('article/article-list');
});

module.exports = router;