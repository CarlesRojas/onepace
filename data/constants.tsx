import { DownloadType, LanguageCode } from '@/data/schemas';

export const LANGUAGE_NAME: Record<LanguageCode, string> = {
    [LanguageCode.jp]: 'Japanese',
    [LanguageCode.en]: 'English',
    [LanguageCode.ar]: 'Arabic',
    [LanguageCode.de]: 'German',
    [LanguageCode.es]: 'Spanish',
    [LanguageCode.fr]: 'French'
};

export const DOWNLOAD_TYPE_NAME: Record<DownloadType, string> = {
    [DownloadType.MAGNET]: 'Magnet',
    [DownloadType.TORRENT]: 'Torrent',
    [DownloadType.TELEGRAM]: 'Telegram'
};

export const DOWNLOAD_TOOLTIP: Record<DownloadType, string> = {
    [DownloadType.MAGNET]: 'Open Torrent Magnet',
    [DownloadType.TORRENT]: 'Download Torrent',
    [DownloadType.TELEGRAM]: 'View on Telegram'
};

export const HOW_TO_WATCH = [
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Start by watching all OnePace episodes, then watch episodes 46-47.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Start by watching all OnePace episodes, then watch episodes 121-130 (Start from 13:56 at episode 121).',
    'Start by watching all OnePace episodes, then watch episode 152.',
    'Start by watching all OnePace episodes, then watch episodes 160-195 (from 17:17 at 160) and episode 207 (from 05:17 to 8:39).',
    'Watch all One Pace episodes.',
    'Start by watching all OnePace episodes, then watch episodes 250-263 (Start from 19:25 at episode 250).',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Start by watching all OnePace episodes, then watch episodes 453-456.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.',
    'Start by watching all OnePace episodes, then watch from episode 961 to the current episode (start at the eyecatcher on 961).',
    'Watch all One Pace episodes.',
    'Watch all One Pace episodes.'
];
