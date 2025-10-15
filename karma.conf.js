module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            { pattern: 'tests/setup-jasmine.js', watched: false },
            { pattern: 'src/**/*.spec.jsx', watched: false },
            { pattern: 'src/**/*.spec.js', watched: false }

        ],
        preprocessors: {
            'tests/setup-jasmine.js': ['esbuild'],
            'src/**/*.spec.jsx': ['esbuild'],
            'src/**/*.spec.js': ['esbuild']

        },
        esbuild: {
            jsx: 'automatic',
            target: 'es2018',
            sourcemap: 'inline',
            loader: {
                '.js': 'jsx',
                '.jsx': 'jsx',
                '.png': 'dataurl',
                '.jpg': 'dataurl',
                '.jpeg': 'dataurl',
                '.svg': 'dataurl',
                '.gif': 'dataurl',
                '.webp': 'dataurl'
            }
        },
        reporters: ['spec'],
        specReporter: { suppressSkipped: true },
        browsers: ['ChromeHeadless'],
        singleRun: true,
        client: { clearContext: false }
    });
};
