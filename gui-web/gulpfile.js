const {
    createBuildWorkflow,
    createConfigureTargetEnvironmentElectronRendererWorkflow,
    createConfigureTargetEnvironmentElectronWebWorkflow
} = require("./gulp/workflows");
const {
    createDevIntegrationTestWorkflow,
    createDevUnitTestWorkflow,
    createLintWorkflow,
    createRunIntegrationTestsWorkflow,
    createRunUnitTestsWorkflow
} = require("@archiveboy/toolbox/workflows");

const moduleName = "gui-web";

module.exports = {
    "configure-target-env-electron-renderer": createConfigureTargetEnvironmentElectronRendererWorkflow(moduleName),
    "configure-target-env-web": createConfigureTargetEnvironmentElectronWebWorkflow(moduleName),
    build: createBuildWorkflow(moduleName),
    "dev-integration-test": createDevIntegrationTestWorkflow(moduleName),
    "dev-unit-test": createDevUnitTestWorkflow(moduleName),
    lint: createLintWorkflow(moduleName),
    "run-integration-tests": createRunIntegrationTestsWorkflow(moduleName),
    "run-unit-tests": createRunUnitTestsWorkflow(moduleName)
};
