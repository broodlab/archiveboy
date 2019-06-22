const {createDevUnitTestWorkflow, createLintWorkflow} = require("gulp-tasks-and-workflows/workflows");
const {createBuildWorkflow} = require("./gulp/workflows");

const moduleName = "gui";

module.exports = {
    build: createBuildWorkflow(moduleName),
    "dev-unit-test": createDevUnitTestWorkflow(moduleName),
    lint: createLintWorkflow(moduleName)
};
