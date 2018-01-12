module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              '~': __dirname
            }
          }
        }
      }
    }
  },
  // add your custom rules here
  rules: {
    'max-len': ['warn', 240],
    'no-bitwise': 'off',
    'comma-dangle': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never'
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'import/prefer-default-export': 'off',
    'no-alert': 'off',
    'no-mixed-operators': 'off'
  },
  globals: {}
}
