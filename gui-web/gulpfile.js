const {
    createBuildWorkflow,
    createConfigureTargetEnvironmentElectronRendererWorkflow,
    createConfigureTargetEnvironmentElectronWebWorkflow,
} = require("./gulp/workflows");
const {
    createLintWorkflow,
} = require("@archiveboy/toolbox/workflows");

const moduleName = "gui-web";

module.exports = {
    "configure-target-env-electron-renderer": createConfigureTargetEnvironmentElectronRendererWorkflow(moduleName),
    "configure-target-env-web": createConfigureTargetEnvironmentElectronWebWorkflow(moduleName),
    build: createBuildWorkflow(moduleName),
    lint: createLintWorkflow(moduleName),
};
