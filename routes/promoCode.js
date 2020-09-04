var express = require('express');
var router = express.Router();

var PromoCodeController = require('../controllers/promoCodes');



router.get('/', PromoCodeController.getPromoCodes);

router.post('/create', PromoCodeController.promoCode_create);

router.get('/:id', PromoCodeController.promoCode_details);

router.put('/update/:id', PromoCodeController.promoCode_update);

router.delete('/delete/:id', PromoCodeController.promoCode_delete);


module.exports = router;