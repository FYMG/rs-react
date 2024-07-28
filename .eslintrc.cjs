module.exports = {
  noInlineConfig: true,
  root: true,

  ignorePatterns: [
    "dist",
    "build",
    '.eslintrc.cjs',
    "node_modules",
    ".yarn",
    ".pnp.cjs",
    ".pnp.loader.mjs",
  ],

  plugins: [
    'prettier',
    'sonarjs',
    'unicorn',
  ],

  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended-legacy',
    'plugin:unicorn/recommended',
    'airbnb',
    'prettier',
  ],

  rules: {
    'prettier/prettier': 'error',
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

  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      env: { browser: true, es2020: true, node: true },
      plugins: [
        'react-refresh',
        'react-compiler',
        '@typescript-eslint',
        'typescript-sort-keys',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: ['./tsconfig.app.json', './tsconfig.json', './tsconfig.node.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'no-param-reassign': 0, // bad redux experience
        'sonarjs/no-duplicate-string': 0,
        'unicorn/no-null': 0,
        '@typescript-eslint/no-throw-literal': 0, //need for throw Response
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        "@typescript-eslint/no-explicit-any": "error",
        'prettier/prettier': 'error',
        'react-compiler/react-compiler': 'error',
        '@typescript-eslint/indent': 0,
        'typescript-sort-keys/interface': 'error',
        'typescript-sort-keys/string-enum': 'error',
        'react/react-in-jsx-scope': 0,
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/no-extraneous-dependencies': 0,
        'react/jsx-no-constructed-context-values': 0,
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
        {
          files: ['*.text.ts', '*.test.tsx'],
          rules: {
            '@typescript-eslint/unbound-method': 0,
          }
        },
      ],
    },
  ],

};
