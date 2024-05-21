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
  pageTitle: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  pageDescription: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
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
  onCarousel: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true
  },
  highlights: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '[]',
    get: function () {
      return JSON.parse(this.getDataValue('highlights') || '[]');
    },
    set: function (val) {
      return this.setDataValue('highlights', JSON.stringify(val));
    }
  },
});

module.exports = Service;
