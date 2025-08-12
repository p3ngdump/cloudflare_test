import * as React from 'react'

export function Avatar({ type, gender }: { type: 'egen'|'teto'|'neutral'; gender: 'male'|'female'|'none' }){
  const colors = type === 'egen' ? { primary: '#ff499e' } : type==='teto' ? { primary: '#2563eb' } : { primary: '#64748b' }
  const genderMark = gender === 'male' ? '♂' : gender === 'female' ? '♀' : ''
  return (
    <svg width="560" height="360" viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor={colors.primary} stopOpacity="0.15"/>
          <stop offset="1" stopColor={colors.primary} stopOpacity="0.05"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="560" height="360" rx="28" fill="url(#g)"/>
      <circle cx="180" cy="160" r="88" fill="#334155"/>
      <circle cx="180" cy="170" r="70" fill="#fff"/>
      <circle cx="160" cy="155" r="6"/><circle cx="200" cy="155" r="6"/>
      <path d="M150 185 q30 26 60 0" stroke="#111827" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <rect x="120" y="230" width="120" height="60" rx="12" fill={colors.primary} opacity="0.15"/>
      <text x="115" y="310" fontFamily="sans-serif" fontSize="18" fill="#0f172a">{
        type==='egen' ? '따뜻한 공감형' : type==='teto' ? '독립적 합리형' : '균형형'
      }</text>
      <text x="30" y="40" fontFamily="sans-serif" fontSize="22" fill={colors.primary} fontWeight="700">{
        type==='egen' ? '에겐 성향' : type==='teto' ? '테토 성향' : '중간형'
      } {genderMark}</text>
      <g fill={colors.primary} opacity="0.2">
        <circle cx="420" cy="100" r="10"/><circle cx="460" cy="140" r="8"/><circle cx="400" cy="160" r="6"/>
        <circle cx="500" cy="90" r="6"/><circle cx="480" cy="200" r="10"/>
      </g>
      <rect x="320" y="210" width="200" height="110" rx="14" fill="#fff" stroke={colors.primary} strokeOpacity="0.4"/>
      <text x="330" y="240" fontFamily="sans-serif" fontSize="16" fill="#0f172a">한 줄 요약</text>
      <text x="330" y="268" fontFamily="sans-serif" fontSize="14" fill="#475569">
        {type==='egen' ? '다정·상호확인' : type==='teto' ? '자율·신뢰' : '상황 맞춤형'}
      </text>
    </svg>
  )
}
