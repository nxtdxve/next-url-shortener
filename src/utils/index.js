const crypto = require('crypto');

// Generate a random string of 6 characters
function generateShortCode() {
  const shortCode = crypto.randomBytes(3).toString('hex');

  // console.log('Generated short code: ', shortCode)

  return shortCode;
}

module.exports = {
  generateShortCode,
};
