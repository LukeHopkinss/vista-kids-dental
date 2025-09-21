// tailwind.config.mjs
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',     // harmless if you don't use /pages
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',       // keep if you use a /src structure
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0284c7', // optional brand color
      },
    },
  },
  plugins: [forms, typography, aspectRatio],
};
