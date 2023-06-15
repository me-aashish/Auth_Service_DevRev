const express = require('express');
const router = express.Router();
const  userController  = require('../../controllers/userController')
const adminController = require('../../controllers/adminController')

router.post('/signup', userController.create);
router.post('/signin', userController.signIn);

router.post('/adminSignup', adminController.create);
router.post('/adminSignin', adminController.signIn);

module.exports = router;