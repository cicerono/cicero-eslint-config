module.exports = {
  parser: "babel-eslint",
  plugins: [],
  ecmaFeatures: {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "destructuring": true,
    "modules": true,
  },
  rules: {
    "brace-style": [2, "1tbs"],
    "comma-dangle": [2, "always-multiline"],
    "comma-style": [2, "last"],
    "indent": [2, 2],
    "no-extend-native": [0],
    "no-extra-strict": [0],
    "no-multiple-empty-lines": [2, {"max": 1}],
    "no-var": [2],
    "one-var": [2, "never"],
    "prefer-const": [2],
    "space-after-keywords": [2, "always"],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "vars-on-top":[0],
  }
};
