module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    semi: 'error',
    // prettier: 1,
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
  env: {
    "react-native/react-native": true
  },
  plugins: [
    "react",
    "react-native"
  ]
};
