module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest:true
    },
    extends: [
      // 'plugin:react/recommended',
      // 'standard',
      // 'plugin:prettier/recommended'
      'alloy',
      'alloy/typescript'
    ],
    // parser: '@typescript-eslint/parser',
    // parserOptions: {
    //   ecmaFeatures: {
    //     jsx: true
    //   },
    //   ecmaVersion: 12,
    //   sourceType: 'module'
    // },
    settings: {
      // react: {
      //   version: 'detect',
      // },
    },
    plugins: [
      // 'react',
      // '@typescript-eslint'
    ],
    rules: {
      // 'react/prop-types': 'off',
      // 'react/jsx-curly-brace-presence': 'error',
      // // React 17
      // 'react/jsx-uses-react': 'off',
      // 'react/react-in-jsx-scope': 'off',
      // 'react/self-closing-comp': [
      //   'error',
      //   {
      //     component: true,
      //     html: true,
      //   },
      // ],
      // 'react/jsx-boolean-value': 'error',
      // 'prefer-template': "error",
      // 'jsx-quotes': ["error", "prefer-double"],
      // "react/jsx-tag-spacing": "error"
    }
  }
  