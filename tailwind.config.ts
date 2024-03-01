import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(218, 237, 110)',
        background: 'rgb(22, 22, 22)',
        white: 'rgb(245, 245, 245)',
        gray: 'rgb(168, 173, 178)',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
