/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    process.env.NODE_ENV === 'production' ? 'cssnano' : undefined,
  },
};

export default config;
