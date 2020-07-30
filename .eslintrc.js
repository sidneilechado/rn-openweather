module.exports = {
  env: {
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
    'react/no-unused-state': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
