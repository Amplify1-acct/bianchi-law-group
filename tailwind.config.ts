import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { red: '#a61c23', dark: '#272727', light: '#F0F5FA' }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        sans: ['"Nunito Sans"', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
