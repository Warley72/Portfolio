/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// next.config.js
const path = require('path');

module.exports = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  };