const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
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
            options: {
              configFileName: 'tsconfig.prod.json',
              useBabel: true,
              babelCore: '@babel/core',
              babelOptions: {
                babelrc: false
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2|gif|jpe?g|png|ico|svg).*$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
