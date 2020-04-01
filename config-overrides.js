/* eslint-disable fp/no-mutation, no-param-reassign, @typescript-eslint/no-var-requires, @typescript-eslint/explicit-function-return-type */
const compose = require('lodash/fp/compose');
const { fixBabelImports } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = (config, env) => {
  const override = compose(configureAntToImportStylesForComponents, configureReactHotLoader);
  return override(config, env);
};

function configureAntToImportStylesForComponents(config, env) {
  return fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })(config, env);
}

function configureReactHotLoader(config, env) {
  config = rewireReactHotLoader(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
  };

  return config;
}
