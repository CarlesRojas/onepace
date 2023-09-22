import { z } from 'zod';

export const ImageSchema = z.object({
    mime_type: z.string().optional().nullable(),
    src: z.string(),
    width: z.number(),
});
export type Image = z.infer<typeof ImageSchema>;

export const TranslationSchema = z.object({
    description: z.string().optional().nullable(),
    includes_dub: z.boolean(),
    includes_sub: z.boolean(),
    language_code: z.string(),
    title: z.string(),
});

export const DownloadTranslationSchema = z.object({
    language_code: z.string(),
    text: z.string(),
});
export type DownloadTranslation = z.infer<typeof DownloadTranslationSchema>;

export const DownloadSchema = z.object({
    id: z.string(),
    translations: z.array(DownloadTranslationSchema),
    type: z.string(),
    uri: z.string(),
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
    translations: z.array(TranslationSchema),
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
    color: z.string().optional().nullable(),
});
export type Arc = z.infer<typeof ArcSchema>;
