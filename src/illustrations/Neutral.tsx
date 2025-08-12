import * as React from 'react'
type Props = { mark?: string }
function PaperBG({from, to}:{from:string; to:string}){
  return (<>
    <defs>
      <linearGradient id="bg" x1="0" x2="1"><stop offset="0" stopColor={from}/><stop offset="1" stopColor={to}/></linearGradient>
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0.25"/><feComponentTransfer><feFuncA type="linear" slope="0.06"/></feComponentTransfer></filter>
      <filter id="shadow"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.15"/></filter>
    </defs>
  </>)
}

export default function Neutral({ mark='' }: Props){
  return (
    <svg width="640" height="420" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
      <PaperBG from="#eef2f7" to="#fff"/>
      <rect width="640" height="420" rx="32" fill="url(#bg)"/>
      <g fill="#64748b" opacity="0.35">
        <circle cx="520" cy="110" r="8"/><circle cx="560" cy="140" r="6"/><circle cx="500" cy="150" r="5"/>
      </g>
      <g transform="translate(86,64)" filter="url(#shadow)">
        <rect x="0" y="0" width="320" height="280" rx="28" fill="#fff"/>
        <circle cx="160" cy="120" r="84" fill="#2b2a33"/>
        <circle cx="160" cy="140" r="76" fill="#fff"/>
        <circle cx="140" cy="126" r="6"/><circle cx="180" cy="126" r="6"/>
        <path d="M138 146 q22 16 44 0" stroke="#2b2a33" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </g>
      <g>
        <rect x="410" y="210" width="210" height="92" rx="16" fill="#fff" stroke="#64748b" strokeOpacity="0.6"/>
        <path d="M410 255 l-18 12 6-20 z" fill="#fff" stroke="#64748b" strokeOpacity="0.6"/>
        <text x="420" y="238" fontFamily="sans-serif" fontSize="16" fill="#0f172a">상황에 맞게 톤 조절!</text>
        <text x="420" y="262" fontFamily="sans-serif" fontSize="14" fill="#64748b">{mark}</text>
      </g>
      <rect width="640" height="420" rx="32" fill="transparent" filter="url(#grain)"/>
    </svg>
  )
}
