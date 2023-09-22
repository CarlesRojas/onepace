import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./component/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      gridTemplateAreas: {
        'timeline-mobile': ['icon job'],
        timeline: ['date icon job'],
        'timeline-inverted': ['job icon date']
      },
      screens: {
        touch: { raw: '(hover: none)' },
        pointer: { raw: '(hover: hover)' }
      }
    }
  },
  plugins: []
};
export default config;
