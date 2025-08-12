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

export default function TetoFemale({ mark='♀' }: Props){
  return (
    <svg width="640" height="420" viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
      <PaperBG from="#e8f0ff" to="#fff"/>
      <rect width="640" height="420" rx="32" fill="url(#bg)"/>
      <g fill="#2563eb" opacity="0.45">
        <polygon points="520,90 528,110 550,110 532,122 540,142 520,130 500,142 508,122 490,110 512,110" />
        <circle cx="560" cy="120" r="6"/><circle cx="500" cy="140" r="5"/>
      </g>
      <g transform="translate(86,64)" filter="url(#shadow)">
        <rect x="0" y="0" width="320" height="280" rx="28" fill="#fff"/>
        <circle cx="160" cy="120" r="84" fill="#2b2a33"/>
        <circle cx="160" cy="142" r="78" fill="#fff"/>
        <circle cx="140" cy="128" r="6"/><circle cx="180" cy="128" r="6"/>
        <path d="M138 150 q22 12 44 0" stroke="#2b2a33" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <path d="M120 166 q40 12 80 0" stroke="#2563eb" strokeWidth="3" fill="none" opacity="0.5"/>
      </g>
      <g>
        <rect x="410" y="210" width="210" height="92" rx="16" fill="#fff" stroke="#2563eb" strokeOpacity="0.6"/>
        <path d="M410 255 l-18 12 6-20 z" fill="#fff" stroke="#2563eb" strokeOpacity="0.6"/>
        <text x="420" y="238" fontFamily="sans-serif" fontSize="16" fill="#0f172a">현실적인 해결책 먼저!</text>
        <text x="420" y="262" fontFamily="sans-serif" fontSize="14" fill="#2563eb">{mark}</text>
      </g>
      <rect width="640" height="420" rx="32" fill="transparent" filter="url(#grain)"/>
    </svg>
  )
}
