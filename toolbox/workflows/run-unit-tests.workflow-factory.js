const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunUnitTestsTask} = require("../tasks");
const {series} = require("gulp");

const failAfterError = true;

exports.createRunUnitTestsWorkflow = (moduleName) =>
    series(
        createDeleteDistFolderTask(moduleName),
        createCompileTsFilesTask(moduleName, "unit.js", failAfterError),
        createRunUnitTestsTask(moduleName, failAfterError)
    );
