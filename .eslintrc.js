module.exports = {
  extends: [
    'eslint-config-airbnb',
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    /* 
      Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
      Make sure this is always the last configuration in the extends array.
    */
    'plugin:prettier/recommended',
    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',
    'prettier',
    /* 
      Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin
      that would conflict with prettier 
    */
    'prettier/@typescript-eslint',
  ],
  env: {
    commonjs: true,
    node: true,
    mocha: true,
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/extensions': ['off'],
    'import/no-unresolved': ['off'],
    'max-len': [2, 120],
    'arrow-parens': ['error', 'always'],
    'prettier/prettier': ['error'],
    semi: ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
