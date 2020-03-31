module.exports = {
  extends: [
    '@transferwise',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
    'plugin:jest/all',
  ],
  plugins: ['react-hooks'],
  rules: {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/*.test.tsx', '**/*.test.ts', 'src/setupTests.ts', 'config-overrides.js'],
    }],
    '@typescript-eslint/no-use-before-define': 0, // for clean code
    '@typescript-eslint/camelcase': ['error', { // imported files use snake_case
      'properties': 'never',
      'ignoreDestructuring': true,
    }],
    'jest/prefer-expect-assertions': 0, // only useful in error tests
    'react/prop-types': 0, // TypeScript does it for us
    'jest/lowercase-name': 0, // allow component names to be capitalised
    'import/extensions': [ // workaround while https://github.com/benmosher/eslint-plugin-import/issues/1615
      'error',
      'always',
      {
        'ts': 'never',
        'tsx': 'never',
        'js': 'never',
        'jsx': 'never'
      },
    ],
  },
};
