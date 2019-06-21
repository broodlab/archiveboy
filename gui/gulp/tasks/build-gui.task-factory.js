const {exec} = require("child_process");
const log = require("fancy-log");

const createBuildGuiTask = moduleName =>
    function compileTsFiles(done) {
        exec("ng build", (err, stdout) => {
            log(`${moduleName}: Building GUI.`);
            log(stdout);
            done();
        });
    };

exports.createBuildGuiTask = createBuildGuiTask;
