const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const dev = require('./webpack.dev');

module.exports = merge(dev, {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'bundle.min.js',
  },
  // plugins: [new CleanWebpackPlugin(['dist']),],
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
