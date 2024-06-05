/** @type {import('tailwindcss').Config} */
import daisyui from './node_modules/daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1B2E37',
          secondary: '#0288D1',
          accent: '#F5B700',
          neutral: '#243E4A',
          base100: '#F5F5F5',
          info: '#00A3E0',
          success: '#388E3C',
          warning: '#F57C00',
          error: '#D32F2F',
        }
      },
    ],
  },
}