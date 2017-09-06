module.exports = {
  extends: 'stylelint-config-ship-shape',
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      ignore: ['after-comment'],
      ignoreAtRules: ['else']
    }],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
};
