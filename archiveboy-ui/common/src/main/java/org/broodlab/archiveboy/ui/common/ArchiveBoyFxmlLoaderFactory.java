package org.broodlab.archiveboy.ui.common;

import javafx.fxml.FXMLLoader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class ArchiveBoyFxmlLoaderFactory {

    ApplicationContext archiveBoyContext;
    ArchiveBoyUiComponentBuilderFactory archiveBoyUiComponentBuilderFactory;

    @Autowired
    public ArchiveBoyFxmlLoaderFactory(ApplicationContext archiveBoyContext,
                                       ArchiveBoyUiComponentBuilderFactory archiveBoyUiComponentBuilderFactory) {
        this.archiveBoyContext = archiveBoyContext;
        this.archiveBoyUiComponentBuilderFactory = archiveBoyUiComponentBuilderFactory;
    }

    public FXMLLoader createApplicationFxmlLoader(Class source, String fxmlFilePath) throws IOException {

        FXMLLoader fxmlLoader = new FXMLLoader(source.getResource(fxmlFilePath));
        fxmlLoader.setBuilderFactory(archiveBoyUiComponentBuilderFactory);
        fxmlLoader.setControllerFactory(archiveBoyContext::getBean);

        return fxmlLoader;
    }

    public FXMLLoader createUiComponentFxmlLoader(Class source, Object instance, String fxmlFilePath) throws IOException {

        FXMLLoader fxmlLoader = new FXMLLoader(source.getResource(fxmlFilePath));
        fxmlLoader.setBuilderFactory(archiveBoyUiComponentBuilderFactory);
        fxmlLoader.setRoot(instance);
        fxmlLoader.setController(instance);

        return fxmlLoader;
    }
}
