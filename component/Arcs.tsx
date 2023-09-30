import Arc from '@/component/Arc';
import arcsData from '@/data/data.json';
import { ArcSchema, type Arc as ArcType } from '@/data/schemas';

export default function Arcs() {
    const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as ArcType);

    return (
        <section className="relative flex flex-col w-full h-3/5 items-center gap-2 sm:gap-4 py-4 sm:py-12">
            {/* TODO <HorizontalSlider
                client:load
                id="arc"
                numberOfItems={arcs.length}
                containerId="arcsScroll"
                goToNextToViewEnabled
            /> */}
            <h2 className="font-medium text-2xl sm:text-3xl">Arcs</h2>

            <div
                className="relatve w-full h-full overflow-y-hidden overflow-x-auto snap-x snap-mandatory scroll-pl-4"
                id="arcsScroll"
            >
                <div className="relatve min-w-full w-fit h-full flex flex-row gap-6 p-4">
                    {arcs.map((arc, i) => arc.images.length > 0 && <Arc arc={arc} index={i} />)}
                </div>
            </div>
        </section>
    );
}
