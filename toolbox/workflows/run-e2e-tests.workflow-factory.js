const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunE2eTestsTask} = require("../tasks");
const {series} = require("gulp");

exports.createRunE2eTestsWorkflow = moduleName =>
    series(createDeleteDistFolderTask(moduleName), createCompileTsFilesTask(moduleName, "e2e.js"), createRunE2eTestsTask(moduleName));
