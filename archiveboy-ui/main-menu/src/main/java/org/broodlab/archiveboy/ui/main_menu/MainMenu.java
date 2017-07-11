package org.broodlab.archiveboy.ui.main_menu;

import javafx.scene.layout.VBox;
import org.broodlab.archiveboy.ui.common.ArchiveBoyFxmlLoaderFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;

@Component
@Scope("prototype")
public class MainMenu extends VBox {

    private ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory;

    @Autowired
    public MainMenu(ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory) {
        this.archiveBoyFxmlLoaderFactory = archiveBoyFxmlLoaderFactory;
    }

    @PostConstruct
    public void init() throws IOException {
        archiveBoyFxmlLoaderFactory
                .createUiComponentFxmlLoader(getClass(), this, "/MainMenu.fxml")
                .load();
    }
}
