var express = require('express');
var router = express.Router();
var db = require('../database/connect');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.query('select * from teacher', (err, rows) => {
    res.render('teachers', { error: err, rows: rows });
  });
});

module.exports = router;
