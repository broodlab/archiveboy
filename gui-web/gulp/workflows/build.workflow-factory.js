const {
    createCompileTsFilesTask,
    createDeleteDistFolderTask,
    createLintTsFilesTask,
    createRunIntegrationTestsTask,
    createRunUnitTestsTask,
} = require("@archiveboy/toolbox/tasks");
const {parallel, series} = require("gulp");
const {createBuildGuiWebTask} = require("../tasks");

const failAfterError = true;

exports.createBuildWorkflow = (moduleName) =>
    series(
        createDeleteDistFolderTask(moduleName),
        parallel(
            createBuildGuiWebTask(moduleName),
            createCompileTsFilesTask(moduleName, "unit.js", failAfterError),
            createCompileTsFilesTask(moduleName, "integration.js", failAfterError)
        ),
        createLintTsFilesTask(moduleName, failAfterError),
        createRunUnitTestsTask(moduleName, failAfterError),
        createRunIntegrationTestsTask(moduleName, failAfterError)
    );
