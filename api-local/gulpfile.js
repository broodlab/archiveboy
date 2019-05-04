const {exec} = require("child_process");
const log = require("fancy-log");
const {series} = require("gulp");

const compileTsFiles = (done) => {
    exec("webpack --colors --mode=development", (err, stdout) => {
        log(stdout);
        done(err);
    });
};

exports.compileTsFiles = series(compileTsFiles);