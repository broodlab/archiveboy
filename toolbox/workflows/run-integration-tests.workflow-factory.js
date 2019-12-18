const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunIntegrationTestsTask} = require("../tasks");
const {series} = require("gulp");

exports.createRunIntegrationTestsWorkflow = moduleName =>
    series(createDeleteDistFolderTask(moduleName), createCompileTsFilesTask(moduleName, "integration.js"), createRunIntegrationTestsTask(moduleName));
