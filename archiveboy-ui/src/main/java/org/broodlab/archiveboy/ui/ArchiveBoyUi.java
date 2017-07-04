package org.broodlab.archiveboy.ui;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class ArchiveBoyUi extends Application {

    private Parent rootNode;

    public void init() throws Exception {
        FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("/ArchiveBoy.fxml"));
        fxmlLoader.setControllerFactory(ArchiveBoyContextHolder.getArchiveBoyContext()::getBean);
        rootNode = fxmlLoader.load();
    }

    public void start(Stage primaryStage) throws Exception {
        primaryStage.setScene(new Scene(rootNode));
        primaryStage.setMaximized(true);
        primaryStage.show();
    }

    public void stop() throws Exception {
    }
}
