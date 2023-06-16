const express = require('express');
const router = express.Router();
const  userController  = require('../../controllers/userController')
const adminController = require('../../controllers/adminController')
const flightController = require('../../controllers/flightController');

//user routes
router.post('/signup', userController.create);
router.post('/signin', userController.signIn);

//admin routes
router.post('/adminSignup', adminController.create);
router.post('/adminSignin', adminController.signIn);

//flight routes
router.get('/flights', flightController.getAll);
router.get('/flight/:id', flightController.get);
router.post('/flights', flightController.create);
router.delete('/flights/:id', flightController.destroy);

module.exports = router;