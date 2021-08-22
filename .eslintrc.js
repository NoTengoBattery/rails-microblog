module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  plugins: ['react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      classes: false,
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  ignorePatterns: [
    '.bundle/**/*',
    'node_modules/**/*',
    'public/**/*',
    'tmp/**/*',
    'vendor/bundle/**/*'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
        'react-hooks',
        '@typescript-eslint',
        '@typescript-eslint/eslint-plugin'
      ],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'standard'
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error']
      }
    }
  ]
}
