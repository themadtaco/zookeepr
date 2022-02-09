const express = require('express');
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// make the public folder a static resource that can be accessed at any time without having to have a specific endpoint set
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
