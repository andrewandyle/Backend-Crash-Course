const moment = require('moment');

const logger = (req, res, next) => {
  // The URL that was hit + the time
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
  next();
}

module.exports = logger;
