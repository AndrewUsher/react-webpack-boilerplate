const isDev = process.env.NODE_ENV !== 'development'

module.exports = {
  "extends": "eslint:recommended",
  "plugins": [
    "import",
    "react"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "indent": ["error",2],
    "spaced-comment": ["error","always"],
    "keyword-spacing": ["error", {
        "before": true,
        "after": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "yield-star-spacing": [
      "error",
      "after"
    ],
    "wrap-regex": "error",
    "vars-on-top": "error",
    "valid-typeof": "error",
    "valid-jsdoc": "error",
    "use-isnan": "error",
    "template-tag-spacing": [
      "error",
      "never"
    ],
    "no-console":  isDev ? "warn" : "error",
    "no-debugger": isDev ? "warn" : "error",
    "valid-jsdoc": isDev ? "warn" : "off",
    "no-template-curly-in-string": "error",
    "array-callback-return": "warn",
    curly: "error",
    "max-classes-per-file": ["error", 2],
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": ["error", {
      "boolean": true,
      "number": true,
      "string": true
    }],
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-loop-func": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-proto": "error",
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-throw-literal": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-warning-comments": ["warn", {
      terms: ["todo", "fix", "fixme", "improvement", "refactor"]
    }],
    "prefer-promise-reject-errors": "error",
    "radix": "error",
    "require-await": "error",
    "no-use-before-define": "error",
    "global-require": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-sync": "error",
    "array-bracket-spacing": ["error", "always"],
    "comma-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-names": ["error", "always"],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict",
      "align": "value",
    }],
    "keyword-spacing": ["error", {
      "before": true,
      "after": true
    }],
    "lines-between-class-members": ["error", "always"],
    "max-len": ["error", {
      "code": 100,
      "tabWidth": 2,
      "comments": 120,
      "ignoreUrls": true
    }],
    "max-lines": ["error", {
      "max": 300,
      "skipBlankLines": true,
      "skipComments": true,
    }],
    "max-statements": ["error", 8],
    "newline-per-chained-call": ["error", {
      "ignoreChainWithDepth": 2
    }],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "error",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": "error",
    "one-var": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "quote-props": ["error", "consistent-as-needed"],
    "quotes": ["error", "single", {
      "allowTemplateLiterals": true
    }],
    "no-unused-vars": ["error", {
      "varsIgnorePattern": "[rR]eact"
    }],
    "import/prefer-default-export": ["error", "always"],
    "import/no-webpack-loader-syntax": ["error", "always"],
    "import/no-useless-path-segments": ["error", "always"],
    "import/no-unresolved": "error",
    "import/no-self-import": "error",
    "import/no-named-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-mutable-exports": "error",
    "import/no-duplicates": "error",
    "import/no-anonymous-default-export": ["error", {
      "allowArray": false,
      "allowArrowFunction": false,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowCallExpression": true, // The true value here is for backward compatibility
      "allowLiteral": false,
      "allowObject": false
    }],
    "import/newline-after-import": ["error", {
      count: 2
    }],
    "import/max-dependencies": ["error", {
      "max": 8
    }],
    "import/group-exports": "error",
    "import/first": "error",
    "import/exports-last": "error",
    "import/export": "error",
    "import/default": "error",
    "react/button-has-type": ["error", {
      "submit": false
    }],
    "react/destructuring-assignment": ["error", "always"],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-curly-spacing": ["error", {
      "when": "always"
    }],
    "react/jsx-handler-names": ["error", {
      "eventHandlerPrefix": "handle,
      "eventHandlerPropPrefix": "on"
    }],
    "react/jsx-indent-props": ["error", 2 "false"],
    "react/jsx-indent": ["error", 2, 2],
    "react/jsx-max-props-per-line": ["error", {
      "maximum": 1,
      "when": "always"
    }],
    "react/jsx-no-bind": ["error", {
      "ignoreDOMComponents": false,
      "ignoreRefs": false,
      "allowArrowFunctions": false,
      "allowFunctions": false,
      "allowBind": false
    }],
    "react/jsx-no-duplicate-props": ["error", {
      "ignoreCase": true
    }],
    "react/jsx-no-literals": ["error", {
      "noStrings": false
    }],
    "react/jsx-no-target-blank": ["error", {
      "enforceDynamicLinks": "never"
    }],
    "react/jsx-no-undef": ["error", {
      "allowGlobals": true
    }],
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-sort-props": ["error", {
      "callbacksLast": true,
      "shorthandFirst": true,
      "shorthandLast": false,
      "ignoreCase": true,
      "noSortAlphabetically": false,
      "reservedFirst": true,
    }],
    "react/no-access-state-in-setstate": "error",
    "react/no-danger": "error",
    "react/no-deprecated": ["error", {
      "react": "16.4.0"
    }],
    "react/no-direct-mutation-state": "error",
    "react/no-multi-comp": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-stateless-function": "error",
    "react/require-optimization": "error",
    "react/self-closing-comp": ["error", {
      "component": true, 
      "html": true
    }]
  }
}
