import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'laptop': {'min': '1000px'},
        // => @media (max-width: 1279px) { ... }
  
        'tablet': {'min': '640px', 'max': '999px'},
        // => @media (max-width: 1023px) { ... }
  
        'phone': {'max': '639px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        'darkvi': '#0c0043',
        'darkpurp': '#960058',
        'lightorange': '#f38716',
        'yell': '#fff87f',
        'blackGood': '#171717',
        'textGray': '#AAAAAA',
        'blueNice': '#007FFF'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'chess': "url('/src/chess.webp')",
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'MyFont': ['"My Font"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
        'lato':['lato', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']

      },
      
      
    },
  },
  plugins: [],
}
export default config
