const {createWebpackConfig} = require("./utils");
const {sync} = require("glob");

module.exports = createWebpackConfig({
    entry: sync("./src/spec/unit/**/*.ts"),
    outputFilePath: "spec/unit.js",
    tsconfigFilePath: "tsconfig.unit.json"
});
