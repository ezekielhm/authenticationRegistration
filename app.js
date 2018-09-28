const express = require('express');
const app = express();

const routes = require('./config/routes');

app.use('/api',routes);

app.listen(3000, () => console.log('Server running on port 3000'))