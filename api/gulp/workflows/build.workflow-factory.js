const {createCompileTsFilesTask, createDeleteDistFolderTask, createLintTsFilesTask} = require("@archiveboy/toolbox/tasks");
const {series} = require("gulp");

const failAfterError = true;

exports.createBuildWorkflow = moduleName =>
    series(
        createDeleteDistFolderTask(moduleName),
        createCompileTsFilesTask(moduleName, "main.js", failAfterError),
        createLintTsFilesTask(moduleName, failAfterError)
    );
