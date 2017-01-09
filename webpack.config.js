module.exports = {
    entry: [
        './frontend/index' // Your appʼs entry point
    ],
    output: {
        path: __dirname + '/public/',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                exclude: /(node_modules|bower_components)/,
                test: /\.((jsx?)|(tsx?))$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*)?$/,
                loader: 'url?limit=50000'
            }
        ]
    }
};