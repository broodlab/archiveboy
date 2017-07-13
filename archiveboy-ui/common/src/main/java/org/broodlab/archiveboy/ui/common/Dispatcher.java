package org.broodlab.archiveboy.ui.common;

import io.reactivex.Observable;
import io.reactivex.annotations.NonNull;
import io.reactivex.subjects.PublishSubject;
import io.reactivex.subjects.Subject;
import org.springframework.stereotype.Component;

@Component
public class Dispatcher {

    private final Subject<Object> eventBus = PublishSubject.create().toSerialized();

    public void dispatch(@NonNull Object event) {
        if (this.eventBus.hasObservers()) {
            this.eventBus.onNext(event);
        }
    }

    public <T> Observable<T> observable(@NonNull Class<T> eventClass) {
        return this.eventBus
                .filter(o -> o != null)
                .filter(eventClass::isInstance)
                .cast(eventClass);
    }
}
