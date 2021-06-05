const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  plugins: [new MiniCssExtractPlugin()],
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'output'),
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(''),
    compress: true,
    port: 7000,
  }
};
