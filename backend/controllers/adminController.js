const { UserModel } = require('../models');

module.exports = {
  signIn: async (req, res) => {
    const { username: email, password } = req.body;

    try {
      const user = await UserModel.findOne({ where: { email, type: 'admin' } });

      if (!user || !(await user.verifyPassword(password))) {
        return res.status(400).json({ message: 'Invalid email or password.' });
      }

      const token = user.getJwt();
      res.json({ token, user: user.filterFields() });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};
