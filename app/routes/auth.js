const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();


router.post('/login', AuthController.signIn);

router.post('/signUp', AuthController.signUp);


module.exports = router;
