'use client';

import { Event, useEvents } from '@/component/Events';
import { hasCookie } from 'cookies-next';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RiArrowLeftLine, RiArrowRightLine, RiEyeFill } from 'react-icons/ri';

export interface HorizontalSliderProps {
    containerId: string;
    id: string;
    numberOfItems: number;
    arcIndex?: number;
    goToNextToViewEnabled?: boolean;
}

const getCookieName = (arcIndex: number, episodeIndex?: number) => {
    const episode = episodeIndex !== undefined ? `-ep-${episodeIndex}` : '';
    return `arc-${arcIndex}${episode}-viewed`;
};

const getViewedValues = (numberOfItems: number, arcIndex?: number) => {
    const viewedValues = Array.from({ length: numberOfItems }, (_, i) =>
        hasCookie(getCookieName(arcIndex ?? i, arcIndex ? i : undefined))
    );
    return viewedValues;
};

const HorizontalSlider = ({
    goToNextToViewEnabled,
    containerId,
    id,
    numberOfItems,
    arcIndex
}: HorizontalSliderProps) => {
    const { sub, unsub } = useEvents<string>();

    const itemDivs = useRef<HTMLDivElement[]>([]);
    const observer = useRef<IntersectionObserver | null>(null);

    const [shown, setShown] = useState<boolean[]>([true]);

    const [viewedValues, setViewedValues] = useState(Array.from({ length: numberOfItems }, () => false));
    useEffect(() => setViewedValues(getViewedValues(numberOfItems, arcIndex)), [arcIndex, numberOfItems]);

    const onIntersectionChange = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            const index = itemDivs.current.findIndex((elem) => entry.target.id === elem.id);
            const horizontalIntersectionRatio = entry.intersectionRect.width / entry.boundingClientRect.width;

            setShown((prev) => {
                const next = [...prev];
                next[index] = horizontalIntersectionRatio >= 0.95;
                return next;
            });
        });
    };

    useEffect(() => {
        const items = [];

        observer.current = new IntersectionObserver(onIntersectionChange, {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            root: document.getElementById(containerId)
        });

        while (true) {
            const item = document.getElementById(`${id}-${items.length}`) as HTMLDivElement;
            if (!item) break;
            items.push(item);
            observer.current?.observe(item);
        }

        setShown(items.map((_, i) => i === 0));
        itemDivs.current = items;
    }, [containerId, id]);

    const getContainerElement = () => {
        const container = document.getElementById(containerId);
        return container;
    };

    const goNext = () => {
        const container = getContainerElement();
        if (!container) return;

        const lastVisible = shown.findLastIndex((elem) => elem);
        const scrollIntoViewId = `${id}-${Math.min(lastVisible + 1, shown.length - 1)}`;
        const element = document.getElementById(scrollIntoViewId);
        if (!element) return;
        const bounding = element.getBoundingClientRect();

        container.scrollTo({
            behavior: 'smooth',
            left: container.scrollLeft + bounding.left
        });
    };

    const goPrev = () => {
        const container = getContainerElement();
        if (!container) return;

        const firstVisible = shown.findIndex((elem) => elem);
        const ammountVisible = shown.filter((elem) => elem).length;
        const scrollIntoViewId = `${id}-${Math.max(firstVisible - ammountVisible, 0)}`;
        const element = document.getElementById(scrollIntoViewId);
        if (!element) return;
        const bounding = element.getBoundingClientRect();

        container.scrollTo({
            behavior: 'smooth',
            left: container.scrollLeft + bounding.left
        });
    };

    const goFirstNotWatched = () => {
        const container = getContainerElement();
        if (!container) return;

        const ammountVisible = shown.filter((elem) => elem).length;
        const viewedValues = getViewedValues(numberOfItems, arcIndex);
        const firstNotWatched = viewedValues.findIndex((elem) => !elem);
        if (firstNotWatched === -1) return;

        const scrollToIndex = firstNotWatched - (firstNotWatched > 0 && ammountVisible > 1 ? 1 : 0);

        const scrollIntoViewId = `${id}-${scrollToIndex}`;
        const element = document.getElementById(scrollIntoViewId);
        if (!element) return;
        const bounding = element.getBoundingClientRect();

        container.scrollTo({
            behavior: 'smooth',
            left: container.scrollLeft + bounding.left
        });

        setViewedValues(viewedValues);
    };

    const cleanFirstVisible = useRef(0);
    const cleanLastVisible = useRef(0);

    const scrolledToTheStart = shown.length > 0 && shown[0];
    const scrolledToTheEnd = shown.length > 0 && shown[shown.length - 1];
    const firstVisible = shown.findIndex((elem) => elem);
    const lastVisible = shown.findLastIndex((elem) => elem);
    const firstNotWatched = viewedValues.findIndex((elem) => !elem);
    const firstNotWatchedVisible = firstNotWatched === -1 || shown[firstNotWatched];

    cleanFirstVisible.current = firstVisible >= 0 ? firstVisible : cleanFirstVisible.current;
    cleanLastVisible.current = lastVisible >= 0 ? lastVisible : cleanLastVisible.current;

    const onViewChanged = useCallback(
        (id: string) => {
            setViewedValues(getViewedValues(numberOfItems, arcIndex));
        },
        [arcIndex, numberOfItems]
    );

    useEffect(() => {
        sub(Event.ON_VIEW, onViewChanged);

        return () => {
            unsub(Event.ON_VIEW, onViewChanged);
        };
    }, [sub, onViewChanged, unsub]);

    return (
        <div className="w-full h-fit px-4 sm:px-8 flex gap-1 sm:gap-2 justify-between absolute z-10 top-2 sm:top-4">
            <button
                className={`${
                    scrolledToTheStart ? 'opacity-0 pointer-none select-none' : ''
                } group w-12 h-12 p-3 rounded-full touch:hidden flex items-center justify-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm`}
                onClick={() => goPrev()}
                type="button"
                disabled={scrolledToTheStart}
                aria-label="Previous"
                data-tooltip-id="tooltip"
                data-tooltip-content={'Show previous'}
                data-tooltip-delay-show={400}
            >
                <RiArrowLeftLine className="w-full h-full group-hover:text-blue-400 group-focus:text-blue-400 select-none" />
            </button>

            {goToNextToViewEnabled && (
                <>
                    <div
                        className={`flex-1 ${
                            firstNotWatchedVisible || firstNotWatched <= cleanFirstVisible.current ? 'hidden' : ''
                        }`}
                    />

                    <button
                        className={`${
                            firstNotWatchedVisible ||
                            (firstNotWatched <= cleanLastVisible.current &&
                                firstNotWatched >= cleanFirstVisible.current)
                                ? 'opacity-0 pointer-none select-none'
                                : ''
                        } group w-fit h-12 p-3 rounded-full flex items-center justify-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm`}
                        onClick={() => goFirstNotWatched()}
                        type="button"
                        disabled={firstNotWatchedVisible}
                        aria-label="Go to next not watched"
                        data-tooltip-id="tooltip"
                        data-tooltip-content={'Show next to watch'}
                        data-tooltip-delay-show={400}
                    >
                        <RiArrowLeftLine
                            className={`w-full h-full group-hover:text-blue-400 group-focus:text-blue-400 select-none ${
                                firstNotWatchedVisible || firstNotWatched >= cleanLastVisible.current ? 'hidden' : ''
                            }`}
                        />

                        <RiEyeFill className="w-full h-full group-hover:text-blue-400 group-focus:text-blue-400 select-none" />

                        <RiArrowRightLine
                            className={`w-full h-full group-hover:text-blue-400 group-focus:text-blue-400 select-none ${
                                firstNotWatchedVisible || firstNotWatched <= cleanFirstVisible.current ? 'hidden' : ''
                            }`}
                        />
                    </button>

                    <div
                        className={`flex-1 ${
                            firstNotWatchedVisible || firstNotWatched >= cleanLastVisible.current ? 'hidden' : ''
                        }`}
                    />
                </>
            )}

            <button
                className={`${
                    scrolledToTheEnd ? 'opacity-0 pointer-none select-none' : ''
                } groupw-12 w-12 h-12 p-3 rounded-full touch:hidden flex items-center justify-center outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm`}
                onClick={() => goNext()}
                type="button"
                disabled={scrolledToTheEnd}
                aria-label="Next"
                data-tooltip-id="tooltip"
                data-tooltip-content={'Show next'}
                data-tooltip-delay-show={400}
            >
                <RiArrowRightLine className="w-full h-full group-hover:text-blue-400 group-focus:text-blue-400 select-none" />
            </button>
        </div>
    );
};

export default HorizontalSlider;
