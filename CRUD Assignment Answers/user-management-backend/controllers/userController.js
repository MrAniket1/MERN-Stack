const User = require('../models/User');

const userController = {
    async register(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = new User({ name, email, password });
            await user.save();
            res.status(201).json({ msg: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ msg: 'No account associated with this email' });
            }

            if (user.password !== password) {
                return res.status(401).json({ msg: 'Password is wrong' });
            }

            res.json({ msg: 'User login successfully' });
        } catch (error) {
            res.status(500).json({ msg: 'Internal server error' });
        }
    },
};

module.exports = userController;
