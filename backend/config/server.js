const { resolve } = require('path');
const { config } = require('dotenv');
config(resolve('../.env'));

const {
  PORT: port,
  NODE_ENV: environment = 'development'
} = process.env;

module.exports = {
  port,
  environment,
  isProduction: environment === 'production'
};
