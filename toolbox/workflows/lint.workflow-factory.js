const {createLintJsFilesTask, createLintTsFilesTask} = require("../tasks");
const {parallel} = require("gulp");

const failAfterError = true;

exports.createLintWorkflow = (moduleName) =>
    parallel(createLintJsFilesTask(moduleName, failAfterError), createLintTsFilesTask(moduleName, failAfterError));
