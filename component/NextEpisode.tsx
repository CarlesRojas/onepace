import { DOWNLOAD_TOOLTIP, DOWNLOAD_TYPE_NAME } from '@/data/constants';
import { DownloadType, Episode } from '@/data/schemas';
import Image from 'next/image';
import { FaDownload, FaMagnet, FaTelegramPlane } from 'react-icons/fa';

interface Props {
    episode: Episode;
}

export default function NextEpisode({ episode }: Props) {
    const { images, invariant_title, translations, downloads, id } = episode;

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
        <div className="relative flex w-fit max-w-[90vw] overflow-x-hidden h-full p-3 sm:p-4 gap-3 sm:gap-6 rounded-2xl bg-neutral-200 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-600">
            <div className="relative flex overflow-hidden items-center justify-center h-full max-h-full aspect-[16/9] rounded-lg shadow-lg">
                {images.length > 0 ? (
                    <Image
                        src={`/asset/image/${images[0].src.replace('.webp', '.jpg')}`}
                        alt={episode.invariant_title}
                        width={400}
                        height={225}
                        priority
                        className="animate-skeketon dark:animate-skeketonDark h-full w-full object-cover rounded-lg select-none"
                        sizes="(max-width: 639px) 225px, (max-width: 767px) 275px, (max-width: 1023px) 325px, 400px"
                    />
                ) : (
                    <div className="relative flex items-center justify-center w-full h-full bg-white dark:bg-neutral-950 !bg-opacity-70 rounded-xl">
                        <p className="font-semibold text-lg">No preview</p>
                    </div>
                )}
            </div>

            <div className="relative flex h-full flex-col justify-between">
                <div className="relative flex flex-col sm:gap-1">
                    <p className="opacity-60 text-sm sm:text-base !leading-4">Next episode to watch:</p>
                    <h2 className="font-semibold text-base sm:text-2xl text-ellipsis whitespace-nowrap overflow-hidden max-w-[12rem] sm:max-w-[20rem]">
                        {title}
                    </h2>
                </div>

                <div className="flex gap-2 sm:gap-3">
                    {downloads.map(({ type, uri, id }) => (
                        <a
                            key={id}
                            href={uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Download ${DOWNLOAD_TYPE_NAME[type]}`}
                            className="w-12 h-12 sm:w-14 sm:h-14 p-3 sm:p-[0.9rem] gap-3 flex items-center justify-center cursor-pointer transition-transform outline-none rounded-full border border-sky-300 dark:border-sky-700 bg-sky-200 dark:bg-sky-900 !bg-opacity-80 backdrop-blur-md shadow-sm pointer:hover:scale-110 pointer:focus-visible:scale-110 active:scale-105"
                            data-tooltip-id="tooltip"
                            data-tooltip-content={DOWNLOAD_TOOLTIP[type]}
                            data-tooltip-delay-show={400}
                        >
                            {DOWNLOAD_TYPE_ICON[type]}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
