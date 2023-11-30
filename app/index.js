
const path = require('path');
const { merge } = require('webpack-merge');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {


    if (isServer) {
      return merge(config, {
        entry () {
            console.log("reached")
          return config.entry().then((entry) => {
            return Object.assign({}, entry, { 'collection.worker': path.resolve(process.cwd(), './scripts/update_stock.py') })
          })
        }
      });
    } else {
      return config;
    }
  }
};