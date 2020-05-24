const {createDeleteDistFolderTask, createLintTsFilesTask} = require("@archiveboy/toolbox/tasks");
const {parallel, series} = require("gulp");
const {createBuildGuiWebTask} = require("../tasks");

const failAfterError = true;

exports.createBuildWorkflow = (moduleName) =>
    series(createDeleteDistFolderTask(moduleName), parallel(createBuildGuiWebTask(moduleName)), createLintTsFilesTask(moduleName, failAfterError));
