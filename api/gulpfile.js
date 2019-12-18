const {createBuildWorkflow} = require("./gulp/workflows");
const {createLintWorkflow} = require("@archiveboy/toolbox/workflows");

const moduleName = "api";

module.exports = {
    build: createBuildWorkflow(moduleName),
    lint: createLintWorkflow(moduleName)
};
