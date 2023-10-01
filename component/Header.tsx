'use client';

import Dialog from '@/component/Dialog';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { RiArrowLeftLine, RiCloseLine, RiDiscordFill, RiMenuLine, RiMusic2Line } from 'react-icons/ri';

export default function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navigation = (
        <nav className="relative gap-0 md:gap-1 flex flex-col md:flex-row w-fit h-full items-center justify-center">
            <a
                href="/"
                className={`uppercase flex items-center justify-center h-full px-4 py-4 md:py-0 text-lg font-semibold cursor-pointer outline-none pointer:hover:text-blue-400 pointer:focus-visible:text-blue-400 pointer:focus-visible:underline underline-offset-8 decoration-2 active:text-blue-500 ${
                    pathname === '/' ? 'text-blue-500' : ''
                }`}
            >
                Watch
            </a>

            <a
                href="/about"
                className={`uppercase flex items-center justify-center h-full px-4 py-4 md:py-0 text-lg font-semibold cursor-pointer outline-none pointer:hover:text-blue-400 pointer:focus-visible:text-blue-400 pointer:focus-visible:underline underline-offset-8 decoration-2 active:text-blue-500 ${
                    pathname === '/about' ? 'text-blue-500' : ''
                }`}
            >
                About
            </a>
        </nav>
    );

    const links = (
        <div className="relative gap-2 flex w-fit h-full items-center justify-center">
            <a
                href="https://discord.gg/onepace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={'One Pace Discord'}
                className={
                    'w-14 h-14 p-[0.9rem] cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus-visible:scale-110 pointer:focus-visible:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm'
                }
                data-tooltip-id="tooltip"
                data-tooltip-content={'One Pace Discord'}
                data-tooltip-delay-show={400}
            >
                <RiDiscordFill className="w-full h-full pointer-events-none" />
            </a>

            <a
                href="https://forums.arlongpark.net/topic/35045/one-pace/3212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={'Arlong Park Forums'}
                className={
                    'group w-14 h-14 p-[0.9rem] cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus-visible:scale-110 pointer:focus-visible:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm'
                }
                data-tooltip-id="tooltip"
                data-tooltip-content={'Arlong Park Forums'}
                data-tooltip-delay-show={400}
            >
                <Image
                    src="/asset/icon/ArlongPark.svg"
                    alt="Arlong Park Forums icon"
                    className="dark:invert w-full h-full pointer-events-none group-hover:filter-blue-400 group-focus-visible:filter-blue-400"
                    width={64}
                    height={64}
                />
            </a>

            <a
                href="http://onepiecetracklist.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={'One Piece Tracklist'}
                className={
                    'w-14 h-14 p-[0.9rem] cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus-visible:scale-110 pointer:focus-visible:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm'
                }
                data-tooltip-id="tooltip"
                data-tooltip-content={'One Piece Tracklist'}
                data-tooltip-delay-show={400}
            >
                <RiMusic2Line className="w-full h-full pointer-events-none" />
            </a>
        </div>
    );

    return (
        <header className="sticky z-40 top-0 left-0 w-full h-24 flex gap-2 sm:gap-4 justify-between items-center py-4 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-950 border-b border-b-neutral-200 dark:border-b-neutral-900">
            <a
                href="/"
                className={`relative w-fit h-full cursor-pointer transition-transform outline-none pointer:hover:scale-110 pointer:focus-visible:scale-110 active:scale-105`}
                data-tooltip-id="tooltip"
                data-tooltip-content={'Go Home'}
                data-tooltip-delay-show={400}
            >
                <Image
                    src="/asset/icon/OnePace.svg"
                    alt="OnePace logo"
                    className="h-full object-contain w-fit"
                    width={256}
                    height={92}
                />
            </a>

            <a
                className={`${
                    pathname === '/' ? 'hidden' : 'flex'
                } group gap-2 items-center w-14 h-14 p-[0.9rem] cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus-visible:scale-110 pointer:focus-visible:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm`}
                href="/"
                aria-label="Back"
                data-tooltip-id="tooltip"
                data-tooltip-content={'Back'}
                data-tooltip-delay-show={400}
            >
                <RiArrowLeftLine className="w-full h-full pointer-events-none" />
            </a>

            <div className="relative flex-1" />

            <button
                className={
                    'flex md:hidden items-center justify-center w-14 h-14 p-[0.9rem] cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus-visible:scale-110 pointer:focus-visible:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-black !bg-opacity-80 backdrop-blur-md shadow-sm'
                }
                type="button"
                aria-label={isOpen ? 'Open Menu' : 'Close Menu'}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {isOpen ? (
                    <RiCloseLine className="w-full h-full pointer-events-none" />
                ) : (
                    <RiMenuLine className="w-full h-full pointer-events-none" />
                )}
            </button>

            <div className="relative w-fit h-full items-center justify-center hidden md:flex gap-4">
                {navigation}
                {links}
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="flex md:hidden">
                <div className="relative w-fit max-w-[90vw] h-fit p-8 flex flex-col items-center justify-center gap-4">
                    {navigation}
                    {links}
                </div>
            </Dialog>
        </header>
    );
}
