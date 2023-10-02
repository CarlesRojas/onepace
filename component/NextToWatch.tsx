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
        <section className="relative w-full overflow-y-hidden overflow-x-auto h-[22%] min-h-[22%] items-center px-4 sm:px-8 py-4 sm:py-8">
            <div className="relatve w-fit h-full flex gap-6">
                {nextArcToWatch && <NextArc arc={nextArcToWatch} arcIndex={arcIndex} />}

                {nextEpisodeToWatch && (
                    <NextEpisode episode={nextEpisodeToWatch} arcIndex={arcIndex} episodeIndex={episodeIndex} />
                )}
            </div>
        </section>
    );
}
