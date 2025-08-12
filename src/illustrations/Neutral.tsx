import * as React from 'react'
type Props = {}
export default function Neutral({}: Props){
  return (
    <svg width="640" height="360" viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="bg" x1="0" x2="1"><stop offset="0" stopColor="#e2e8f0"/><stop offset="1" stopColor="#fff"/></linearGradient></defs>
      <rect width="640" height="360" rx="28" fill="url(#bg)"/>
      <g transform="translate(80,50)">
        <rect x="0" y="0" width="320" height="240" rx="24" fill="#fff"/>
        <circle cx="160" cy="100" r="70" fill="#222"/>
        <circle cx="160" cy="115" r="62" fill="#fff"/>
        <circle cx="140" cy="105" r="6"/><circle cx="180" cy="105" r="6"/>
        <path d="M138 126 q22 16 44 0" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </g>
      <g>
        <rect x="420" y="190" width="190" height="80" rx="14" fill="#fff" stroke="#64748b" strokeOpacity="0.6"/>
        <path d="M420 228 l-16 10 5-18 z" fill="#fff" stroke="#64748b" strokeOpacity="0.6"/>
        <text x="430" y="212" fontFamily="sans-serif" fontSize="16" fill="#0f172a">상황에 맞게 톤 조절!</text>
      </g>
    </svg>
  )
}
