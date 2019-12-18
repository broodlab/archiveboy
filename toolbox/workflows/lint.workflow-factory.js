const {createLintJsFilesTask, createLintTsFilesTask} = require("../tasks");
const {parallel} = require("gulp");

exports.createLintWorkflow = moduleName => parallel(createLintJsFilesTask(moduleName), createLintTsFilesTask(moduleName));
