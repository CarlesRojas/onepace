'use client';

import { Event, useEvents } from '@/component/Events';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { useCallback, useEffect, useState } from 'react';
import { ImCheckmark } from 'react-icons/im';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

interface Props {
    id: string;
    defaultValue: boolean;
    borderReduction?: boolean;
    overrideId?: string;
    autoReset?: boolean;
}

const View = ({ id, defaultValue, borderReduction, overrideId, autoReset }: Props) => {
    const { sub, unsub } = useEvents<string>();

    const [viewed, setViewedInternal] = useState(defaultValue);
    const { emit } = useEvents<string>();

    const setViewed = (newValue: boolean) => {
        const isOverrideViewed = hasCookie(`${overrideId}-viewed`);
        if (isOverrideViewed) return;

        if (newValue) setCookie(`${id}-viewed`, 'true', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });
        else if (!autoReset) deleteCookie(`${id}-viewed`);

        if (!autoReset) setViewedInternal(newValue);
        emit(Event.ON_VIEW, id);

        if (autoReset) emit(Event.ON_NEXT_EPISODE_VIEW, id);
    };

    const onViewChanged = useCallback(
        (eventId: string) => {
            if (id === eventId) setViewedInternal(true);
        },
        [id]
    );

    useEffect(() => {
        if (autoReset) return;

        sub(Event.ON_NEXT_EPISODE_VIEW, onViewChanged);

        return () => {
            unsub(Event.ON_NEXT_EPISODE_VIEW, onViewChanged);
        };
    }, [autoReset, onViewChanged, sub, unsub]);

    return (
        <div
            className={`absolute bg-neutral-50 dark:bg-neutral-950 z-20 top-0 bottom-0 left-0 right-0 rounded-lg pointer-events-none ${
                borderReduction ? 'm-[3px]' : ''
            } ${viewed ? '!bg-opacity-40 dark:!bg-opacity-60 dark:border-neutral-800 border' : '!bg-opacity-0'}`}
        >
            <button
                className="group absolute -right-3 -top-3 xl:-right-4 xl:-top-4 z-30 pointer-events-auto w-12 h-12 p-3 cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus-visible:scale-110 pointer:focus-visible:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm"
                onClick={() => setViewed(!viewed)}
                type="button"
                aria-label="Toggle viewed"
                data-tooltip-id="tooltip"
                data-tooltip-content={viewed ? 'Mark as not watched' : 'Mark as watched'}
                data-tooltip-delay-show={400}
            >
                {viewed ? (
                    <>
                        <ImCheckmark className="w-full h-full select-none text-blue-500 pointer:group-hover:hidden" />
                        <RiEyeOffFill className="w-full h-full select-none text-blue-500 hidden pointer:group-hover:block" />
                    </>
                ) : (
                    <RiEyeFill className="w-full h-full select-none" />
                )}
            </button>
        </div>
    );
};

export default View;
