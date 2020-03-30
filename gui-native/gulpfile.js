const {createBuildWorkflow} = require("./gulp/workflows");
const {
    createDevE2eTestWorkflow,
    createDevIntegrationTestWorkflow,
    createDevUnitTestWorkflow,
    createLintWorkflow,
    createRunE2eTestsWorkflow,
    createRunIntegrationTestsWorkflow,
    createRunUnitTestsWorkflow,
} = require("@archiveboy/toolbox/workflows");

const moduleName = "gui-native";

module.exports = {
    build: createBuildWorkflow(moduleName),
    "dev-e2e-test": createDevE2eTestWorkflow(moduleName),
    "dev-integration-test": createDevIntegrationTestWorkflow(moduleName),
    "dev-unit-test": createDevUnitTestWorkflow(moduleName),
    lint: createLintWorkflow(moduleName),
    "run-e2e-tests": createRunE2eTestsWorkflow(moduleName),
    "run-integration-tests": createRunIntegrationTestsWorkflow(moduleName),
    "run-unit-tests": createRunUnitTestsWorkflow(moduleName),
};
