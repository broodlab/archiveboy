const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunIntegrationTestsTask} = require("../tasks");
const {series} = require("gulp");

const failAfterError = true;

exports.createRunIntegrationTestsWorkflow = (moduleName) =>
    series(
        createDeleteDistFolderTask(moduleName),
        createCompileTsFilesTask(moduleName, "integration.js", failAfterError),
        createRunIntegrationTestsTask(moduleName, failAfterError)
    );
