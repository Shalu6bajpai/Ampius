const express = require('express');

const router = express.Router();
const userController=require('../controllers/index');
router.get('/', userController.user);
router.get('/admin',userController.admin);
router.post('/data',userController.data);
router.post('/fetchdata',userController.fetchDataFromPythonScript);




module.exports = router;