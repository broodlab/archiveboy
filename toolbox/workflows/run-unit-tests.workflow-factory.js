const {createCompileTsFilesTask, createDeleteDistFolderTask, createRunUnitTestsTask} = require("../tasks");
const {series} = require("gulp");

exports.createRunUnitTestsWorkflow = moduleName =>
    series(createDeleteDistFolderTask(moduleName), createCompileTsFilesTask(moduleName, "unit.js"), createRunUnitTestsTask(moduleName));
