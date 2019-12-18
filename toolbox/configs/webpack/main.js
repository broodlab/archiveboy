const {createWebpackConfig} = require("./utils");

module.exports = createWebpackConfig({
    entry: "./src/main/index.ts",
    outputFilePath: "main.js",
    tsconfigFilePath: "tsconfig.main.json"
});
