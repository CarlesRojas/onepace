import { z } from 'zod';

export enum DownloadType {
    TORRENT = 'TORRENT',
    MAGNET = 'MAGNET',
    TELEGRAM = 'TELEGRAM'
}

export enum LanguageCode {
    jp = 'jp',
    en = 'en',
    ar = 'ar',
    de = 'de',
    es = 'es',
    fr = 'fr'
}

export enum MimeType {
    'image/webp' = 'image/webp',
    'image/jpeg' = 'image/jpeg'
}

export const ImageSchema = z.object({
    mime_type: z.nativeEnum(MimeType).optional().nullable(),
    src: z.string(),
    width: z.number()
});
export type Image = z.infer<typeof ImageSchema>;

export const TranslationSchema = z.object({
    description: z.string().optional().nullable(),
    includes_dub: z.boolean(),
    includes_sub: z.boolean(),
    language_code: z.nativeEnum(LanguageCode),
    title: z.string()
});
export type Translation = z.infer<typeof TranslationSchema>;

export const DownloadTranslationSchema = z.object({
    language_code: z.nativeEnum(LanguageCode),
    text: z.string()
});
export type DownloadTranslation = z.infer<typeof DownloadTranslationSchema>;

export const DownloadSchema = z.object({
    id: z.string(),
    translations: z.array(DownloadTranslationSchema),
    type: z.nativeEnum(DownloadType),
    uri: z.string()
});
export type Download = z.infer<typeof DownloadSchema>;

export const EpisodeSchema = z.object({
    anime_episodes: z.string().optional().nullable(),
    downloads: z.array(DownloadSchema),
    duration: z.string(),
    id: z.string(),
    images: z.array(ImageSchema),
    invariant_title: z.string(),
    manga_chapters: z.string().optional().nullable(),
    part: z.number(),
    released_at: z.string().optional().nullable(),
    resolution: z.string(),
    translations: z.array(TranslationSchema)
});
export type Episode = z.infer<typeof EpisodeSchema>;

export const ArcSchema = z.object({
    anime_episodes: z.string().optional().nullable(),
    downloads: z.array(DownloadSchema),
    duration: z.string(),
    episodes: z.array(EpisodeSchema),
    id: z.string(),
    images: z.array(ImageSchema),
    invariant_title: z.string(),
    manga_chapters: z.string().optional().nullable(),
    part: z.number(),
    released_at: z.string().optional().nullable(),
    resolution: z.string(),
    translations: z.array(TranslationSchema),
    color: z.string().optional().nullable()
});
export type Arc = z.infer<typeof ArcSchema>;
