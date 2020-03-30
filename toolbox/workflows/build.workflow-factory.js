const {
    createCompileTsFilesTask,
    createDeleteDistFolderTask,
    createLintTsFilesTask,
    createRunIntegrationTestsTask,
    createRunUnitTestsTask,
} = require("../tasks");
const {parallel, series} = require("gulp");
const failAfterError = true;

exports.createBuildWorkflow = (moduleName) =>
    series(
        createDeleteDistFolderTask(moduleName),
        parallel(
            createCompileTsFilesTask(moduleName, "main.js", failAfterError),
            createCompileTsFilesTask(moduleName, "unit.js", failAfterError),
            createCompileTsFilesTask(moduleName, "integration.js", failAfterError)
        ),
        createLintTsFilesTask(moduleName, failAfterError),
        createRunUnitTestsTask(moduleName, failAfterError),
        createRunIntegrationTestsTask(moduleName, failAfterError)
    );
