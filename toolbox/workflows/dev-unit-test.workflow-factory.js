const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunUnitTestsTask} = require("../tasks");
const {series, watch} = require("gulp");
const {logWatchFilesChanged} = require("../utils");

exports.createDevUnitTestWorkflow = moduleName => {
    const devUnitTestTasks = series(
        createDeleteDistFolderTask(moduleName),
        createCompileTsFilesTask(moduleName, "unit.js"),
        createRunUnitTestsTask(moduleName)
    );

    return series(devUnitTestTasks, function watchingFiles() {
        watch(["src/**/*.ts", "!src/spec/e2e/**/*.ts", "!src/spec/integration/**/*.ts"], series(logWatchFilesChanged, devUnitTestTasks));
    });
};
