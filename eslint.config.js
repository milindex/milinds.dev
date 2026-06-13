const nextPlugin = require('@next/eslint-plugin-next');

module.exports = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'public/**', 'cypress.config.js'],
  },
  nextPlugin.configs['core-web-vitals'],
  {
    rules: {
      '@next/next/no-img-element': 'off',
      'import/prefer-default-export': 'off',
    },
  },
];
