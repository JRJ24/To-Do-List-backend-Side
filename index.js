const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
const { config } = require('./src/config');
const debug = require('debug')('app:server');
const { taskAPIRoutes } = require('./src/Tasks');
const { userAPIRoutes } = require('./src/users');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect(config.dbUri)
    .then(() => debug('MongoDB connected successfully'))
    .catch(err => debug('MongoDB connection error:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false
}))
app.use(cors());

taskAPIRoutes(app);
userAPIRoutes(app);

app.listen(config.port, () => {
    debug(`localhost:${config.port}`);
});
