require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes');
const { AppointmentModel, ServiceModel } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

AppointmentModel.belongsTo(ServiceModel, {
  foreignKey: 'serviceId',
  targetKey: 'serviceId',
});

ServiceModel.hasMany(AppointmentModel, {
  foreignKey: 'serviceId',
  sourceKey: 'serviceId',
});

sequelize.sync({ force: false });

// Express setup
app.use(express.json({ limit: '50mb' }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/admin', routes.adminRoutes);
app.use('/user', routes.userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
