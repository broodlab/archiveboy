const {exec} = require("child_process");
const log = require("fancy-log");

const createRunTestsTask = (moduleName) =>
    function runTests(done) {
        exec("npm test", (err, stdout, stderr) => {
            log(`${moduleName}: Testing Web GUI.`);
            log(stderr);
            done(err);
        });
    };

exports.createRunTestsTask = createRunTestsTask;
