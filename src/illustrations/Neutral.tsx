import * as React from 'react'
type Props = { titleColor: string; genderMark?: string }

export default function Neutral({ titleColor, genderMark='' }: Props){
  const color = '#64748b', accent='#e2e8f0'
  return (
    <svg width="640" height="420" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" x2="1"><stop offset="0" stopColor={accent}/><stop offset="1" stopColor="#fff"/></linearGradient>
        <filter id="s"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor={color} floodOpacity="0.25"/></filter>
      </defs>
      <rect width="640" height="420" rx="32" fill="url(#bg)"/>
      <g fill={color} opacity="0.3">
        <circle cx="520" cy="110" r="8"/><circle cx="560" cy="140" r="6"/><circle cx="500" cy="150" r="5"/>
      </g>
      <g transform="translate(90,70)" filter="url(#s)">
        <rect x="0" y="0" width="300" height="260" rx="28" fill="#fff"/>
        <circle cx="150" cy="110" r="76" fill="#111827"/>
        <rect x="74" y="150" width="152" height="80" rx="16" fill={color} opacity="0.12"/>
        <circle cx="150" cy="130" r="70" fill="#fff"/>
        <circle cx="130" cy="120" r="6"/><circle cx="170" cy="120" r="6"/>
        <path d="M128 144 q22 16 44 0" stroke="#111827" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </g>
      <g>
        <rect x="410" y="210" width="200" height="90" rx="16" fill="#fff" stroke={color} strokeOpacity="0.6"/>
        <path d="M410 255 l-18 12 6-20 z" fill="#fff" stroke={color} strokeOpacity="0.6"/>
        <text x="420" y="238" fontFamily="sans-serif" fontSize="16" fill="#0f172a">상황에 맞게 톤 조절!</text>
        <text x="420" y="262" fontFamily="sans-serif" fontSize="14" fill={titleColor}>{genderMark}</text>
      </g>
    </svg>
  )
}
