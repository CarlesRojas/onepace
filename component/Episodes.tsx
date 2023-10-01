import Episode from '@/component/Episode';
import HorizontalSlider from '@/component/HorizontalSlider';
import { type Arc as ArcType } from '@/data/schemas';
import { cookies } from 'next/headers';

interface Props {
    arc: ArcType;
    index: string;
}

export default function Episodes({ arc, index }: Props) {
    const cookieStore = cookies();
    const { episodes } = arc;

    return (
        <section className="relative flex flex-col w-full items-center gap-8 py-6 sm:py-12">
            <HorizontalSlider
                id="episode"
                numberOfItems={episodes.length}
                arcIndex={parseInt(index)}
                containerId="episodesScroll"
                goToNextToViewEnabled={!cookieStore.has(`arc-${index}-viewed`)}
            />

            <h2 className="font-medium text-2xl sm:text-3xl">Episodes</h2>

            <div
                className="relatve w-full h-fit overflow-x-auto snap-x snap-mandatory scroll-pl-4 sm:scroll-pl-8"
                id="episodesScroll"
            >
                <div className="relatve w-fit min-w-full h-fit flex flex-row justify-center gap-6 sm:gap-12 py-4 px-4 sm:px-8 pr-32 sm:pr-unset">
                    {episodes.map((episode, i) => (
                        <Episode key={episode.id} episode={episode} arcIndex={parseInt(index)} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
