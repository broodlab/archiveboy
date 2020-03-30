const {exec} = require("child_process");
const log = require("fancy-log");

const createBuildGuiNativeTask = (moduleName) =>
    function buildGuiNative(done) {
        exec("electron-webpack main --color", (err, stdout) => {
            log(`${moduleName}: Building Native GUI.`);
            log(stdout);
            done(err);
        });
    };

exports.createBuildGuiNativeTask = createBuildGuiNativeTask;
