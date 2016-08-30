var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/blogitems', function(req, res, next) {

  var obj = {};
  obj.title = 'First Blog Post';
  obj.author = 'Victor Palma';
  obj.content = 'Lorem ipsum dolor sit amet, minim indoctum vix no. Eu mea errem persecuti, eu semper offendit mediocrem sea. Pri an ipsum vocibus repudiandae. Volutpat gubergren pro ut, cu sea elitr mucius iisque. Ornatus omittantur eam ei. Vim tritani discere abhorreant ne, duo cu dicit dolores eleifend, et vis dico dictas splendide. Sed ut nominavi legendos, ad duo nonumy accusata.';

  res.header('Content-type','application/json');
  res.header('Charset','utf8');

  res.jsonp(obj);

});


module.exports = router;
