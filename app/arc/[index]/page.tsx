import arcsData from '@/data/data.json';
import { ArcSchema, type Arc } from '@/data/schemas';
import Image from 'next/image';

export interface ArcProps {
  params: { index: string };
}

export async function generateStaticParams() {
  const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);

  return arcs.map((_, index) => ({ index: index.toString() }));
}

export default function Arc({ params }: ArcProps) {
  const { index } = params;

  const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);
  const arc = arcs[parseInt(index)];

  return (
    <section
      className={
        'relative flex flex-col w-10/12 max-w-7xl m-auto items-center gap-12 py-20 scroll-mt-28 sm:scroll-mt-12'
      }
    >
      <div className="relative w-full h-fit flex flex-col items-center justify-center">
        <div
          className="relative flex items-center justify-center h-full w-full lg:h-[24rem] lg:w-[16rem] xl:h-[30rem] xl:w-[20rem] rounded-lg shadow-lg"
          id="arc-link"
          style={{ borderColor: arc.color ?? 'transparent' }}
        >
          <Image
            src={`/asset/image/${arc.images[0].src}`}
            alt={arc.invariant_title}
            width={512}
            height={768}
            className="h-full w-full object-cover rounded-lg"
          />

          <div
            className="absolute z-10 bottom-[7%] flex items-center justify-center rounded-full w-[18%] sm:w-[14%] aspect-square bg-[#282828] border-[3px] border-neutral-600"
            style={{
              borderColor: arc.color ?? 'transparent'
            }}
          >
            <p className="text-base sm:text-lg font-bold text-white">{index + 1}</p>
          </div>

          <div className="absolute z-10 bottom-[0.1%] sm:bottom-[0.9%] flex items-center justify-center rounded-full">
            <p className="text-sm sm:text-base font-semibold opacity-50 text-neutral-50">{arc.duration}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
