package org.broodlab.archiveboy.ui.common;

import javafx.fxml.FXMLLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ResourceBundle;

@Component
public class ArchiveBoyFxmlLoaderFactory {

    private ApplicationContext archiveBoyContext;
    private ArchiveBoyUiComponentBuilderFactory archiveBoyUiComponentBuilderFactory;

    @Autowired
    public ArchiveBoyFxmlLoaderFactory(ApplicationContext archiveBoyContext,
                                       ArchiveBoyUiComponentBuilderFactory archiveBoyUiComponentBuilderFactory) {
        this.archiveBoyContext = archiveBoyContext;
        this.archiveBoyUiComponentBuilderFactory = archiveBoyUiComponentBuilderFactory;
    }

    public FXMLLoader createApplicationFxmlLoader(Object applicationInstance, String fxmlFilePath) throws IOException {

        FXMLLoader fxmlLoader = new FXMLLoader(applicationInstance.getClass().getResource(fxmlFilePath));
        fxmlLoader.setBuilderFactory(archiveBoyUiComponentBuilderFactory);
        fxmlLoader.setControllerFactory(archiveBoyContext::getBean);

        return fxmlLoader;
    }

    public FXMLLoader createUiComponentFxmlLoader(Object componentInstance,
                                                  String fxmlFilePath) throws IOException {

        FXMLLoader fxmlLoader = new FXMLLoader(componentInstance.getClass().getResource(fxmlFilePath));
        fxmlLoader.setBuilderFactory(archiveBoyUiComponentBuilderFactory);
        fxmlLoader.setRoot(componentInstance);
        fxmlLoader.setController(componentInstance);

        return fxmlLoader;
    }

    public FXMLLoader createUiComponentFxmlLoader(Object componentInstance,
                                                  String fxmlFilePath,
                                                  String resourceBundleName) throws IOException {

        FXMLLoader fxmlLoader = new FXMLLoader(componentInstance.getClass().getResource(fxmlFilePath));
        fxmlLoader.setBuilderFactory(archiveBoyUiComponentBuilderFactory);
        fxmlLoader.setRoot(componentInstance);
        fxmlLoader.setController(componentInstance);
        fxmlLoader.setResources(ResourceBundle.getBundle(resourceBundleName));

        return fxmlLoader;
    }
}
