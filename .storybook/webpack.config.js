const path = require('path');

module.exports = ({ config }) => {
  config.devtool = 'inline-source-map';
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      }
    ]
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    uikit: path.resolve(__dirname, '../src')
  };

  return config;
};
