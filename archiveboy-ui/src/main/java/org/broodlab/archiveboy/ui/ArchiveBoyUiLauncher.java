package org.broodlab.archiveboy.ui;

import javafx.application.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class ArchiveBoyUiLauncher {

    @Autowired
    ArchiveBoyContextHolder archiveBoyContextHolder;

    @PostConstruct
    public void launch() {
        Application.launch(ArchiveBoyUi.class);
    }
}
