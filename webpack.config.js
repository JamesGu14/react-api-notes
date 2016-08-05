var webpack = require('webpack')

module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  debug: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
