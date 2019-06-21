const {createLintWorkflow} = require("gulp-tasks-and-workflows/workflows");
const {createBuildWorkflow} = require("./gulp/workflows");

const moduleName = "gui";

module.exports = {
    build: createBuildWorkflow(moduleName),
    lint: createLintWorkflow(moduleName)
};
