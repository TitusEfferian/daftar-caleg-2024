module.exports = {
  extends: [
    'mantine',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
    // Add eslint recommended rules for React hooks
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'testing-library',
    'jest',
    // Include react-hooks plugin
    'react-hooks',
  ],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    // Add or modify rules for React hooks
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
};
