module.exports = {
  env: { browser: 1 },
  extends: '@bsonntag',
  overrides: [
    {
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-use-before-define': 'off',
      },
    },
  ],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off', // Link props are checked by TypeScript
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
