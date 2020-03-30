const log = require("fancy-log");

module.exports.logWatchFilesChanged = (done) => {
    log("Watched file(s) changed.");
    done();
};
