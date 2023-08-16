const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// Middleware for user registration validation
const validateRegistration = (req, res, next) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'All input fields are required' });
    }
    next();
};

// Middleware for user login validation
const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'All input fields are required' });
    }
    next();
};

router.get('/', (req, res) => {
    res.send("Welcome>>>>>>>>>>>")
})
router.post('/register', validateRegistration, userController.register);
router.post('/login', validateLogin, userController.login);

module.exports = router;
