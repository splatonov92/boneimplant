module.exports = {
    entry: [
        './frontend/index' // Your appʼs entry point
    ],
    output: {
        path: __dirname + '/public/',
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                exclude: /(node_modules|bower_components)/,
                loader: "ts-loader" },
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
            query: {
                presets: ['es2015', 'react']
            }
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
        ],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};