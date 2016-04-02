var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'Aperture',
        libraryTarget: 'umd'
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015']
                },
                include: path.join(__dirname, 'src')
            }
        ]
    },
    externals: {
    }
}