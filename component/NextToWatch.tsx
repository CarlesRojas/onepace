'use client';

import { Event, useEvents } from '@/component/Events';
import { default as NextToWatchItem } from '@/component/NextToWatchItem';
import arcsData from '@/data/data.json';
import { Arc, ArcSchema, Episode } from '@/data/schemas';
import { hasCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

interface Props {
    defaultNextArcToWatch: Arc | null;
    defaultNextEpisodeToWatch: Episode | null;
}

export default function NextToWatch({ defaultNextArcToWatch, defaultNextEpisodeToWatch }: Props) {
    const { sub, unsub } = useEvents<string>();

    const [nextArcToWatch, setNextArcToWatch] = useState(defaultNextArcToWatch);
    const [nextEpisodeToWatch, setNextEpisodeToWatch] = useState(defaultNextEpisodeToWatch);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);

        let newNextArcToWatch: Arc | null = null;
        let newNextEpisodeToWatch: Episode | null = null;

        arcs.map((arc, i) => {
            const arcWatched = hasCookie(`arc-${i}-viewed`);
            if (arcWatched) return;

            let firstEpisodeNotWatched: Episode | null = null;
            let allEpisodesWatched = true;
            arc.episodes.map((episode, j) => {
                const episodeWatched = hasCookie(`arc-${i}-ep-${j}-viewed`);

                if (!episodeWatched) {
                    if (!firstEpisodeNotWatched) firstEpisodeNotWatched = episode;
                    allEpisodesWatched = false;
                }
            }, 0);

            if (!newNextArcToWatch && !allEpisodesWatched) {
                newNextArcToWatch = arc;
                if (!newNextEpisodeToWatch && firstEpisodeNotWatched) newNextEpisodeToWatch = firstEpisodeNotWatched;
            }

            setNextArcToWatch(newNextArcToWatch);
            setNextEpisodeToWatch(newNextEpisodeToWatch);
        }, 0);
    }, [toggle]);

    const onViewChanged = (id: string) => {
        setToggle((prev) => !prev);
    };

    useEffect(() => {
        sub(Event.ON_VIEW, onViewChanged);

        return () => {
            unsub(Event.ON_VIEW, onViewChanged);
        };
    }, [sub, unsub]);

    const arcIndex = arcsData.findIndex((arc: any) => arc.id === nextArcToWatch?.id) ?? 0;
    const episodeIndex = nextArcToWatch?.episodes.findIndex((episode) => episode.id === nextEpisodeToWatch?.id) ?? 0;

    return (
        <section className="relative flex flex-col gap-8 w-full max-w-7xl h-fit items-center px-4 sm:px-8 py-6 sm:py-8">
            <h2 className="font-medium text-xl sm:text-2xl">Next to watch</h2>

            <div className="relatve w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-6">
                {nextArcToWatch && (
                    <NextToWatchItem
                        arcIndex={arcIndex}
                        image={nextArcToWatch.images.length > 0 ? nextArcToWatch.images[0] : undefined}
                        itemTitle={nextArcToWatch.invariant_title}
                        translations={nextArcToWatch.translations}
                        downloads={nextArcToWatch.downloads}
                        type="Arc"
                    />
                )}

                {nextEpisodeToWatch && (
                    <NextToWatchItem
                        arcIndex={arcIndex}
                        episodeIndex={episodeIndex}
                        image={nextEpisodeToWatch.images.length > 0 ? nextEpisodeToWatch.images[0] : undefined}
                        itemTitle={nextEpisodeToWatch.invariant_title}
                        translations={nextEpisodeToWatch.translations}
                        downloads={nextEpisodeToWatch.downloads}
                        type="Episode"
                    />
                )}
            </div>
        </section>
    );
}
