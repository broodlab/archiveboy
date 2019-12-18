const {createBuildWorkflow} = require("./build.workflow-factory");
const {createDevWorkflow} = require("./dev.workflow-factory");
const {createDevE2eTestWorkflow} = require("./dev-e2e-test.workflow-factory");
const {createDevIntegrationTestWorkflow} = require("./dev-integration-test.workflow-factory");
const {createDevUnitTestWorkflow} = require("./dev-unit-test.workflow-factory");
const {createLintWorkflow} = require("./lint.workflow-factory");
const {createRunE2eTestsWorkflow} = require("./run-e2e-tests.workflow-factory");
const {createRunIntegrationTestsWorkflow} = require("./run-integration-tests.workflow-factory");
const {createRunUnitTestsWorkflow} = require("./run-unit-tests.workflow-factory");

module.exports.createBuildWorkflow = createBuildWorkflow;
module.exports.createDevWorkflow = createDevWorkflow;
module.exports.createDevE2eTestWorkflow = createDevE2eTestWorkflow;
module.exports.createDevIntegrationTestWorkflow = createDevIntegrationTestWorkflow;
module.exports.createDevUnitTestWorkflow = createDevUnitTestWorkflow;
module.exports.createLintWorkflow = createLintWorkflow;
module.exports.createRunE2eTestsWorkflow = createRunE2eTestsWorkflow;
module.exports.createRunIntegrationTestsWorkflow = createRunIntegrationTestsWorkflow;
module.exports.createRunUnitTestsWorkflow = createRunUnitTestsWorkflow;

module.exports.createWorkflows = moduleName => {
    return {
        build: createBuildWorkflow(moduleName),
        dev: createDevWorkflow(moduleName),
        "dev-e2e-test": createDevE2eTestWorkflow(moduleName),
        "dev-integration-test": createDevIntegrationTestWorkflow(moduleName),
        "dev-unit-test": createDevUnitTestWorkflow(moduleName),
        lint: createLintWorkflow(moduleName),
        "run-e2e-tests": createRunE2eTestsWorkflow(moduleName),
        "run-integration-tests": createRunIntegrationTestsWorkflow(moduleName),
        "run-unit-tests": createRunUnitTestsWorkflow(moduleName)
    };
};
