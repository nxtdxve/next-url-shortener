const crypto = require('crypto');

// Generate a random string of 6 characters
function generateShortCode() {
  return crypto.randomBytes(3).toString('hex');
}

module.exports = {
  generateShortCode,
};
