/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 80px rgba(15,23,42,0.35)',
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(circle at top left, rgba(59,130,246,0.22), transparent 30%), radial-gradient(circle at top right, rgba(16,185,129,0.18), transparent 25%), linear-gradient(180deg, rgba(2,6,23,1), rgba(15,23,42,1))',
      },
    },
  },
  plugins: [],
};
