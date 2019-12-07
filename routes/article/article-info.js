const express = require('express');
const router = express.Router();

//文档查看页面
router.get('/',function (req, res) {
    //查询数据
    let id = req.query.id;
    let data = {
        id : id
    };
    res.render('article/article-info',{data: data});
});

module.exports = router;