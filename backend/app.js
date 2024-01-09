require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes');
const { AppointmentModel, ServiceModel } = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;
app.use('/static', express.static(__dirname + '/uploads'));

//changing node js thread time to utc +00:00
process.env.TZ = 'UTC';

AppointmentModel.belongsTo(ServiceModel, {
  foreignKey: 'serviceId',
  targetKey: 'serviceId',
  as: 'service',
});

ServiceModel.hasMany(AppointmentModel, {
  foreignKey: 'serviceId',
  sourceKey: 'serviceId',
  as: 'appointments',
});

sequelize.sync({ alter:true });

// Express setup
app.use(express.json({ limit: '50mb' }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Allow credentials (e.g., cookies) to be sent with the request
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    // Respond to preflight requests
    res.sendStatus(200);
  } else {
    next();
  }
});
// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/admin', routes.adminRoutes);
app.use('/user', routes.userRoutes);
app.use('/appointment', routes.appointmentRoutes)
app.use('/contact', routes.contactRoutes)
app.use('/holiday', routes.holidayRoutes);
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
