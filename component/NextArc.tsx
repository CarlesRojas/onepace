import { DOWNLOAD_TOOLTIP, DOWNLOAD_TYPE_NAME } from '@/data/constants';
import { Arc, DownloadType } from '@/data/schemas';
import Image from 'next/image';
import { FaDownload, FaMagnet, FaTelegramPlane } from 'react-icons/fa';
import View from './View';

interface Props {
    arc: Arc;
    arcIndex: number;
}

export default function NextArc({ arc, arcIndex }: Props) {
    const { images, color, invariant_title, translations, downloads, id } = arc;

    const translation = translations.find((t) => t.language_code === 'en') ?? {
        title: invariant_title,
        description: ''
    };
    const { title } = translation;

    const DOWNLOAD_TYPE_ICON: Record<DownloadType, JSX.Element> = {
        [DownloadType.MAGNET]: <FaMagnet />,
        [DownloadType.TORRENT]: <FaDownload />,
        [DownloadType.TELEGRAM]: <FaTelegramPlane className="scale-[1.4]" />
    };

    return (
        <div className="relative flex w-full h-full p-3 gap-3 sm:gap-6 rounded-2xl bg-neutral-200 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-600">
            <div
                className="relative h-[12rem] min-h-[12rem] w-[11rem] min-w-[11rem] flex overflow-hidden items-center justify-center rounded-lg shadow-lg"
                style={{ borderColor: color ?? 'transparent' }}
            >
                <Image
                    src={`/asset/image/${images[0].src}`}
                    alt={title}
                    width={400}
                    height={600}
                    sizes="(max-width: 639px) 225px, (max-width: 767px) 275px, (max-width: 1023px) 325px, 400px" // TODO
                    className="animate-skeketon dark:animate-skeketonDark scale-[1.2] -mt-[25%] h-full w-full object-cover rounded-lg select-none"
                    priority
                />
            </div>

            <div className="relative flex h-full flex-col justify-between">
                <div className="relative flex flex-col sm:gap-1">
                    <h2 className="font-semibold text-base sm:text-lg line-clamp-4 pr-8">{title}</h2>
                    <p className="opacity-60 text-sm sm:text-base !leading-4 pr-8">Arc {arcIndex + 1}</p>
                </div>

                <div className="flex gap-2 sm:gap-3">
                    {downloads.map(({ type, uri, id }) => (
                        <a
                            key={id}
                            href={uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Download ${DOWNLOAD_TYPE_NAME[type]}`}
                            className="w-12 h-12 p-3 gap-3 flex items-center justify-center cursor-pointer transition-transform outline-none rounded-full border border-sky-300 dark:border-sky-700 bg-sky-200 dark:bg-sky-900 !bg-opacity-80 backdrop-blur-md shadow-sm pointer:hover:scale-110 pointer:focus-visible:scale-110 active:scale-105"
                            data-tooltip-id="tooltip"
                            data-tooltip-content={DOWNLOAD_TOOLTIP[type]}
                            data-tooltip-delay-show={400}
                        >
                            {DOWNLOAD_TYPE_ICON[type]}
                        </a>
                    ))}
                </div>
            </div>

            <View defaultValue={false} id={`arc-${arcIndex}`} autoReset />
        </div>
    );
}
