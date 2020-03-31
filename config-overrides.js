const { override, fixBabelImports } = require('customize-cra'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
