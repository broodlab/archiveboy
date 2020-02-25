const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const webpackNodeExternals = require("webpack-node-externals");

module.exports.createWebpackConfig = ({entry, outputFilePath, tsconfigFilePath}) => {
    return {
        devtool: "source-map",
        entry,
        externals: [webpackNodeExternals()],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: {
                        configFile: tsconfigFilePath
                    }
                }
            ]
        },
        node: {
            __dirname: false
        },
        output: {
            filename: outputFilePath,
            libraryTarget: "umd"
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            plugins: [new TsconfigPathsPlugin({configFile: tsconfigFilePath})]
        },
        target: "node"
    };
};
