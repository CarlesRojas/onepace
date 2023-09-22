// import View from '@/components/View';
import arcsData from '@/data/data.json';
import { ArcSchema, type Arc } from '@/data/schemas';
import Image from 'next/image';
import { CSSProperties } from 'react';

// const viewCookieValues = arcs.map((_, i) => Astro.cookies.get(`arc-${i}-viewed`)?.boolean() ?? false);

export default function Arcs() {
  const arcs = arcsData.map((arc: any) => ArcSchema.parse(arc) as Arc);

  return (
    <section className="relative w-full h-fit flex flex-col items-center justify-center gap-8 py-10 md:py-20">
      <h2 className="font-medium text-2xl sm:text-3xl">Arcs</h2>

      <div className="relative w-full h-fit grid lg:flex lg:flex-wrap items-center justify-center gap-3 px-3 md:gap-4 md:px-6 xl:gap-6 xl:px-12 grid-cols-2 md:grid-cols-3">
        {arcs.map(
          (arc, i) =>
            arc.images.length > 0 && (
              <div className="relative" key={arc.id}>
                <a
                  href={`arc/${i}`}
                  className="relative flex items-center justify-center h-full w-full lg:h-[24rem] lg:w-[16rem] xl:h-[30rem] xl:w-[20rem] rounded-xl cursor-pointer overflow-hidden outline-none border-[3px]"
                  id="arc-link"
                  style={{ '--arc-color': arc.color ?? 'transparent' } as CSSProperties}
                >
                  <Image
                    src={`/asset/image/${arc.images[0].src}`}
                    alt={arc.invariant_title}
                    width={512}
                    height={768}
                    className="h-full w-full object-cover"
                  />

                  <div
                    className="absolute z-10 bottom-[7%] flex items-center justify-center rounded-full w-[18%] sm:w-[14%] aspect-square bg-[#282828] border-[3px] border-neutral-600"
                    style={{
                      borderColor: arc.color ?? 'transparent'
                    }}
                  >
                    <p className="text-base sm:text-lg font-bold text-white">{i + 1}</p>
                  </div>

                  <div className="absolute z-10 bottom-[0.1%] sm:bottom-[0.9%] flex items-center justify-center rounded-full">
                    <p className="text-sm sm:text-base font-semibold opacity-50 text-neutral-50">{arc.duration}</p>
                  </div>
                </a>

                {/* <View defaultValue={viewCookieValues[i]} client:load id={`arc-${i}`} /> */}
              </div>
            )
        )}
      </div>
    </section>
  );
}
