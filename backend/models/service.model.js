const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
  service_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  service_description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Service;
