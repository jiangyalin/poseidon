const express = require('express');
const router = express.Router();

//登陆
router.get('/', function (req, res) {
  res.render('login/login');
});

router.post('/signIn', function (req, res) {
  let url = JSON.stringify('/login');
  res.jsonp(url);//返回访问路径
});

module.exports = router;