import { DOWNLOAD_TOOLTIP, DOWNLOAD_TYPE_NAME } from '@/data/constants';
import { Download, DownloadType, Image as ImageType, Translation } from '@/data/schemas';
import Image from 'next/image';
import { FaDownload, FaMagnet, FaTelegramPlane } from 'react-icons/fa';
import View from './View';

interface Props {
    arcIndex: number;
    episodeIndex?: number;
    image?: ImageType;
    itemTitle: string;
    translations: Translation[];
    downloads: Download[];
    type: 'Arc' | 'Episode';
}

export default function NextToWatchItem({
    arcIndex,
    episodeIndex,
    image,
    itemTitle,
    translations,
    downloads,
    type
}: Props) {
    const translation = translations.find((t) => t.language_code === 'en') ?? {
        title: itemTitle,
        description: ''
    };
    const { title } = translation;

    const DOWNLOAD_TYPE_ICON: Record<DownloadType, JSX.Element> = {
        [DownloadType.MAGNET]: <FaMagnet />,
        [DownloadType.TORRENT]: <FaDownload />,
        [DownloadType.TELEGRAM]: <FaTelegramPlane className="scale-[1.4]" />
    };

    const scale = type === 'Arc' ? 'scale-[1.2] -mt-[25%]' : '';

    return (
        <div className="relative flex w-full h-full p-3 gap-3 sm:gap-6 rounded-2xl bg-neutral-150 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-600">
            <div className="relative h-[9rem] min-h-[9rem] w-[8.5rem] min-w-[8.5rem] md:h-[10rem] md:min-h-[10rem] md:w-[9.25rem] md:min-w-[9.25rem] 2xl:h-[12rem] 2xl:min-h-[12rem] 2xl:w-[11rem] 2xl:min-w-[11rem] flex overflow-hidden items-center justify-center rounded-lg shadow-lg">
                {image ? (
                    <Image
                        src={`/asset/image/${image.src.replace('.webp', '.jpg')}`}
                        alt={title}
                        width={256}
                        height={256}
                        priority
                        className={`${scale} animate-skeketon dark:animate-skeketonDark h-full w-full object-cover rounded-lg select-none`}
                        sizes="256px"
                    />
                ) : (
                    <div className="relative flex items-center justify-center w-full h-full bg-white dark:bg-neutral-950 !bg-opacity-70 rounded-xl">
                        <p className="font-semibold text-lg">No preview</p>
                    </div>
                )}
            </div>

            <div className="relative flex h-full flex-col justify-between">
                <div className="relative flex flex-col sm:gap-1">
                    <h2 className="font-semibold text-base sm:text-lg line-clamp-3 md:line-clamp-4 pr-8">{title}</h2>

                    <p className="opacity-60 text-sm sm:text-base pr-8">
                        {type} {type === 'Arc' ? arcIndex + 1 : episodeIndex! + 1}
                    </p>
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

            <View defaultValue={false} id={`arc-${arcIndex}-ep-${episodeIndex}`} autoReset />
        </div>
    );
}
