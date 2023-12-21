const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Holiday = sequelize.define('Holiday', {
  holidayId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  holidayDate: {
    type: DataTypes.DATEONLY,
    unique:true
  },
  holidayTitle: {
    type: DataTypes.STRING,
  },
});

module.exports = Holiday;
