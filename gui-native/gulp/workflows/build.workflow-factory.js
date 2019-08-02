const {createCompileTsFilesTask, createLintTsFilesTask, createRunIntegrationTestsTask, createRunUnitTestsTask} = require("broodlab-toolbox/tasks");
const {parallel, series} = require("gulp");
const {createBuildGuiNativeTask} = require("../tasks");

const failAfterError = true;

exports.createBuildWorkflow = moduleName =>
    series(
        parallel(
            createBuildGuiNativeTask(moduleName),
            createCompileTsFilesTask(moduleName, "integration.js", failAfterError),
            createCompileTsFilesTask(moduleName, "unit.js", failAfterError)
        ),
        createRunUnitTestsTask(moduleName, failAfterError),
        createRunIntegrationTestsTask(moduleName, failAfterError),
        createLintTsFilesTask(moduleName, failAfterError)
    );
