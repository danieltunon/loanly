module.exports = {
  env: {
      es6: true,
  },
  extends: 'airbnb-base',
  rules: {
      indent: [2, 2],
      'linebreak-style': [2, 'unix'],
      quotes: [2, 'single'],
      semi: [2, 'always'],
      'no-console': 0,
      'spaced-comment': 0,
      'no-plusplus': 0,
      'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }],
      'no-bitwise': 0,
      eqeqeq: 0,
      'no-mixed-operators': 0
  },
  globals: { }
}
