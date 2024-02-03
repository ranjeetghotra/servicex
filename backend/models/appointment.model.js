const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { STATUS } = require('./../core/types')

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
  customerAddress: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  customerEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  invoiceNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  orderItems: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '[]',
    get: function() {
        return JSON.parse(this.getDataValue('orderItems'));
    }, 
    set: function(val) {
        return this.setDataValue('orderItems', JSON.stringify(val));
    }
  },
  serviceId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM(STATUS.REQUESTED, STATUS.CONFIRMED, STATUS.CANCELED, STATUS.COMPLETED),
    defaultValue: STATUS.REQUESTED,
  },
});

module.exports = Appointment;
