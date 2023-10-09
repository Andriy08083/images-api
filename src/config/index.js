const dotenv = require('dotenv');
const convict = require('convict');

dotenv.config();

const config = convict({
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 4000,
    env: 'API_PORT',
  },
});

config.validate({ allowed: 'strict' });

module.exports = config.getProperties();
