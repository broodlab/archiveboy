package org.broodlab.archiveboy.ui;

import javafx.application.Application;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
import org.broodlab.archiveboy.ui.common.ArchiveBoyFxmlLoaderFactory;

import java.io.IOException;

public class ArchiveBoyUi extends Application {

    private Parent rootNode;

    public void init() throws IOException {
        ArchiveBoyFxmlLoaderFactory archiveBoyFxmlLoaderFactory = ArchiveBoyContextHolder
                .getArchiveBoyContext()
                .getBean(ArchiveBoyFxmlLoaderFactory.class);
        rootNode = archiveBoyFxmlLoaderFactory.createApplicationFxmlLoader(getClass(), "/ArchiveBoy.fxml").load();
    }

    public void start(Stage primaryStage) throws Exception {
        primaryStage.setScene(new Scene(rootNode));
        primaryStage.setMaximized(true);
        primaryStage.show();
    }

    public void stop() throws Exception {
    }
}
