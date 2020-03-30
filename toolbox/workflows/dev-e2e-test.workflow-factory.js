const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunE2eTestsTask} = require("../tasks");
const {series, watch} = require("gulp");
const {logWatchFilesChanged} = require("../utils");

exports.createDevE2eTestWorkflow = (moduleName) => {
    const devE2eTestTasks = series(
        createDeleteDistFolderTask(moduleName),
        createCompileTsFilesTask(moduleName, "e2e.js"),
        createRunE2eTestsTask(moduleName)
    );

    return series(devE2eTestTasks, function watchingFiles() {
        watch(["src/**/*.ts", "!src/spec/integration/**/*.ts", "!src/spec/unit/**/*.ts"], series(logWatchFilesChanged, devE2eTestTasks));
    });
};
