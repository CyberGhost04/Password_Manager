/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wheat': {
          '100': '#F0D1AF', // lightest
          '200': '#C9B093', // little darker
          '300': '#A38F77', // darker
        },
        'cream': {
          '100': '#FFFFED', // lightest
          '200': '#FCFBF4', // little darker
          '300': '#E6E3D3', // darker
          '400':'#E6DDCS', 
          '500':'',
          '600':'',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}