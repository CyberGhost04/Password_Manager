const crypto = require('crypto');
console.log('Key:', crypto.randomBytes(32).toString('base64'));
console.log('IV:', crypto.randomBytes(16).toString('base64'));
