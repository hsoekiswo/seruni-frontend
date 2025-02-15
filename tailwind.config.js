/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2596be',
        'custom-blue-2': '#BBC9CC',
        'custom-yellow': '#e7c97a',
        'custom-yellow-2': '#e9b760',
        'custom-yellow-3': '#c7b370',
        'custom-red': '#F0AB81',
        'custom-orange': '#e7965c',
        'custom-orange-2': '#d87b52',
        'custom-orange-3': '#f99e74',
        'custom-green': '#aeb494',
        'custom-green-2': '#c0ba8c',
        'custom-green-3': '#c7b370',
        'custom-violet': '#646cff',
        'custom-cream': '#FAF6EA',
        'custom-cream-2': '#EBE1C6'
      },
      fontFamily: {
        'comorant': ['Cormorant', 'serif'],
      }
    },
  },
  plugins: [],
}

