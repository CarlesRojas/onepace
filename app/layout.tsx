import '@/app/globals.css';
import { EventProvider } from '@/component/Events';
import Header from '@/component/Header';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'One Pace',
    description:
        'One Pace is a fan project that recuts the One Piece anime in an endeavor to bring it more in line with the pacing of the original manga by Eiichiro Oda. The team accomplishes this by removing filler scenes not present in the source material.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />

                <meta name="application-name" content="One Pace" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="One Pace" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="viewport"
                    content=" initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover minimum-scale=1"
                />

                <link rel="apple-touch-icon" href="/appleIcon120.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/appleIcon180.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/appleIcon152.png" />
                <link rel="apple-touch-icon" sizes="167x167" href="/appleIcon167.png" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://onepace.vercel.app" />
                <meta name="twitter:title" content="One Pace" />
                <meta
                    name="twitter:description"
                    content="One Pace is a fan project that recuts the One Piece anime in an endeavor to bring it more in line with the pacing of the original manga by Eiichiro Oda. The team accomplishes this by removing filler scenes not present in the source material."
                />
                <meta name="twitter:image" content="https://onepace.vercel.app./asset/icon/logo192.png" />
                <meta name="twitter:creator" content="@PinyaGames" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="One Pace" />
                <meta
                    property="og:description"
                    content="One Pace is a fan project that recuts the One Piece anime in an endeavor to bring it more in line with the pacing of the original manga by Eiichiro Oda. The team accomplishes this by removing filler scenes not present in the source material."
                />
                <meta property="og:site_name" content="One Pace" />
                <meta property="og:url" content="https://onepace.vercel.app" />
                <meta property="og:image" content="https://onepace.vercel.app/asset/icon/logo192.png" />

                <link rel="manifest" href="/manifest.json" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </head>

            <body
                className={`${montserrat.className} relative bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50 dark:text-opacity-90 overflow-x-hidden overflow-y-auto h-fit min-h-screen`}
            >
                <Header />
                <EventProvider>{children}</EventProvider>
            </body>
        </html>
    );
}
