const {createLintTsFilesTask} = require("gulp-tasks-and-workflows/tasks");
const {series} = require("gulp");
const {createBuildGuiNativeTask} = require("../tasks");

const failAfterError = true;

exports.createBuildWorkflow = moduleName => series(createBuildGuiNativeTask(moduleName), createLintTsFilesTask(moduleName, failAfterError));
