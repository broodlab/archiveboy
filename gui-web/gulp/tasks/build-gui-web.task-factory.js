const {exec} = require("child_process");
const log = require("fancy-log");

const createBuildGuiWebTask = (moduleName) =>
    function buildGuiWeb(done) {
        exec("ng build", (err, stdout) => {
            log(`${moduleName}: Building Web GUI.`);
            log(stdout);
            done(err);
        });
    };

exports.createBuildGuiWebTask = createBuildGuiWebTask;
