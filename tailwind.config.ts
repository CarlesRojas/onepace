import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./component/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                'neutral-925': '#111111',
                'neutral-150': '#EDEDED'
            },

            gridTemplateAreas: {
                'timeline-mobile': ['icon job'],
                timeline: ['date icon job'],
                'timeline-inverted': ['job icon date']
            },

            screens: {
                touch: { raw: '(hover: none)' },
                pointer: { raw: '(hover: hover)' }
            },

            keyframes: {
                skeketon: {
                    '0%': { backgroundColor: '#f5f5f5' },
                    '100%': { backgroundColor: '#e5e5e5' }
                },
                skeketonDark: {
                    '0%': { backgroundColor: '#171717' },
                    '100%': { backgroundColor: '#262626' }
                }
            },

            animation: {
                skeketon: 'skeketon 1s infinite ease-in-out alternate',
                skeketonDark: 'skeketonDark 1s infinite ease-in-out alternate'
            }
        }
    },
    plugins: []
};
export default config;
