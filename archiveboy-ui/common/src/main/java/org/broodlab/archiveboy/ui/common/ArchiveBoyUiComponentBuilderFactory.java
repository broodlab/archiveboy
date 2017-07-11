package org.broodlab.archiveboy.ui.common;

import javafx.fxml.JavaFXBuilderFactory;
import javafx.util.Builder;
import javafx.util.BuilderFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

@Component
class ArchiveBoyUiComponentBuilderFactory implements BuilderFactory {

    private ApplicationContext archiveBoyContext;
    private JavaFXBuilderFactory javaFXBuilderFactory;

    @Autowired
    public ArchiveBoyUiComponentBuilderFactory(ApplicationContext archiveBoyContext) {
        this.archiveBoyContext = archiveBoyContext;
        javaFXBuilderFactory = new JavaFXBuilderFactory();
    }

    @Override
    public Builder<?> getBuilder(Class<?> uiComponentType) {

        final Object uiComponentInstance;

        try {
            uiComponentInstance = archiveBoyContext.getBean(uiComponentType);
        } catch (BeansException exception) {
            return javaFXBuilderFactory.getBuilder(uiComponentType);
        }

        return new Builder() {
            @Override
            public Object build() {
                return uiComponentInstance;
            }
        };
    }
}
