package org.broodlab.archiveboy.ui.components.molecules.list_item;

import javafx.scene.layout.HBox;
import org.broodlab.archiveboy.ui.common.ArchiveBoyFxmlLoaderFactory;
import org.broodlab.archiveboy.ui.common.Dispatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;

@Component
@Scope("prototype")
public class MListItem extends HBox {

    private ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory;
    private Dispatcher dispatcher;

    @Autowired
    public MListItem(
            ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory,
            Dispatcher dispatcher
    ) {
        this.archiveBoyFxmlLoaderFactory = archiveBoyFxmlLoaderFactory;
        this.dispatcher = dispatcher;
    }

    @PostConstruct
    public void init() throws IOException {
        archiveBoyFxmlLoaderFactory
                .createUiComponentFxmlLoader(this, "/MListItem.fxml")
                .load();
    }
}
