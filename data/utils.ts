export const getDurationInSeconds = (duration: string) => {
    if (duration.split(':').length === 2) duration = `0:${duration}`;

    const [hours, minutes, seconds] = duration.split(':').map((n) => parseInt(n));
    return hours * 3600 + minutes * 60 + seconds;
};

export const getDurationString = (durationInSeconds: number) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;

    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
};
