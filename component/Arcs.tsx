import Arc from '@/component/Arc';
import HorizontalSlider from '@/component/HorizontalSlider';
import arcsData from '@/data/data.json';
import { ArcSchema, type Arc as ArcType } from '@/data/schemas';

export default function Arcs() {
    const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as ArcType);

    return (
        <section className="relative flex flex-col w-full h-fit items-center gap-2 sm:gap-4 py-6 sm:py-8">
            <HorizontalSlider id="arc" numberOfItems={arcs.length} containerId="arcsScroll" goToNextToViewEnabled />

            <h2 className="font-medium text-xl sm:text-2xl">Arcs</h2>

            <div
                className="relatve w-full h-[40vh] min-h-[20rem] 2xl:min-h-[30rem] overflow-y-hidden overflow-x-auto snap-x snap-mandatory scroll-pl-4"
                id="arcsScroll"
            >
                <div className="relatve min-w-full w-fit h-full flex flex-row gap-6 px-4 pt-4">
                    {arcs.map((arc, i) => arc.images.length > 0 && <Arc key={arc.id} arc={arc} index={i} />)}
                </div>
            </div>
        </section>
    );
}
