/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        'right-center': 'right center',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        sora: ['var(--font-sora)'],
      },
      boxShadow: {
        '3xl': '0px 4px 6px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
