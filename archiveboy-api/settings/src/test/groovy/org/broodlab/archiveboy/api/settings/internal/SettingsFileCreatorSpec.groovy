package org.broodlab.archiveboy.api.settings.internal

import org.apache.commons.io.FileUtils
import spock.lang.Specification

import java.nio.file.Path
import java.nio.file.Paths

import static java.nio.charset.Charset.defaultCharset
import static java.nio.file.Files.*
import static org.apache.commons.io.FileUtils.deleteDirectory
import static org.apache.commons.io.FileUtils.readFileToString
import static org.broodlab.archiveboy.api.settings.internal.Defaults.SETTINGS_FILE_NAME
import static org.broodlab.archiveboy.commons.test_tools.test_folder.TestFolder.createTestFolderPathFromClass

class SettingsFileCreatorSpec extends Specification {

    Path baseFolderPath = createTestFolderPathFromClass(SettingsFileCreatorSpec.class)

    def setup() {
        createDirectory(baseFolderPath)
    }

    def cleanup() {
        deleteDirectory(baseFolderPath.toFile())
    }

    def "The ArchiveBoy settings file gets created during the initialization phase of the application in case it does not exist yet."() {
        given:
        SettingsFileCreator testee = new SettingsFileCreator(baseFolderPath)

        when:
        SettingsFile settingsFile = testee.createSettingsFile()

        then:
        exists(settingsFile.getFilePath())
        settingsFile.fileIsNew()
    }

    def "The ArchiveBoy settings file gets read during the initialization phase of the application in case it already exists."() {
        given:
        SettingsFileCreator testee = new SettingsFileCreator(baseFolderPath)
        Path settingsFileToCreate = Paths.get(baseFolderPath.toString(), SETTINGS_FILE_NAME)
        createFile(settingsFileToCreate)
        FileUtils.write(settingsFileToCreate.toFile(), "foo", defaultCharset())

        when:
        SettingsFile createdSettingsFile = testee.createSettingsFile()

        then:
        exists(createdSettingsFile.getFilePath())
        !createdSettingsFile.fileIsNew()
        readFileToString(createdSettingsFile.getFile(), defaultCharset()) == "foo"
    }
}
