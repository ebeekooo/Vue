/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}', // ← IMPORTANTE: incluir .vue
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
