const express = require('express');
const router = express.Router();

//登出
router.get('/signOut',function (req, res) {
    req.session.user = null;
    res.redirect('/login');
});

module.exports = router;