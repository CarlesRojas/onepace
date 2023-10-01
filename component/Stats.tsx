'use client';

import { Event, useEvents } from '@/component/Events';
import arcsData from '@/data/data.json';
import { Arc, ArcSchema } from '@/data/schemas';
import { getDurationInSeconds, getDurationString } from '@/data/utils';
import { hasCookie } from 'cookies-next';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';

const TOP: Record<number, string> = {
    0: '0.5rem',
    1: '2rem',
    2: '3.5rem',
    3: '5rem'
};

export default function Stats() {
    const { sub, unsub } = useEvents<string>();

    const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);

    const arcStartPositionInSeconds = useRef<number[]>([]);
    const arcFinished = useRef<boolean[]>([]);

    const getTotalSeconds = useCallback(() => {
        arcStartPositionInSeconds.current = [];

        const totalSeconds = arcs.reduce((acc, arc) => {
            arcStartPositionInSeconds.current.push(acc);
            return acc + getDurationInSeconds(arc.duration);
        }, 0);

        return totalSeconds;
    }, [arcs]);

    const [toggle, setToggle] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(getTotalSeconds());
    const [totalSecondsWatched, setTotalSecondsWatched] = useState(0);

    useEffect(() => {
        arcFinished.current = [];

        setTotalSeconds(getTotalSeconds());

        setTotalSecondsWatched(
            arcs.reduce((acc, arc, i) => {
                const arcWatched = hasCookie(`arc-${i}-viewed`);
                if (arcWatched) {
                    arcFinished.current.push(true);
                    return acc + getDurationInSeconds(arc.duration);
                }

                let allEpisodesWatched = true;
                const totalSecondsEpisodesWatched = arc.episodes.reduce((acc_e, episode, j) => {
                    const episodeWatched = hasCookie(`arc-${i}-ep-${j}-viewed`);
                    if (!episodeWatched) allEpisodesWatched = false;
                    return episodeWatched ? acc_e + getDurationInSeconds(episode.duration) : acc_e;
                }, 0);

                arcFinished.current.push(arcWatched || allEpisodesWatched);

                return acc + totalSecondsEpisodesWatched;
            }, 0)
        );
    }, [arcs, getTotalSeconds, toggle]);

    const onViewChanged = (id: string) => {
        setToggle((prev) => prev + 1);
    };

    useEffect(() => {
        sub(Event.ON_VIEW, onViewChanged);

        return () => {
            unsub(Event.ON_VIEW, onViewChanged);
        };
    }, [sub, unsub]);

    const goToArc = (index: number) => {
        const container = document.getElementById('arcsScroll');
        if (!container || index < 0 || index >= arcs.length) return;

        const element = document.getElementById(`arc-${index}`);
        if (!element) return;

        const bounding = element.getBoundingClientRect();
        container.scrollTo({
            behavior: 'smooth',
            left: container.scrollLeft + bounding.left
        });
    };

    return (
        <section className="relative flex flex-col w-full items-center gap-8 sm:gap-12 p-4 sm:p-12">
            <h2 className="font-medium text-2xl sm:text-3xl">Your progress</h2>

            <div className="relative flex flex-col w-full h-full justify-start">
                <div className="relative w-full flex justify-between pb-1">
                    <p className="text-blue-600 dark:text-blue-400">
                        <span className="hidden sm:inline">Watched: </span>
                        {getDurationString(totalSecondsWatched)}
                    </p>

                    <p className="text-neutral-600 dark:text-neutral-500 inline">
                        <span className="hidden sm:inline">Remaining: </span>
                        {getDurationString(totalSeconds - totalSecondsWatched)}
                    </p>
                </div>

                <progress
                    className="w-full h-8 progress-red-500 border border-neutral-400 dark:border-neutral-600 rounded-full [&::-webkit-progress-bar]:overflow-hidden [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-neutral-200 dark:[&::-webkit-progress-bar]:bg-neutral-800 [&::-webkit-progress-value]:bg-blue-400 [&::-webkit-progress-value]:transition-all"
                    value={totalSecondsWatched}
                    max={totalSeconds}
                />

                <div className={`relative w-full h-[6.25rem]  ${totalSeconds > 0 ? 'hidden lg:flex' : 'hidden'}`}>
                    {arcs.map(({ id, invariant_title }, i) => (
                        <Fragment key={id}>
                            <div
                                className={`absolute w-[1px] top-0 -translate-x-1/2 rounded-full pointer-events-none ${
                                    arcFinished.current[i]
                                        ? 'bg-blue-400 opacity-50'
                                        : 'bg-neutral-400 dark:bg-neutral-600'
                                }`}
                                style={{
                                    left: `${(arcStartPositionInSeconds.current[i] / totalSeconds) * 100}%`,
                                    height: TOP[i % 4]
                                }}
                            />

                            <button
                                key={id}
                                type="button"
                                className={`absolute z-10 w-5 h-5 -translate-x-1/2 outline-none pointer:hover:scale-125 pointer:focus-visible:scale-125 active:scale-110 ${
                                    arcFinished.current[i]
                                        ? 'bg-blue-400 border-blue-500 pointer:hover:bg-blue-500 pointer:focus-visible:bg-blue-500 active:bg-blue-500'
                                        : 'bg-neutral-300 dark:bg-neutral-700 border-neutral-400 dark:border-neutral-600 pointer:hover:bg-neutral-400 pointer:focus-visible:bg-neutral-400 active:bg-neutral-400'
                                } rounded-full border transition-colors`}
                                style={{
                                    left: `${(arcStartPositionInSeconds.current[i] / totalSeconds) * 100}%`,
                                    top: TOP[i % 4]
                                }}
                                onClick={() => goToArc(i)}
                                data-tooltip-id="tooltip"
                                data-tooltip-content={`Show ${invariant_title} Arc`}
                                data-tooltip-delay-show={400}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}

// [&::-webkit-progress-bar]
// [&::-webkit-progress-value]
// [&::-moz-progress-bar]
