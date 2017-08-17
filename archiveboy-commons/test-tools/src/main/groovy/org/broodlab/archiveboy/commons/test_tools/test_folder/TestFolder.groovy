package org.broodlab.archiveboy.commons.test_tools.test_folder

import java.nio.file.Path
import java.nio.file.Paths

static createTestFolderPathFromClass(Class clazz) throws URISyntaxException {

    Path baseFolderPath = new File(clazz.getResource("/").toURI()).toPath()

    return Paths.get("${baseFolderPath.toString()}/${clazz.getName()}")
}
