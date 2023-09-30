import { Arc } from '@/data/schemas';
import Image from 'next/image';
import { CSSProperties } from 'react';

interface Props {
    arc: Arc;
    index: number;
}

export default function Arc({ arc, index }: Props) {
    const { color, images, invariant_title, duration } = arc;

    return (
        <div className="relative h-full aspect-[2/3] snap-start" id={`arc-${index}`}>
            <a
                href={`arc/${index}`}
                className="relative flex items-center justify-center h-full w-full rounded-xl cursor-pointer overflow-hidden outline-none border-[3px]"
                id="arc-link"
                style={{ '--arc-color': color ?? 'transparent' } as CSSProperties}
            >
                <Image
                    src={`/asset/image/${images[0].src}`}
                    alt={invariant_title}
                    width={512}
                    height={768}
                    className="h-full w-full object-cover select-none"
                />

                <div
                    className="absolute z-10 bottom-[7%] flex items-center justify-center rounded-full w-[18%] sm:w-[14%] aspect-square bg-[#282828] border-[3px] border-neutral-600"
                    style={{ borderColor: color ?? 'transparent' }}
                >
                    <p className="text-base sm:text-lg font-bold text-white">{index + 1}</p>
                </div>

                <div className="absolute z-10 bottom-[0.1%] sm:bottom-[0.9%] flex items-center justify-center rounded-full">
                    <p className="text-sm sm:text-base font-semibold opacity-50 text-neutral-50">{duration}</p>
                </div>
            </a>

            {/* TODO <View defaultValue={cookieValue} client:load id={`arc-${index}`} borderReduction /> */}
        </div>
    );
}
