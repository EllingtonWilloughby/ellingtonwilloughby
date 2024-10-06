import type { Config } from 'tailwindcss';
import postcss from 'postcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        xs: '512px'
      },
      colors: {
        root: 'var(--root)',
        counterpart: 'var(--counterpart)',
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        hover: 'var(--hover)',
        active: 'var(--active)'
      }
    }
  },
  plugins: []
};
export default config;
