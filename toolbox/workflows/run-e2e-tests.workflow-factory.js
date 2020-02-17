const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunE2eTestsTask} = require("../tasks");
const {series} = require("gulp");

const failAfterError = true;

exports.createRunE2eTestsWorkflow = moduleName =>
    series(
        createDeleteDistFolderTask(moduleName),
        createCompileTsFilesTask(moduleName, "e2e.js", failAfterError),
        createRunE2eTestsTask(moduleName, failAfterError)
    );
