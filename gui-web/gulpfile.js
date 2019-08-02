const {createBuildWorkflow} = require("./gulp/workflows");
const {
    createDevIntegrationTestWorkflow,
    createDevUnitTestWorkflow,
    createLintWorkflow,
    createRunIntegrationTestsWorkflow,
    createRunUnitTestsWorkflow
} = require("broodlab-toolbox/workflows");

const moduleName = "gui-web";

module.exports = {
    build: createBuildWorkflow(moduleName),
    "dev-integration-test": createDevIntegrationTestWorkflow(moduleName),
    "dev-unit-test": createDevUnitTestWorkflow(moduleName),
    lint: createLintWorkflow(moduleName),
    "run-integration-tests": createRunIntegrationTestsWorkflow(moduleName),
    "run-unit-tests": createRunUnitTestsWorkflow(moduleName)
};
