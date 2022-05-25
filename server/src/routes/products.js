var express = require('express');
var router = express.Router();
const controllers = require('../controllers/products');

/* GET users listing. */
router.get('/:id', controllers.getDataById );
router.get('/', controllers.getData );
router.post('/', controllers.insertProduct );
router.put('/', controllers.updateProduct );
router.delete('/:id', controllers.deleteProduct );


module.exports = router;
