'use client';

import { Event, useEvents } from '@/component/Events';
import NextArc from '@/component/NextArc';
import NextEpisode from '@/component/NextEpisode';
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

    const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);

    const [nextArcToWatch, setNextArcToWatch] = useState(defaultNextArcToWatch);
    const [nextEpisodeToWatch, setNextEpisodeToWatch] = useState(defaultNextEpisodeToWatch);
    const [toggle, setToggle] = useState(0);

    useEffect(() => {
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
    }, [arcs, toggle]);

    const onViewChanged = (id: string) => {
        setToggle((prev) => prev + 1);
    };

    useEffect(() => {
        sub(Event.ON_VIEW, onViewChanged);

        return () => {
            unsub(Event.ON_VIEW, onViewChanged);
        };
    }, [sub, unsub]);

    return (
        <section className="relative w-full overflow-y-hidden overflow-x-auto h-1/5 min-h-[20%] items-center px-4 sm:px-8 py-4 sm:py-8">
            <div className="relatve w-fit h-full flex gap-2 sm:gap-4">
                {nextArcToWatch && <NextArc arc={nextArcToWatch} />}
                {nextEpisodeToWatch && <NextEpisode episode={nextEpisodeToWatch} />}
            </div>
        </section>
    );
}
