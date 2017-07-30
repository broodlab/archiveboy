package org.broodlab.archiveboy.api.settings.internal;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.nio.file.Files.createFile;
import static org.broodlab.archiveboy.api.settings.internal.Defaults.SETTINGS_FILE_NAME;

class SettingsFileCreator {

    Path baseFolderPath;

    SettingsFileCreator(Path baseFolderPath) {
        this.baseFolderPath = baseFolderPath;
    }

    SettingsFile createSettingsFile() throws IOException {
        boolean fileIsNew = false;
        Path settingsFilePath = Paths.get(baseFolderPath.toString(), SETTINGS_FILE_NAME);
        if (!Files.exists(settingsFilePath)) {
            fileIsNew = true;
            createFile(settingsFilePath);
        }
        return new SettingsFile(fileIsNew, settingsFilePath);
    }
}
