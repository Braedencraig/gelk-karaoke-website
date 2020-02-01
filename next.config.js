const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withImages();
module.exports = withCSS({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|gif|woff2|ttf|svg|png|jpg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
});
