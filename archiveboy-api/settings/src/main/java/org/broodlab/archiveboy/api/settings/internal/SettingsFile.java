package org.broodlab.archiveboy.api.settings.internal;

import java.io.File;
import java.nio.file.Path;

class SettingsFile {

    boolean fileIsNew;
    Path filePath;

    SettingsFile(boolean fileIsNew, Path filePath) {
        this.fileIsNew = fileIsNew;
        this.filePath = filePath;
    }

    boolean fileIsNew() {
        return fileIsNew;
    }

    Path getFilePath() {
        return filePath;
    }

    File getFile() {
        return filePath.toFile();
    }
}