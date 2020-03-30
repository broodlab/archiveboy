const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunIntegrationTestsTask} = require("../tasks");
const {series, watch} = require("gulp");
const {logWatchFilesChanged} = require("../utils");

exports.createDevIntegrationTestWorkflow = (moduleName) => {
    const devIntegrationTestTasks = series(
        createDeleteDistFolderTask(moduleName),
        createCompileTsFilesTask(moduleName, "integration.js"),
        createRunIntegrationTestsTask(moduleName)
    );

    return series(devIntegrationTestTasks, function watchingFiles() {
        watch(["src/**/*.ts", "!src/spec/e2e/**/*.ts", "!src/spec/unit/**/*.ts"], series(logWatchFilesChanged, devIntegrationTestTasks));
    });
};
