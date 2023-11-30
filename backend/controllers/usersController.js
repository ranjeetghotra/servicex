const bcrypt = require('bcrypt');
const { UserModel } = require('../models');

const signUp = async (req, res) => {
    const { name, phone, email, password } = req.body;

    try {
        const user = await UserModel.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: 'Email already exist' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            name,
            phone,
            email,
            passwordHash: hashedPassword,
            type: 'customer',
        });

        const token = newUser.getJwt();
        res.json({ token, user: newUser.filterFields() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const signIn = async (req, res) => {
    const { username: email, password } = req.body;

    try {
        const user = await UserModel.findOne({
            where: { email }, attributes: {
                exclude: ['active', 'createdAt', 'updatedAt']
            }
        });

        if (!user || !(await user.verifyPassword(password))) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        const token = user.getJwt();
        res.json({ token, user: user.filterFields() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    signUp,
    signIn,
};
