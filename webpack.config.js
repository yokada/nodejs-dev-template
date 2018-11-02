const path = require('path');
const nodeExternals = require("webpack-node-externals");
const webpack = require('webpack'); //to access built-in plugins


module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  optimization: {
    // We no not want to minimize our code.
    minimize: false,
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: {
    // Turn off size warnings for entry points
    hints: false
  },
  plugins: [
    new webpack.DefinePlugin({ CONFIG: JSON.stringify(require("config")) })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      }
    ]
  },
  resolve: {
    alias: {
      '@your-src': path.resolve(__dirname, 'src/')
    }
  }
};
