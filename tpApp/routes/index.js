var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Systeme information' });
});

module.exports = router;


/*
form = require("../forms/formulaire"); 

exports.newArticle = function (req, res ) {
  res.render('admin/newArticle',{
    form: form.ArticleForm.toHTML(),
    title: 'admin'
 	});
}

exports.createArticle = function (req, res ) {
  form.ArticleForm.handle req,
    success: (form) ->
      db.Article.create(
        form.data
      ).success (article) ->
          req.method = 'get'
          res.redirect '/admin/article/list'
    other: (form) ->
      res.render "admin/newArticle",
        form: form.toHTML()
        title: 'failed'
}*/

