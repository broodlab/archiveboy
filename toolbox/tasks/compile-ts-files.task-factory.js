const {exec} = require("child_process");
const log = require("fancy-log");

const createCompileTsFilesTask = (moduleName, webpackConfigFileName, failAfterError) =>
    function compileTsFiles(done) {
        exec(`webpack --colors --mode=development --config=${__dirname}/../configs/webpack/${webpackConfigFileName}`, (err, stdout) => {
            log(`${moduleName}: Compiling TypeScript files.`);
            log(stdout);
            if (failAfterError) {
                done(err);
            } else {
                done();
            }
        });
    };

exports.createCompileTsFilesTask = createCompileTsFilesTask;
