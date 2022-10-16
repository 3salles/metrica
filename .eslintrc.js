/**
*1
  This does three things:
  - Enables eslint-plugin-prettier.
  - Sets the prettier/prettier rule to "error".
  - Extends the eslint-config-prettier configuration.
  You can then set Prettier's own options inside a .prettierrc file.
*/

module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended', // 1*
  ],
  rules: {
    'react/prop-types': 0,
    'no-console': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
};
