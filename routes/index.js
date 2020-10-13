const express = require('express');

const router = express.Router();
const userController=require('../controllers/index');
router.get('/', userController.user);
router.get('/admin',userController.admin);




module.exports = router;