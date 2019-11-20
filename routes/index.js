var express = require('express');
var router = express.Router();
const controller = require('../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevSecBootCampDemo' });
});

router.post('/addproduct', controller.addProduct);

router.get('/getproducts', controller.getProducts);

module.exports = router;
