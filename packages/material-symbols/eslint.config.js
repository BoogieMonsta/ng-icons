const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../../eslint.config.js');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...baseConfig,
  ...compat
    .config({
      extends: [
        'plugin:@nx/angular',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
    })
    .map(config => ({
      ...config,
      files: ['**/*.ts'],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'ng',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'ng',
            style: 'kebab-case',
          },
        ],
      },
    })),
  ...compat
    .config({ extends: ['plugin:@nx/angular-template'] })
    .map(config => ({
      ...config,
      files: ['**/*.html'],
      rules: {},
    })),
  ...compat.config({ parser: 'jsonc-eslint-parser' }).map(config => ({
    ...config,
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredDependencies: [
            '@angular/core',
            'jest-preset-angular',
            '@eslint/eslintrc',
            '@eslint/js',
          ],
        },
      ],
    },
  })),
];
