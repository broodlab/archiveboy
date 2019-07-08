const {createLintWorkflow} = require("gulp-tasks-and-workflows/workflows");

const moduleName = "gui-native";

module.exports = {
    lint: createLintWorkflow(moduleName)
};
