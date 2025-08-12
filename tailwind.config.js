/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        egen: {50:'#fff0f7',100:'#ffd6ea',500:'#ff4da2',600:'#ff2f8f'},
        teto: {50:'#eef4ff',100:'#d9e6ff',500:'#2563eb',600:'#1d4ed8'},
        neutral: {500:'#64748b'}
      }
    }
  },
  plugins: [],
}
