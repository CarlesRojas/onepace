'use client';

import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

interface Props {
    id: string;
    defaultValue: boolean;
    borderReduction?: boolean;
    overrideId?: string;
}

const View = ({ id, defaultValue, borderReduction, overrideId }: Props) => {
    const [viewed, setViewed] = useState(defaultValue);

    const setViewedCookie = () => {
        setCookie(`${id}-viewed`, 'true', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });
    };

    useEffect(() => {
        const isOverrideViewed = hasCookie(`${overrideId}-viewed`);
        const isViewed = hasCookie(`${id}-viewed`);

        if (isViewed) setViewedCookie();
        setViewed(isOverrideViewed || isViewed);
    }, [id]);

    useEffect(() => {
        const isOverrideViewed = hasCookie(`${overrideId}-viewed`);
        if (isOverrideViewed) return;

        if (viewed) setViewedCookie();
        else deleteCookie(`${id}-viewed`);
    }, [id, viewed]);

    return (
        <div
            className={`absolute bg-neutral-50 dark:bg-neutral-950 z-20 top-0 bottom-0 left-0 right-0 rounded-lg pointer-events-none ${
                borderReduction ? 'm-[3px]' : ''
            } ${viewed ? '!bg-opacity-50 dark:!bg-opacity-70' : '!bg-opacity-0'}`}
        >
            <button
                className="absolute -right-2 -top-2 xl:-right-3 xl:-top-3 z-40 pointer-events-auto w-12 h-12 md:w-14 md:h-14 p-3 md:p-4 cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus-visible:scale-110 pointer:focus-visible:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 !bg-opacity-80 backdrop-blur-md shadow-sm"
                onClick={() => {
                    const isOverrideViewed = hasCookie(`${overrideId}-viewed`);
                    !isOverrideViewed && setViewed((prev) => !prev);
                }}
                type="button"
                aria-label="Toggle viewed"
            >
                {viewed ? (
                    <RiEyeOffFill className="w-full h-full select-none" />
                ) : (
                    <RiEyeFill className="w-full h-full select-none" />
                )}
            </button>
        </div>
    );
};

export default View;
