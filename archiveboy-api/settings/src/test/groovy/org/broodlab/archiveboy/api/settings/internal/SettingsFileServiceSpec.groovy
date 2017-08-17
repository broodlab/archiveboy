package org.broodlab.archiveboy.api.settings.internal

import spock.lang.Specification

import java.nio.file.Path
import java.nio.file.Paths

import static java.nio.charset.Charset.defaultCharset
import static java.nio.file.Files.createDirectory
import static java.nio.file.Files.createFile
import static org.apache.commons.io.FileUtils.deleteDirectory
import static org.apache.commons.io.FileUtils.write
import static org.broodlab.archiveboy.api.settings.internal.Defaults.*
import static org.broodlab.archiveboy.commons.test_tools.test_folder.TestFolder.createTestFolderPathFromClass

class SettingsFileServiceSpec extends Specification {

    Path baseFolderPath = createTestFolderPathFromClass(SettingsFileServiceSpec.class)

    def setup() {
        createDirectory(baseFolderPath)
    }

    def cleanup() {
        deleteDirectory(baseFolderPath.toFile())
    }

    def "By default the 'workspace.path' setting is initialized with a path within the user's home folder."() {
        given:
        SettingsFileCreator settingsFileCreator = new SettingsFileCreator(baseFolderPath)
        SettingsFileService testee = new SettingsFileService(settingsFileCreator)
        testee.init()

        when:
        Path workspacePath = testee.workspacePath()

        then:
        workspacePath == Paths.get(System.getProperty("user.home"), WORKSPACE_FOLDER_NAME)
    }

    def "The user can specify her own 'workspace.path' by means of the settings file."() {
        given:
        Path settingsFilePath = Paths.get(baseFolderPath.toString(), SETTINGS_FILE_NAME)
        createFile(settingsFilePath)
        write(settingsFilePath.toFile(), "${WORKSPACE_PATH__SETTING_NAME}=/foo/bar/.baz", defaultCharset())

        SettingsFileCreator settingsFileCreator = new SettingsFileCreator(baseFolderPath)
        SettingsFileService testee = new SettingsFileService(settingsFileCreator)
        testee.init()

        when:
        Path workspacePath = testee.workspacePath()

        then:
        workspacePath == Paths.get("/foo/bar/.baz")
    }
}
