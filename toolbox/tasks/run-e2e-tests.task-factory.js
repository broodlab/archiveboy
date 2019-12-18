const log = require("fancy-log");
const mocha = require("gulp-mocha");
const {src} = require("gulp");

const createRunE2eTestsTask = (moduleName, failAfterError) =>
    function runE2eTests() {
        log(`${moduleName}: Running e2e tests.`);
        return src("dist/spec/e2e.js", {read: false})
            .pipe(mocha({reporter: "spec"}))
            .on("error", failAfterError ? () => process.exit(1) : () => "noop");
    };

exports.createRunE2eTestsTask = createRunE2eTestsTask;
