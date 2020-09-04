var express = require('express');
var router = express.Router();

var productController = require('../controllers/product');



router.get('/', productController.getProducts);

router.post('/create', productController.product_create);

router.get('/:id', productController.product_details);

router.put('/update/:id', productController.product_update);

router.delete('/delete/:id', productController.product_delete);


module.exports = router;