/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FDFFFC',
        secondary: '#121e41;',
        success: '#00B87C',
        danger: '#FF5B5B',
      },
    },
  },
  plugins: [],
};
