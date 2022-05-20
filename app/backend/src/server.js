const dotenv = require('dotenv');

const App = require('./app');

dotenv.config();

const PORT = process.env.PORT || 3001;

new App().start(PORT);
