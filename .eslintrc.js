module.exports = {
  extends: [
    '@transferwise',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
    'plugin:jest/all',
    'plugin:react-hooks/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
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
    '@typescript-eslint/no-unused-vars': 'error',
    'jest/prefer-expect-assertions': 0, // only useful in error tests
    'jest/no-hooks': 0, // acceptable for setup and improves readability
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
    'testing-library/no-debug': 'error',
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
  },
};
