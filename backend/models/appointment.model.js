const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Appointment = sequelize.define('Appointment', {
  appointmentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('requested', 'confirmed', 'completed', 'canceled'),
    defaultValue: 'requested',
  },
});

module.exports = Appointment;
