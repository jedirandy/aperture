module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: false,
        frameworks: ['mocha', 'chai'],
        files: [
            'test/**/*.js'
        ],
        preprocessors: {
            'test/**/*.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015']
                    }
                }]
            },
            devtool: 'inline-source-map'
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['progress'],
        color: true,
        autoWatch: true
    });
}