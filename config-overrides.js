/* eslint-disable import/no-unresolved */
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathPrefix: '~',
      rootPathSuffix: 'src',
    },
  ]),
  addBabelPlugin([
    'babel-plugin-styled-components',
    {
      displayName: true,
      fileName: false,
    },
  ])
);
