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

export default function EgenMale({ mark='♂' }: Props){
  return (
    <svg width="640" height="420" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
      <PaperBG from="#ffe6f3" to="#fff"/>
      <rect width="640" height="420" rx="32" fill="url(#bg)"/>
      <g fill="#ff649f" opacity="0.6">
        <path d="M520 84c14-22 44-6 20 18l-20 18-20-18c-24-24 6-40 20-18z"/>
        <circle cx="560" cy="120" r="6"/><circle cx="500" cy="140" r="5"/>
      </g>
      <g transform="translate(86,64)" filter="url(#shadow)">
        <rect x="0" y="0" width="320" height="280" rx="28" fill="#fff"/>
        <circle cx="160" cy="120" r="84" fill="#2b2a33"/>
        <circle cx="160" cy="140" r="76" fill="#fff"/>
        <circle cx="140" cy="126" r="6"/><circle cx="180" cy="126" r="6"/>
        <path d="M138 152 q22 18 44 0" stroke="#2b2a33" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <circle cx="130" cy="134" r="10" fill="#ff86b8" opacity="0.6"/>
        <circle cx="190" cy="134" r="10" fill="#ff86b8" opacity="0.6"/>
        <rect x="110" y="200" width="100" height="56" rx="12" fill="#ff86b8" opacity="0.25"/>
      </g>
      <g>
        <rect x="410" y="210" width="210" height="92" rx="16" fill="#fff" stroke="#ff649f" strokeOpacity="0.6"/>
        <path d="M410 255 l-18 12 6-20 z" fill="#fff" stroke="#ff649f" strokeOpacity="0.6"/>
        <text x="420" y="238" fontFamily="sans-serif" fontSize="16" fill="#0f172a">앞머리 잘랐어? 잘 어울려~</text>
        <text x="420" y="262" fontFamily="sans-serif" fontSize="14" fill="#ff649f">{mark}</text>
      </g>
      <rect width="640" height="420" rx="32" fill="transparent" filter="url(#grain)"/>
    </svg>
  )
}
