
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Project-specific Overrides
    'import/no-unresolved': '\\.scss$',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    // Modified Ts rules (to match AirBnB rules)
    '@typescript-eslint/indent': ['error', 2],

    // Disabled Ts rules (to let AirBnB rules deal with it)
    '@typescript-eslint/no-var-requires': 'off',
  },
  env: {
    browser: true,
  },
};