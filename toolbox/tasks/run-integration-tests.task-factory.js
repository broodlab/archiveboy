const log = require("fancy-log");
const mocha = require("gulp-mocha");
const {src} = require("gulp");

const createRunIntegrationTestsTask = (moduleName, failAfterError) =>
    function runIntegrationTests() {
        log(`${moduleName}: Running integration tests.`);
        return src("dist/spec/integration.js", {read: false})
            .pipe(mocha({reporter: "spec"}))
            .on("error", failAfterError ? () => process.exit(1) : () => "noop");
    };

exports.createRunIntegrationTestsTask = createRunIntegrationTestsTask;
