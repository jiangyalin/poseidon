const express = require('express');
const router = express.Router();
const clean = require('./../clean');

// 获取列表数据
router.get('/', function (req, res) {
  const data = {
    data: clean.get().node
  }
  res.jsonp(data)
})

module.exports = router
