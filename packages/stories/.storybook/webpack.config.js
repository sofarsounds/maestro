module.exports = ({ config }) => {
  config.devtool = 'inline-source-map';
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      },
      // Optional
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
  return config;
};
