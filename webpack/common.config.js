const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: resolve(`${__dirname}/../src/index.tsx`),

  output: {
    path: resolve(`${__dirname}/build-prod`),
    filename: '[name]-[chunkhash].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'node'],
    alias: {
      '@': resolve(`${__dirname}/src`),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      render: 'react-dom',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)$/,
        use: 'file-loader',
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/,
        use: 'url-loader',
      },
    ],
  },
};
