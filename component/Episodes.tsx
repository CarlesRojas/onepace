import Episode from '@/component/Episode';
import { type Arc as ArcType } from '@/data/schemas';

interface Props {
    arc: ArcType;
    index: string;
}

export default function Episodes({ arc, index }: Props) {
    const { episodes } = arc;

    // TODO const cookieName = `arc-${index}-viewed`;
    // const cookieValue = Astro.cookies.get(cookieName)?.boolean() ?? false;

    return (
        <section className="relative flex flex-col w-full items-center gap-8 py-6 sm:py-12">
            {/* <HorizontalSlider
                client:load
                id="episode"
                numberOfItems={episodes.length}
                arcIndex={parseInt(index)}
                containerId="episodesScroll"
                goToNextToViewEnabled={!cookieValue}
            /> */}
            <h2 className="font-medium text-2xl sm:text-3xl">Episodes</h2>

            <div
                className="relatve w-full h-fit overflow-x-auto snap-x snap-mandatory scroll-pl-4 sm:scroll-pl-8"
                id="episodesScroll"
            >
                <div className="relatve w-fit min-w-full h-fit flex flex-row justify-center gap-6 sm:gap-12 py-4 px-4 sm:px-8 pr-32 sm:pr-unset">
                    {episodes.map((episode, i) => (
                        <Episode episode={episode} arcIndex={parseInt(index)} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
