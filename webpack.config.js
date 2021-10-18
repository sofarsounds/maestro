const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals(), path.resolve(__dirname, 'src')],
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      concatenateModules: true,
      analyzerMode: 'static',
    })
  ],
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
        test: /\.(otf|eot|ttf|woff|woff2|gif|jpe?g|png|ico).*$/,
        loader: 'url-loader'
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
          options: {
            limit: 8192
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
