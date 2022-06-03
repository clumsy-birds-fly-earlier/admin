const REACT_APP_API = process.env.REACT_APP_API;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [REACT_APP_API === 'dev' && 'react-refresh/babel'].filter(Boolean),
};
