const {createWebpackConfig} = require("./utils");
const {sync} = require("glob");

module.exports = createWebpackConfig({
    entry: sync("./src/spec/integration/**/*.ts"),
    outputFilePath: "spec/integration.js",
    tsconfigFilePath: "tsconfig.integration.json",
});
