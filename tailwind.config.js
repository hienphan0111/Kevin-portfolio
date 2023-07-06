/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        typing: "typing 2s steps(20)"
      },
      keyframes: {
        type: {
          from: { width: "0"},
          to: { width: "20ch"}
        },
      },
    },
  },
  plugins: [],
}
