const adminController = require('./adminController');
const userController = require('./usersController');
const serviceController = require('./serviceController');
const appointmentController = require('./appointmentController')
const contactController = require('./contactController')
const holidayController = require("./holidayController")
module.exports = {
  adminController,
  userController,
  serviceController,
  appointmentController,
  contactController,
  holidayController
};
