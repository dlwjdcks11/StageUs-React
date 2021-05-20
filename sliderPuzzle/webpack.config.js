const path = require('path');

module.exports = {
    mode: 'development',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    entry: {
        app: ['./src/index']
    },

    module: {
        rules: [
            {
                test: /\.(js | jsx | ts | tsx)?/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 8000
    }
}