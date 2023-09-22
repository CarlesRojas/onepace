'use client';

import Dialog from '@/component/Dialog';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { RiCloseLine, RiDiscordFill, RiMenuLine, RiMusic2Line } from 'react-icons/ri';
import SVG from 'react-inlinesvg';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = (
    <nav className="relative gap-0 md:gap-1 flex flex-col md:flex-row w-fit h-full items-center justify-center">
      <a
        href="/"
        className={`uppercase flex items-center justify-center h-full px-4 py-4 md:py-0 text-lg font-semibold cursor-pointer outline-none pointer:hover:text-blue-400 pointer:focus:text-blue-400 pointer:focus:underline underline-offset-8 decoration-2 active:text-blue-500 ${
          pathname === '/' ? 'text-blue-500' : ''
        }`}
      >
        Watch
      </a>

      <a
        href="/about"
        className={`uppercase flex items-center justify-center h-full px-4 py-4 md:py-0 text-lg font-semibold cursor-pointer outline-none pointer:hover:text-blue-400 pointer:focus:text-blue-400 pointer:focus:underline underline-offset-8 decoration-2 active:text-blue-500 ${
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
          'w-14 h-14 p-3 cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus:scale-110 pointer:focus:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 !bg-opacity-80 backdrop-blur-md shadow-sm'
        }
      >
        <RiDiscordFill className="w-full h-full pointer-events-none" />
      </a>

      <a
        href="https://forums.arlongpark.net/topic/35045/one-pace/3212"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'Arlong Park Forums'}
        className={
          'w-14 h-14 p-3 cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus:scale-110 pointer:focus:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 !bg-opacity-80 backdrop-blur-md shadow-sm'
        }
      >
        <SVG src="/asset/icon/ArlongPark.svg" className="w-full h-full pointer-events-none" />
      </a>

      <a
        href="http://onepiecetracklist.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'One Piece Tracklist'}
        className={
          'w-14 h-14 p-3 cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus:scale-110 pointer:focus:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 !bg-opacity-80 backdrop-blur-md shadow-sm'
        }
      >
        <RiMusic2Line className="w-full h-full pointer-events-none" />
      </a>
    </div>
  );

  return (
    <header className="sticky z-50 top-0 left-0 w-full h-24 flex gap-2 justify-between items-center py-4 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-900 border-b border-b-neutral-200 dark:border-b-neutral-800 shadow-md">
      <a
        href="/"
        className={`relative w-fit h-full cursor-pointer transition-transform outline-none pointer:hover:scale-110 pointer:focus:scale-110 active:scale-105`}
      >
        <SVG src="/asset/icon/OnePace.svg" className="h-full object-contain w-fit" />
      </a>

      <button
        className={
          'flex md:hidden items-center justify-center w-14 h-14 p-3 cursor-pointer transition-transform outline-none pointer:hover:text-blue-500 pointer:hover:scale-110 pointer:focus:scale-110 pointer:focus:text-blue-500 active:scale-105 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 !bg-opacity-80 backdrop-blur-md shadow-sm'
        }
        type="button"
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
