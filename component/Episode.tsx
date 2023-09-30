import { LANGUAGE_NAME } from '@/data/constants';
import { Episode } from '@/data/schemas';
import Image from 'next/image';

interface Props {
    episode: Episode;
    index: number;
    arcIndex: number;
}

export default function Episode({ episode, index, arcIndex }: Props) {
    const {
        images,
        duration,
        invariant_title,
        translations,
        manga_chapters,
        anime_episodes,
        resolution,
        released_at,
        downloads
    } = episode;

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

    // TODO const cookieName = `arc-${arcIndex}-ep-${index}-viewed`;
    // const cookieValue = Astro.cookies.get(cookieName)?.boolean() ?? false;

    return (
        <div
            className="relative w-[80vw] sm:w-[20rem] lg:w-[24rem] h-fit flex flex-col justify-center gap-4 snap-start"
            id={`episode-${index}`}
        >
            <div className="relative flex items-center justify-center w-full h-[45vw] sm:h-[11.25rem] lg:h-[13.5rem] rounded-xl border border-neutral-200 dark:border-neutral-800">
                {images.length > 0 ? (
                    <Image
                        src={`/asset/image/${images[0].src.replace('.webp', '.jpg')}`}
                        alt={episode.invariant_title}
                        width={854}
                        height={480}
                        className="h-full w-full object-cover rounded-xl select-none"
                    />
                ) : (
                    <div className="relative flex items-center justify-center w-full h-full bg-white dark:bg-neutral-950 !bg-opacity-80 rounded-xl">
                        <p className="font-semibold text-lg">No preview</p>
                    </div>
                )}

                {/* TODO <View
                    defaultValue={cookieValue}
                    client:load
                    id={`arc-${arcIndex}-ep-${index}`}
                    overrideId={`arc-${arcIndex}`}
                /> */}
            </div>

            <div className="relative flex w-full sm:w-fit justify-center sm:justify-start flex-col gap-4">
                <h1 className="font-semibold text-lg sm:text-xl">{title}</h1>
                <p className="opacity-80 max-w-3xl">{description}</p>

                <div className="flex flex-wrap gap-3">
                    {downloads.map(({ type, uri }) => (
                        <a
                            href={uri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-3 flex items-center justify-center p-4 cursor-pointer transition-transform outline-none rounded-full border border-sky-300 dark:border-sky-700 bg-sky-200 dark:bg-sky-900 !bg-opacity-80 backdrop-blur-md shadow-sm pointer:hover:scale-110 pointer:focus:scale-110 active:scale-105"
                        >
                            {/* TODO <Icon className="w-4 h-4" name={DOWNLOAD_TYPE_ICON[type]} /> */}
                        </a>
                    ))}
                </div>

                <div className="grid grid-cols-2 w-fit gap-x-12 gap-y-4">
                    {info.map(({ label, value }) => (
                        <div className="flex flex-col ">
                            <p className="text-sm opacity-80">{label}</p>
                            <p className="font-semibold">{value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
