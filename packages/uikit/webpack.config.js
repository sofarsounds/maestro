const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    '@sofarsounds/maestro': './src/index.tsx',
    '@sofarsounds/maestro.min': './src/index.tsx'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '@sofarsounds/maestro',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            query: {
              declaration: false
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url-loader',
        options: {
          limit: Infinity
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
