const {createConfigureTargetEnvironment} = require("../tasks");
const {series} = require("gulp");

exports.createConfigureTargetEnvironmentElectronRendererWorkflow = moduleName =>
    series(createConfigureTargetEnvironment(moduleName, "electron-renderer"));
