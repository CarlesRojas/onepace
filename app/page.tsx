import Arcs from '@/component/Arcs';
import Stats from '@/component/Stats';
import arcsData from '@/data/data.json';
import { Arc, ArcSchema } from '@/data/schemas';
import { getDurationInSeconds } from '@/data/utils';
import { cookies } from 'next/headers';

export default function Home() {
    const cookieStore = cookies();
    const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);

    const arcStartPositionInSeconds: number[] = [];
    const arcFinished: boolean[] = [];

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

        let allEpisodesWatched = true;
        const totalSecondsEpisodesWatched = arc.episodes.reduce((acc_e, episode, j) => {
            const episodeWatched = cookieStore.has(`arc-${i}-ep-${j}-viewed`);
            if (!episodeWatched) allEpisodesWatched = false;
            return episodeWatched ? acc_e + getDurationInSeconds(episode.duration) : acc_e;
        }, 0);

        arcFinished.push(arcWatched || allEpisodesWatched);

        return acc + totalSecondsEpisodesWatched;
    }, 0);

    return (
        <main className="relative w-full h-[calc(100vh-6rem)] flex flex-col items-center">
            <Arcs />
            <Stats
                defaultArcStartPositionInSeconds={arcStartPositionInSeconds}
                defaultArcFinished={arcFinished}
                defaultTotalSeconds={totalSeconds}
                defaultTotalSecondsWatched={totalSecondsWatched}
            />
        </main>
    );
}
