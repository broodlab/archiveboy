package org.broodlab.archiveboy.ui.main.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class ArchiveBoyContextHolder {

    private static ApplicationContext archiveBoyContext;

    @Autowired
    public ArchiveBoyContextHolder(ApplicationContext archiveBoyContext) {
        ArchiveBoyContextHolder.archiveBoyContext = archiveBoyContext;
    }

    public static ApplicationContext getArchiveBoyContext() {
        return archiveBoyContext;
    }
}
