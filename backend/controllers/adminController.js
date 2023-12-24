const { Op } = require('sequelize');
const { UserModel } = require('../models');
const { HolidayModel } = require('../models');
const { AppointmentModel } = require('../models');

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
  },
  dashboard: async (req, res) => {
    try {
      const currentDate = new Date();
      const [
        requestedAppointments,
        confirmedAppointments,
        completedAppointments,
        upcomingHolidays,
      ] = await Promise.all([
        AppointmentModel.count({ where: { status: 'requested' } }),
        AppointmentModel.count({ where: { status: 'confirmed' } }),
        AppointmentModel.count({ where: { status: 'completed' } }),
        HolidayModel.count({
          where: {
            holidayDate: {
              [Op.gte]: currentDate,
            },
          },
        }),
      ]);
      const counts = {
        requestedAppointments,
        confirmedAppointments,
        completedAppointments,
        upcomingHolidays
      }
      res.json({ counts })
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
};
