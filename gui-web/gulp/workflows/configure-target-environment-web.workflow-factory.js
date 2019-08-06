const {createConfigureTargetEnvironment} = require("../tasks");
const {series} = require("gulp");

exports.createConfigureTargetEnvironmentWebWorkflow = moduleName => series(createConfigureTargetEnvironment(moduleName, "web"));
