const {createWebpackConfig} = require("./utils");
const {sync} = require("glob");

module.exports = createWebpackConfig({
    entry: sync("./src/spec/e2e/**/*.ts"),
    outputFilePath: "spec/e2e.js",
    tsconfigFilePath: "tsconfig.e2e.json"
});
