var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {title: '게시판', pageName: 'posts/list.ejs'})
});

router.get('/insert', function(req, res) {
    res.render('index', {title: '글쓰기', pageName: 'posts/insert.ejs'})
});

router.get('/read', function(req, res) {
    const id = req.query.id;
    res.render('index', {title: '게시글 정보', pageName: 'posts/read.ejs', id})
});

router.get('/update', function(req, res) {
    const id = req.query.id;
    res.render('index', {title: '게시글 수정', pageName: 'posts/update.ejs', pid})
});

module.exports = router;