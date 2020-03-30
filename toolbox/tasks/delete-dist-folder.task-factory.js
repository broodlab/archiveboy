const del = require("del");
const log = require("fancy-log");

const createDeleteDistFolderTask = (moduleName) =>
    function deleteDistFolder(done) {
        log(`${moduleName}: Deleting dist folder.`);
        del.sync(["dist"]);
        done();
    };

exports.createDeleteDistFolderTask = createDeleteDistFolderTask;
