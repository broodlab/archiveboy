const {
    createCompileTsFilesTask,
    createLintTsFilesTask,
    createRunIntegrationTestsTask,
    createRunUnitTestsTask
} = require("gulp-tasks-and-workflows/tasks");
const {parallel, series} = require("gulp");
const {createBuildGuiWebTask} = require("../tasks");

const failAfterError = true;

exports.createBuildWorkflow = moduleName =>
    series(
        parallel(
            createBuildGuiWebTask(moduleName),
            createCompileTsFilesTask(moduleName, "unit-tests.js", failAfterError),
            createCompileTsFilesTask(moduleName, "integration-tests.js", failAfterError)
        ),
        createLintTsFilesTask(moduleName, failAfterError),
        createRunUnitTestsTask(moduleName, failAfterError),
        createRunIntegrationTestsTask(moduleName, failAfterError)
    );
