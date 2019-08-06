const {configureTargetEnvironment} = require("./configure-target-environment");
const log = require("fancy-log");

const createConfigureTargetEnvironmentTask = (moduleName, target) =>
    function configuringTargetEnvironment(done) {
        log(`${moduleName}: Configuring target environment '${target}'.`);
        try {
            configureTargetEnvironment(target);
        } catch (error) {
            done(error);
        }
        done();
    };

exports.createConfigureTargetEnvironmentTask = createConfigureTargetEnvironmentTask;
