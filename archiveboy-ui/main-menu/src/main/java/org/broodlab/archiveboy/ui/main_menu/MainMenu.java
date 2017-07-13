package org.broodlab.archiveboy.ui.main_menu;

import io.reactivex.rxjavafx.observables.JavaFxObservable;
import javafx.fxml.FXML;
import javafx.scene.control.MenuItem;
import javafx.scene.layout.VBox;
import org.broodlab.archiveboy.ui.common.ArchiveBoyFxmlLoaderFactory;
import org.broodlab.archiveboy.ui.common.ClosedEvent;
import org.broodlab.archiveboy.ui.common.Dispatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;

@Component
@Scope("prototype")
public class MainMenu extends VBox {

    private ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory;
    private Dispatcher dispatcher;

    @FXML
    MenuItem closeMenuItem;

    @Autowired
    public MainMenu(ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory, Dispatcher dispatcher) {
        this.archiveBoyFxmlLoaderFactory = archiveBoyFxmlLoaderFactory;
        this.dispatcher = dispatcher;
    }

    @PostConstruct
    public void init() throws IOException {
        archiveBoyFxmlLoaderFactory
                .createUiComponentFxmlLoader(getClass(), this, "/MainMenu.fxml")
                .load();

        JavaFxObservable
                .actionEventsOf(closeMenuItem)
                .subscribe(e -> dispatcher.dispatch(new ClosedEvent()));
    }
}
