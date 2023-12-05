const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
  serviceId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  serviceName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  serviceImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  serviceDescription: {
    type: DataTypes.TEXT,
  },
  serviceSlug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Service;
