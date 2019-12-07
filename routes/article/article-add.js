const express = require('express');
const router = express.Router();

//文档添加页面
router.get('/',function (req, res) {
    let id = req.query.id;
    id = id || '';
    let data = {};
    data.id = id;
    res.render('article/article-add',{data: data});
});

module.exports = router;