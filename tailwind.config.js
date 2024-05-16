/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'body' : ['Montserrat'], 
      },
      colors: {
        'gradient-1': 'hsl(236, 72%, 79%)',
        'gradient-2': 'hsl(237, 63%, 64%)',
        'very-light-grayish-blue' : 'hsl(240, 78%, 98%)',
        'light-grayish-blue' : 'hsl(234, 14%, 74%)',
        'grayish-blue' : 'hsl(233, 13%, 49%)',
        'dark-grayish-blue' : 'hsl(232, 13%, 33%)'
      }
    },
  },
  plugins: [],
}

