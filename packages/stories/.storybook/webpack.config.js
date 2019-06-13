const path = require('path');

module.exports = ({ config }) => {
  config.devtool = 'inline-source-map';
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    enforce: 'pre'
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    uikit: path.resolve(__dirname, '../../uikit/src')
  };
  return config;
};
