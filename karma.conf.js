module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'tests/setup-jasmine.js',
      'tests/**/*.spec.js'
    ],

    preprocessors: {
      'tests/setup-jasmine.js': ['esbuild'],
      'tests/**/*.spec.js': ['esbuild']
    },

    esbuild: {
      jsx: 'automatic',
      target: 'es2018',
      sourcemap: 'inline',
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
        '.png': 'dataurl',
        '.jpg': 'dataurl'
      }
    },

    reporters: ['spec'],
    browsers: ['ChromeHeadless'],
    singleRun: true,

    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 10000,
    client: {
      clearContext: false,
      jasmine: { random: false }
    }
  });
};
