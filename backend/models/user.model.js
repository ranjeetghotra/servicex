const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  type: {
    type: DataTypes.ENUM('admin', 'employee', 'customer'),
    allowNull: false,
  },
});

User.prototype.filterFields = function () {
  const { passwordHash, active, type, createdAt, updatedAt, ...userWithoutSensitiveFields } = this.get();
  return userWithoutSensitiveFields;
};

User.prototype.verifyPassword = async function (password) {
  const { passwordHash } = this.get();
  return await bcrypt.compare(password, passwordHash);
};

User.prototype.getJwt = function () {
  const { userId, type } = this.get();
  return jwt.sign({ id: userId, type }, process.env.JWT_SECRET, { expiresIn: '1h' });;
};

module.exports = User;
