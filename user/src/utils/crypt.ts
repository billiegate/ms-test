const crypto = require('crypto')

const username = crypto.randomBytes(16).toString('hex');
const password = crypto.randomBytes(16).toString('hex');

export { username, password};