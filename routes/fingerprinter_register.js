var express = require('express');
var router = express.Router();

/* GET  listing. */
router.get('/', function (req, res, next) {
  if (req.session.user) {
    var user = req.session.user;
    var name = user.name;
    res.render('fingerprint_register');
  } else {
    res.render('need_login');
  }
});

module.exports = router;
