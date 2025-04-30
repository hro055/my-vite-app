module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Customize rules here
    'react/react-in-jsx-scope': 'off', // Not needed in Vite+React
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
