module.exports = {
  noInlineConfig: true,
  root: true,
  env: { browser: true, es2020: true, node: true },
  plugins: [
    'react-refresh',
    'react-compiler',
    '@typescript-eslint',
    'prettier',
    'sonarjs',
    'unicorn',
    'typescript-sort-keys',
  ],
  extends: [
    'plugin:sonarjs/recommended-legacy',
    'plugin:unicorn/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['./tsconfig.app.json', './tsconfig.json', './tsconfig.node.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react-compiler/react-compiler': 'error',

    '@typescript-eslint/indent': 0,
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
    'react/react-in-jsx-scope': 0,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'import/no-extraneous-dependencies': 0,

    'react/jsx-no-constructed-context-values': 0,

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
      {
        blankLine: 'always',
        prev: ['block', 'if', 'for', 'while'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'for', 'while', 'block'],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.d.ts', '**/*.d.tsx'],
      rules: {
        'typescript-sort-keys/interface': 0,
        'typescript-sort-keys/string-enum': 0,
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
              kebabCase: true,
            },
          },
        ],
      },
    },
  ],
};
