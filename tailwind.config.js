/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        egen: { 500: '#ff499e', 600:'#ff2f8f' },
        teto: { 500: '#2563eb', 600:'#1d4ed8' }
      }
    }
  },
  plugins: [],
}
