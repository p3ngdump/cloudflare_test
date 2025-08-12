import * as React from 'react'
type Props = { titleColor: string; genderMark?: string }

export default function EgenMale({ titleColor, genderMark='♂' }: Props){
  const color = '#ff4da2', accent='#ffd6ea'
  return (
    <svg width="640" height="420" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" x2="1"><stop offset="0" stopColor={accent}/><stop offset="1" stopColor="#fff"/></linearGradient>
        <filter id="s"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor={color} floodOpacity="0.25"/></filter>
      </defs>
      <rect width="640" height="420" rx="32" fill="url(#bg)"/>
      <g fill={color} opacity="0.45">
        <path d="M520 84c14-22 44-6 20 18l-20 18-20-18c-24-24 6-40 20-18z"/>
        <circle cx="560" cy="120" r="6"/><circle cx="500" cy="140" r="5"/>
      </g>
      <g transform="translate(90,70)" filter="url(#s)">
        <rect x="0" y="0" width="300" height="260" rx="28" fill="#fff"/>
        <circle cx="150" cy="110" r="76" fill="#111827"/>
        <rect x="74" y="150" width="152" height="80" rx="16" fill={color} opacity="0.12"/>
        <circle cx="150" cy="130" r="70" fill="#fff"/>
        <circle cx="130" cy="120" r="6"/><circle cx="170" cy="120" r="6"/>
        <path d="M128 142 q22 18 44 0" stroke="#111827" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="120" cy="132" r="10" fill={color} opacity="0.5"/>
        <circle cx="180" cy="132" r="10" fill={color} opacity="0.5"/>
      </g>
      <g>
        <rect x="410" y="210" width="200" height="90" rx="16" fill="#fff" stroke={color} strokeOpacity="0.6"/>
        <path d="M410 255 l-18 12 6-20 z" fill="#fff" stroke={color} strokeOpacity="0.6"/>
        <text x="420" y="238" fontFamily="sans-serif" fontSize="16" fill="#0f172a">앞머리 잘랐어? 잘 어울려~</text>
        <text x="420" y="262" fontFamily="sans-serif" fontSize="14" fill={titleColor}>{genderMark}</text>
      </g>
    </svg>
  )
}
