const {createCompileTsFilesTask, createDeleteDistFolderTask, createLintTsFilesTask} = require("../tasks");
const {series, watch} = require("gulp");
const {logWatchFilesChanged} = require("../utils");

exports.createDevWorkflow = (moduleName) => {
    const devTasks = series(
        createDeleteDistFolderTask(moduleName),
        createCompileTsFilesTask(moduleName, "main.js"),
        createLintTsFilesTask(moduleName)
    );

    return series(devTasks, function watchingFiles() {
        watch("src/main/**/*.ts", series(logWatchFilesChanged, devTasks));
    });
};
