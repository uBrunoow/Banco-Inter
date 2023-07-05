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
<<<<<<< HEAD
        'inter-background': "url('/assets/background')",
      },

      backgroundPosition: {
        'right-center': 'right center',
      },

      fontSize: {
        'fs-32': '2rem',
=======
        bgInter: "url('/src/app/assets/bg-inter.png')",
>>>>>>> ea274ec04cee35e62156519478168f9e83fccb6f
      },
    },
  },
  plugins: [],
}
