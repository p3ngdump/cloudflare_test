import * as React from 'react'
export default function EgenMale(){
  return (
    <svg width="700" height="420" viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="EgenMalegrad" x1="0" x2="1">
          <stop offset="0" stop-color="#ffd6ea" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
      </defs>
      <rect width="700" height="420" rx="28" fill="url(#EgenMalegrad)"/>
      <g transform="translate(40,40)">
        <rect x="0" y="0" width="360" height="260" rx="24" fill="#fff"/>
        <circle cx="180" cy="110" r="78" fill="#1f2937"/>
        <circle cx="180" cy="130" r="70" fill="#fff"/>
        <circle cx="158" cy="120" r="6"/>
        <circle cx="202" cy="120" r="6"/>
        <path d="M158 144 q22 16 44 0" stroke="#111" stroke-width="4" fill="none" stroke-linecap="round"/>
        <rect x="120" y="184" width="120" height="52" rx="12" fill="#ff4da2" opacity="0.12"/>
      </g>
      <g opacity="0.35">

    <g transform="translate(480,60)"><path d='M8 10 q2-4 6 0 q4-4 6 0 q0 4-6 8 q-6-4-6-8z' fill='#ff4da2' opacity='0.2'/></g>
    <g transform="translate(560,100)"><path d='M8 10 q2-4 6 0 q4-4 6 0 q0 4-6 8 q-6-4-6-8z' fill='#ff4da2' opacity='0.2'/></g>
    <g transform="translate(520,140)"><path d='M8 10 q2-4 6 0 q4-4 6 0 q0 4-6 8 q-6-4-6-8z' fill='#ff4da2' opacity='0.2'/></g>
    <g transform="translate(600,160)"><path d='M8 10 q2-4 6 0 q4-4 6 0 q0 4-6 8 q-6-4-6-8z' fill='#ff4da2' opacity='0.2'/></g>

      </g>
    </svg>
  )
}
