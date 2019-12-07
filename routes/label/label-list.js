const express = require('express');
const router = express.Router();

//文档页面
router.get('/',function (req, res) {
    res.render('label/label-list');
});

module.exports = router;