/* eslint-disable quote-props */
module.exports = {
  "extends": [
    "eslint-config-airbnb",
    "plugin:lodash/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "plugins": ["lodash", "flowtype", "import"],
  "globals": {
    "__DEV__": false,
    "__TEST__": false,
    "__RELEASE__": false,
    "API_PREFIX": false,
    "exports": false,
    "fixtures": false,
    "LOG_LEVEL": false,
    "sinon": false,
    "SLOW_TEST_TIMEOUT": false,
    "TestUtils": false,
    "expect": false,
  },
  "ecmaFeatures": {
    "templateStrings": true,
  },
  "rules": {
    "lodash/prefer-lodash-method": [2, {"except": ["find"]}],
    "max-len": [2, 100, 2, {"ignorePattern": "(^import)|(^} from)"}],
    "no-multiple-empty-lines": [2, {"max": 1, "maxBOF": 0, "maxEOF": 0}],
    "object-curly-spacing": [2, "never"],
    "quotes": [2, "double"],
    "import/no-extraneous-dependencies": [2, {"devDependencies": true}],
    "react/jsx-curly-spacing": [2, "never", {"allowMultiline": true}],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-indent": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-no-duplicate-props": [2, {"ignoreCase": true}],
    "react/sort-prop-types": [2, {
      "callbacksLast": true,
      "ignoreCase": true,
      "requiredFirst": false,
    }],
    "react/sort-comp": [2, {
      "order": [
        "type-annotations",
        "static-methods",
        "lifecycle",
        "/^on.+$/",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "everything-else",
        "/^render.+$/",
        "render",
      ],
    }],

    "no-duplicate-imports": [0],
    "import/no-duplicates": [2],

    "flowtype/boolean-style": [1, "boolean"],
    "flowtype/define-flow-type": 1,
    "flowtype/delimiter-dangle": [1, "only-multiline"],
    "flowtype/generic-spacing": [1, "never"],
    "flowtype/no-dupe-keys": 2,
    "flowtype/no-weak-types": [2, {
      "any": true,
      "Object": true,
      "Function": true,
    }],
    "flowtype/require-valid-file-annotation": 1,
    "flowtype/semi": 2,
    "flowtype/space-after-type-colon": [1, "always"],
    "flowtype/space-before-generic-bracket": [1, "never"],
    "flowtype/space-before-type-colon": [1, "never"],
    "flowtype/type-id-match": [1, "^([A-Z][a-z0-9]+)+"],
    "flowtype/union-intersection-spacing": [1, "always"],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 2,

    "arrow-body-style": 0,
    "func-names": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    "no-case-declarations": 0,
    "no-else-return": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-no-bind": 0,
    "react/prefer-es6-class": 0,
  },
};
