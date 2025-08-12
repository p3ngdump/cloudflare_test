import * as React from 'react'

export function Avatar({ type, gender }: { type: 'egen'|'teto'|'neutral'; gender: 'male'|'female'|'none' }){
  const color = type==='egen' ? '#ff4da2' : type==='teto' ? '#2563eb' : '#64748b'
  const accent = type==='egen' ? '#ffd6ea' : type==='teto' ? '#d9e6ff' : '#e2e8f0'
  const bubble = type==='egen' ? '오늘도 예뻐~' : type==='teto' ? '신뢰가 최고!' : '균형이 답!'
  const genderMark = gender==='male'?'♂':gender==='female'?'♀':''
  return (
    <svg width="640" height="420" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" x2="1">
          <stop offset="0" stopColor={accent}/>
          <stop offset="1" stopColor="#ffffff"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor={color} floodOpacity="0.25"/>
        </filter>
      </defs>
      <rect width="640" height="420" rx="32" fill="url(#bg)"/>
      {/* sparkles/hearts/stars */}
      {type==='egen' ? (
        <g fill={color} opacity="0.45">
          <path d="M520 84c14-22 44-6 20 18l-20 18-20-18c-24-24 6-40 20-18z"/>
          <circle cx="560" cy="120" r="6"/><circle cx="500" cy="140" r="5"/>
        </g>
      ):(type==='teto'? (
        <g fill={color} opacity="0.35">
          <polygon points="520,90 528,110 550,110 532,122 540,142 520,130 500,142 508,122 490,110 512,110" />
          <circle cx="560" cy="120" r="6"/><circle cx="500" cy="140" r="5"/>
        </g>
      ):null)}
      {/* face */}
      <g transform="translate(90,70)" filter="url(#shadow)">
        <rect x="0" y="0" width="300" height="260" rx="28" fill="#fff"/>
        <circle cx="150" cy="110" r="76" fill="#111827"/>
        <rect x="74" y="150" width="152" height="80" rx="16" fill={color} opacity="0.12"/>
        <circle cx="150" cy="130" r="70" fill="#fff"/>
        <circle cx="130" cy="120" r="6"/><circle cx="170" cy="120" r="6"/>
        <path d="M128 142 q22 18 44 0" stroke="#111827" strokeWidth="4" fill="none" strokeLinecap="round"/>
        {/* blush */}
        <circle cx="120" cy="132" r="10" fill={type==='egen'?color:'#e2e8f0'} opacity="0.5"/>
        <circle cx="180" cy="132" r="10" fill={type==='egen'?color:'#e2e8f0'} opacity="0.5"/>
        {/* clothes */}
        <rect x="92" y="200" width="116" height="50" rx="10" fill={color} opacity="0.2"/>
      </g>
      {/* speech bubble */}
      <g>
        <rect x="410" y="210" width="200" height="90" rx="16" fill="#fff" stroke={color} strokeOpacity="0.6"/>
        <path d="M410 255 l-18 12 6-20 z" fill="#fff" stroke={color} strokeOpacity="0.6"/>
        <text x="420" y="238" fontFamily="sans-serif" fontSize="16" fill="#0f172a">{bubble}</text>
        <text x="420" y="262" fontFamily="sans-serif" fontSize="14" fill="#475569">{genderMark}</text>
      </g>
    </svg>
  )
}
