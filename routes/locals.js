var express = require('express');
var router = express.Router();

/* GET locals page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName: 'locals/search.ejs' });
});

module.exports = router;
