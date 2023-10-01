'use client';
import { PropsWithChildren, createContext, useContext, useRef } from 'react';

export enum Event {
    ON_VIEW = 'ON_VIEW'
}

type Props<T> = {};
type Callback<T> = (data: T) => void;
type EventState<T> = {
    sub: (event: Event, callback: Callback<T>) => void;
    unsub: (event: Event, callback: Callback<T>) => void;
    emit: (event: Event, data: T) => void;
};

export const EventContext = createContext<EventState<any>>({
    sub: () => {},
    unsub: () => {},
    emit: () => {}
});

const EventProvider = <T extends object>({ children }: PropsWithChildren<Props<T>>) => {
    const events = useRef<Record<Event, Callback<T>[]>>({
        [Event.ON_VIEW]: []
    });

    const sub = (event: Event, callback: Callback<T>) => {
        events.current[event].push(callback);
    };

    const unsub = (event: Event, callback: Callback<T>) => {
        for (var i = 0; i < events.current[event].length; i++)
            if (events.current[event][i] === callback) {
                events.current[event].splice(i, 1);
                break;
            }
    };

    const emit = (event: Event, data: T) => {
        events.current[event].forEach((callback) => {
            callback(data);
        });
    };
    return <EventContext.Provider value={{ sub, unsub, emit }}>{children}</EventContext.Provider>;
};

function useEvents<T>() {
    const context = useContext<EventState<T>>(EventContext);
    if (context === undefined) throw new Error('useEvents must be used within a EventProvider');
    return context;
}

export { EventProvider, useEvents };
