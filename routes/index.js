var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var pg = require('pg');
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('signup', function(req, res, next){
  res.render('signup');
});

router.get('/signin', function(req, res, next){
  res.render('signin');
});

router.get('/addScout', function(req, res, next){
  res.render('addScout');
});

module.exports = router;
