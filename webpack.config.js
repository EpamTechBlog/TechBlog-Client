'use strict';

module.exports = {
  entry: './app/main.js',
  output: {
    path: "./app/build",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}