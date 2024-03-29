import View from '@/component/View';
import { Arc } from '@/data/schemas';
import { getDurationInSeconds, getDurationString } from '@/data/utils';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { CSSProperties } from 'react';

interface Props {
    arc: Arc;
    index: number;
}

export default function Arc({ arc, index }: Props) {
    const cookieStore = cookies();

    const { color, images, invariant_title, duration } = arc;

    return (
        <div className="relative h-full aspect-[2/3] snap-start" id={`arc-${index}`}>
            <a
                href={`arc/${index}`}
                className="arc-link relative flex items-center justify-center h-full w-full rounded-xl cursor-pointer overflow-hidden outline-none border-[3px]"
                id={`arc-link-${index}`}
                style={{ '--arc-color': color ?? 'transparent' } as CSSProperties}
            >
                <Image
                    src={`/asset/image/${images[0].src}`}
                    alt={invariant_title}
                    width={400}
                    height={600}
                    className="animate-skeketon dark:animate-skeketonDark h-full w-full object-cover select-none"
                    sizes="(max-width: 639px) 225px, (max-width: 767px) 275px, (max-width: 1023px) 325px, 400px"
                    priority={index < 6}
                />

                <div
                    className="absolute z-10 bottom-[7%] flex items-center justify-center rounded-full w-[18%] sm:w-[14%] aspect-square bg-[#282828] border-[3px] border-neutral-600"
                    style={{ borderColor: color ?? 'transparent' }}
                >
                    <p className="text-base sm:text-lg font-bold text-white">{index + 1}</p>
                </div>

                <div className="absolute z-10 bottom-[0.1%] sm:bottom-[0.9%] flex items-center justify-center rounded-full">
                    <p className="text-sm sm:text-base font-semibold opacity-50 text-neutral-50">
                        {getDurationString(getDurationInSeconds(duration))}
                    </p>
                </div>
            </a>

            <View defaultValue={cookieStore.has(`arc-${index}-viewed`)} id={`arc-${index}`} borderReduction />
        </div>
    );
}
