/** @type {import('jest').Config} */
const config = {
  verbose: true,
 "preset": "jest-puppeteer",
 globalSetup: './setup.js',
 globalTeardown: './teardown.js',
 testEnvironment: './puppeteer_environment.js'
};

module.exports = config;
