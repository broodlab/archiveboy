const log = require("fancy-log");
const mocha = require("gulp-mocha");
const {src} = require("gulp");

const createRunUnitTestsTask = (moduleName, failAfterError) =>
    function runUnitTests() {
        log(`${moduleName}: Running unit tests.`);
        return src("dist/spec/unit.js", {read: false})
            .pipe(mocha({reporter: "spec"}))
            .on("error", failAfterError ? () => process.exit(1) : () => "noop");
    };

exports.createRunUnitTestsTask = createRunUnitTestsTask;
