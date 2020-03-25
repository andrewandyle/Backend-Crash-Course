const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

// // Initial example of sending a file
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Init middleware
// app.use(logger);

// Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// Set the view engine
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage route
app.get('/', (req, res) => res.render('index', {
  title: 'Member App',
  members
}));

// Set public folder to static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

// Listen on a port
// Check the environment variable for port, otherwise port is 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
