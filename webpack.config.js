const path = require('path');
//const { menu } = require('./src/menu');

module.exports = {
  entry: './src/index.js', 
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};