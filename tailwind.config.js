/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { display: ['Pretendard','ui-sans-serif','system-ui'] },
      colors: {
        egen: { 50:'#fff0f7', 100:'#ffd6ea', 500:'#ff4da2', 600:'#ff2f8f', 700:'#e01878' },
        teto: { 50:'#eef4ff', 100:'#d9e6ff', 500:'#2563eb', 600:'#1d4ed8', 700:'#1742b5' }
      },
      boxShadow: {
        glowPink: '0 10px 30px rgba(255,77,162,.35)',
        glowBlue: '0 10px 30px rgba(37,99,235,.35)'
      }
    }
  },
  plugins: [],
}
