package org.broodlab.archiveboy.api.workspace;

import java.nio.file.Path;

public interface IWorkspaceService {

    void init(Path workspaceLocation);
}
