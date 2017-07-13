package org.broodlab.archiveboy.ui;

import io.reactivex.rxjavafx.observables.JavaFxObservable;
import javafx.application.Application;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
import org.broodlab.archiveboy.ui.common.ArchiveBoyFxmlLoaderFactory;
import org.broodlab.archiveboy.ui.common.ArchiveBoyUiStore;
import org.broodlab.archiveboy.ui.common.Dispatcher;
import org.broodlab.archiveboy.ui.common.LaunchedEvent;
import org.springframework.context.ApplicationContext;

import java.io.IOException;

public class ArchiveBoyUi extends Application {

    private ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory;
    private Dispatcher dispatcher;
    private ArchiveBoyUiStore archiveBoyUiStore;
    private Parent rootNode;
    private Stage primaryStage;

    public ArchiveBoyUi() {
        ApplicationContext archiveBoyContext = ArchiveBoyContextHolder.getArchiveBoyContext();
        archiveBoyFxmlLoaderFactory = archiveBoyContext.getBean(ArchiveBoyFxmlLoaderFactory.class);
        dispatcher = archiveBoyContext.getBean(Dispatcher.class);
        archiveBoyUiStore = archiveBoyContext.getBean(ArchiveBoyUiStore.class);
    }

    public void init() throws IOException {
        rootNode = archiveBoyFxmlLoaderFactory.createApplicationFxmlLoader(getClass(), "/ArchiveBoy.fxml").load();
        onLaunched();
        onClosed();
    }

    public void start(Stage primaryStage) throws Exception {
        this.primaryStage = primaryStage;
        dispatcher.dispatch(new LaunchedEvent());
    }

    private void onLaunched() {
        JavaFxObservable
                .changesOf(archiveBoyUiStore.launched())
                .filter(v -> v.getNewVal())
                .subscribe(c -> {
                    primaryStage.setScene(new Scene(rootNode));
                    primaryStage.setMaximized(true);
                    primaryStage.show();
                });
    }

    private void onClosed() {
        JavaFxObservable
                .changesOf(archiveBoyUiStore.launched())
                .filter(v -> !v.getNewVal())
                .subscribe(c -> primaryStage.close());
    }
}
