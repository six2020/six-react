const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: path.join(__dirname, '../src/server/app.tsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'app.js'
    },

    target: 'node',
    // webpack-node-externals
    externals: [nodeExternals()],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    },
}