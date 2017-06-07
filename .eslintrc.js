module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["standard", "standard-react"],
  "globals": {
    "describe": false,
    "browser": true,
    "expect": false,
    "before":false,
    "it": false
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": [2,2],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "no-unused-vars": ["warn",{ "vars": "all", "args": "after-used" }],
    "arrow-parens": ["error", "as-needed"],
    "camelcase": "warn",
    "vars-on-top": 1,
    "no-console": 1
  }
};
