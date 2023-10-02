import Arcs from '@/component/Arcs';
import NextToWatch from '@/component/NextToWatch';
import Stats from '@/component/Stats';
import arcsData from '@/data/data.json';
import { Arc, ArcSchema, Episode } from '@/data/schemas';
import { getDurationInSeconds } from '@/data/utils';
import { cookies } from 'next/headers';

export default function Home() {
    const cookieStore = cookies();
    const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);

    const arcStartPositionInSeconds: number[] = [];
    const arcFinished: boolean[] = [];
    let nextArcToWatchIndex: Arc | null = null;
    let nextEpisodeToWatchIndex: Episode | null = null;

    const totalSeconds = arcs.reduce((acc, arc) => {
        arcStartPositionInSeconds.push(acc);
        return acc + getDurationInSeconds(arc.duration);
    }, 0);

    const totalSecondsWatched = arcs.reduce((acc, arc, i) => {
        const arcWatched = cookieStore.has(`arc-${i}-viewed`);
        if (arcWatched) {
            arcFinished.push(true);
            return acc + getDurationInSeconds(arc.duration);
        }

        let firstEpisodeNotWatched: Episode | null = null;
        let allEpisodesWatched = true;
        const totalSecondsEpisodesWatched = arc.episodes.reduce((acc_e, episode, j) => {
            const episodeWatched = cookieStore.has(`arc-${i}-ep-${j}-viewed`);
            if (!episodeWatched) {
                if (!firstEpisodeNotWatched) firstEpisodeNotWatched = episode;
                allEpisodesWatched = false;
            }
            return episodeWatched ? acc_e + getDurationInSeconds(episode.duration) : acc_e;
        }, 0);

        arcFinished.push(allEpisodesWatched);

        if (!nextArcToWatchIndex && !allEpisodesWatched) {
            nextArcToWatchIndex = arc;
            if (!nextEpisodeToWatchIndex && firstEpisodeNotWatched) nextEpisodeToWatchIndex = firstEpisodeNotWatched;
        }

        return acc + totalSecondsEpisodesWatched;
    }, 0);

    return (
        <main className="relative w-full h-fit flex flex-col items-center">
            <Arcs />

            <NextToWatch
                defaultNextArcToWatch={nextArcToWatchIndex}
                defaultNextEpisodeToWatch={nextEpisodeToWatchIndex}
            />

            <Stats
                defaultArcStartPositionInSeconds={arcStartPositionInSeconds}
                defaultArcFinished={arcFinished}
                defaultTotalSeconds={totalSeconds}
                defaultTotalSecondsWatched={totalSecondsWatched}
            />
        </main>
    );
}
