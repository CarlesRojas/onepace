import { DOWNLOAD_TYPE_NAME, HOW_TO_WATCH, LANGUAGE_NAME } from '@/data/constants';
import { Arc, DownloadType } from '@/data/schemas';
import Image from 'next/image';
import { FaDownload, FaMagnet, FaTelegramPlane } from 'react-icons/fa';

interface Props {
    arc: Arc;
    index: number;
}

export default function ArcInfo({ arc, index }: Props) {
    const {
        images,
        color,
        duration,
        invariant_title,
        translations,
        manga_chapters,
        anime_episodes,
        resolution,
        released_at,
        downloads
    } = arc;

    const translation = translations.find((t) => t.language_code === 'en') ?? {
        title: invariant_title,
        description: ''
    };
    const { title, description } = translation;

    const dubLanguages = translations.filter((t) => t.includes_dub).map((t) => LANGUAGE_NAME[t.language_code]);
    const subLanguages = translations.filter((t) => t.includes_sub).map((t) => LANGUAGE_NAME[t.language_code]);

    const info: { label: string; value: string }[] = [];

    if (manga_chapters) info.push({ label: 'Manga Chapters', value: manga_chapters });
    if (anime_episodes) info.push({ label: 'Anime Episodes', value: anime_episodes });

    if (duration) info.push({ label: 'Duration', value: duration });
    if (resolution) info.push({ label: 'Resolution', value: resolution });

    if (released_at)
        info.push({
            label: 'Released At',
            value: new Date(released_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        });

    if (dubLanguages.length)
        info.push({
            label: dubLanguages.length > 1 ? 'Dub languages' : 'Dub language',
            value: dubLanguages.join(', ')
        });
    if (subLanguages.length)
        info.push({
            label: subLanguages.length > 1 ? 'Subtitle languages' : 'Subtitle language',
            value: subLanguages.join(', ')
        });

    const DOWNLOAD_TYPE_ICON: Record<DownloadType, JSX.Element> = {
        [DownloadType.MAGNET]: <FaMagnet className="w-4 h-4" />,
        [DownloadType.TORRENT]: <FaDownload className="w-4 h-4" />,
        [DownloadType.TELEGRAM]: <FaTelegramPlane className="w-4 h-4 scale-[1.4]" />
    };

    return (
        <section className="relative flex flex-col w-full max-w-7xl m-auto items-center gap-8 px-4 sm:px-8 py-6 sm:py-12 scroll-mt-28 sm:scroll-mt-12">
            <div className="relative w-full h-fit flex flex-col md:flex-row items-center justify-center sm:items-start gap-8">
                <div
                    className="relative flex items-center justify-center h-[27rem] w-[18rem] min-w-[18rem] sm:h-[33rem] sm:w-[22rem] sm:min-w-[22rem] xl:h-[36rem] xl:w-[24rem] xl:min-w-[24rem] rounded-lg shadow-lg"
                    id="arc-link"
                    style={{ borderColor: color ?? 'transparent' }}
                >
                    <Image
                        src={`/asset/image/${images[0].src}`}
                        alt={title}
                        width={512}
                        height={768}
                        className="h-full w-full object-cover rounded-lg select-none"
                    />
                </div>

                <div className="relative flex w-full sm:w-fit justify-center sm:justify-start flex-col gap-6">
                    <h1 className="font-semibold text-xl sm:text-3xl">{title}</h1>
                    <p className="opacity-80 sm:text-lg max-w-3xl">{description}</p>

                    <div className="flex flex-wrap gap-3">
                        {downloads.map(({ type, uri }) => (
                            <a
                                href={uri}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gap-3 flex items-center justify-center px-5 py-2 cursor-pointer transition-transform outline-none rounded-full border border-sky-300 dark:border-sky-700 bg-sky-200 dark:bg-sky-900 !bg-opacity-80 backdrop-blur-md shadow-sm pointer:hover:scale-110 pointer:focus-visible:scale-110 active:scale-105"
                            >
                                {DOWNLOAD_TYPE_ICON[type]}
                                <p className="uppercase font-semibold">{DOWNLOAD_TYPE_NAME[type]}</p>
                            </a>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 xl:grid-cols-3 w-fit gap-x-12 gap-y-4">
                        {info.map(({ label, value }) => (
                            <div className="flex flex-col ">
                                <p className="text-sm opacity-80">{label}</p>
                                <p className="font-semibold">{value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        <p className="font-semibold text-sky-600">How to watch:</p>
                        <p className="opacity-80">{HOW_TO_WATCH[index]}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
