/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0B0B0F',
        magenta: '#FF2D7B',
        cyan: '#00F0FF',
        'hot-white': '#F5F0FF',
        'card-bg': '#13131A',
        'gray-dark': '#4A4A5A',
        'gray-mid': '#8A8A9A',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-mp': 'linear-gradient(90deg, #FF2D7B 0%, #00F0FF 100%)',
        'gradient-mp-diag': 'linear-gradient(135deg, #FF2D7B 0%, #00F0FF 100%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'marquee': 'marquee-scroll 18s linear infinite',
        'bar-slide-up': 'bar-slide-up 0.5s cubic-bezier(0.2, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};