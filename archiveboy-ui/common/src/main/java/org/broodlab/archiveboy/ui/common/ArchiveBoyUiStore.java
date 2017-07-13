package org.broodlab.archiveboy.ui.common;

import javafx.beans.property.BooleanProperty;
import javafx.beans.property.ReadOnlyBooleanProperty;
import javafx.beans.property.SimpleBooleanProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ArchiveBoyUiStore {

    private BooleanProperty launched = new SimpleBooleanProperty();
    private Dispatcher dispatcher;

    @Autowired
    public ArchiveBoyUiStore(Dispatcher dispatcher) {
        this.dispatcher = dispatcher;

        dispatcher
                .observable(LaunchedEvent.class)
                .subscribe(e -> launch());

        dispatcher
                .observable(ClosedEvent.class)
                .subscribe(e -> close());
    }

    private void launch() {
        launched.set(true);
    }

    private void close() {
        launched.set(false);
    }

    public ReadOnlyBooleanProperty launched() {
        return launched;
    }

}
