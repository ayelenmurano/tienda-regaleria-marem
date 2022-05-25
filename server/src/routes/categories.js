var express = require('express');
var router = express.Router();
const controllers = require('../controllers/categories');

/* GET users listing. */
// router.get('/:id', controllers.getDataById );
router.get('/', controllers.getData );
router.post('/', controllers.insertCategory );
router.put('/', controllers.updateCategory );
router.delete('/:id', controllers.deleteCategory );


module.exports = router;
