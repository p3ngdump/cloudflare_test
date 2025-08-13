import type { LeanSide, Style } from '@/data/engine'

export type Archetype = {
  key: string
  title: string
  subtitle: string
  badges: string[]
  color: string
  summary: string[]
  longDetails: string
}

const baseColors = { egen: '#ff4da2', teto: '#2563eb' } as const

const intensityName = ['라이트','미들','하이','울트라'] as const
const styleName = {expressive:'표현형', warm:'따뜻형', balanced:'균형형', pragmatic:'실용형'} as const

export function buildProfile(lean: LeanSide, intensity: 0|1|2|3, style: Style): Archetype {
  const color = baseColors[lean]
  const leanName = lean==='egen' ? '에겐' : '테토'
  const title = `${intensityName[intensity]} ${leanName}·${styleName[style]}`
  const subtitle = lean==='egen'
    ? '애정 표현과 상호 확인으로 온도를 높이는 타입'
    : '자율과 효율을 중시하는 신뢰 기반 타입'

  const badgesBase: Record<LeanSide,string[]> = {
    egen: ['다정함','리액션','케어'],
    teto: ['독립성','합리성','신뢰']
  }
  const styleBadge = {expressive:'표현력', warm:'온기', balanced:'조화', pragmatic:'실용'}[style]
  const badges = [...badgesBase[lean], styleBadge]

  // 요약 3줄
  const pros: Record<LeanSide,string> = {
    egen: '장점: 높은 온기와 몰입으로 유대감을 빠르게 강화.',
    teto: '장점: 자율·신뢰 중심의 안정적인 관계 운영.'
  }
  const risksByIntensity: Record<LeanSide,string[]> = {
    egen: [
      '주의: 가벼운 확인 요구가 누적되면 페이스가 흔들릴 수 있음.',
      '주의: 리액션 기대치가 높아져 피로도가 오를 수 있음.',
      '주의: 과열·과몰입으로 상호 의존이 짙어질 수 있음.',
      '주의: 과도한 확인/표현이 상대의 압박으로 느껴질 수 있음.'
    ],
    teto: [
      '주의: 소통 밀도가 낮아 의도 파악이 더딜 수 있음.',
      '주의: 효율 우선이 정서 생략으로 보일 수 있음.',
      '주의: 거리 유지가 냉담으로 오해될 수 있음.',
      '주의: 독립성 고집이 정서 단절로 이어질 수 있음.'
    ]
  }
  const tipByStyle: Record<Style,string> = {
    expressive: '팁: 핵심 메시지를 합의·행동으로 연결해 의미를 고정하세요.',
    warm: '팁: 따뜻함을 일정한 리듬으로 유지해 안정감을 제공합니다.',
    balanced: '팁: 기준표를 만들어 결정이 필요한 순간에 빠르게 합의하세요.',
    pragmatic: '팁: 해결안 제시 전 10초 감정 요약을 루틴화하세요.'
  }
  const summary = [
    pros[lean],
    risksByIntensity[lean][intensity],
    tipByStyle[style]
  ]

  // 상세(>=5문장) — lean × style × intensity 분기 문장 조합
  const lines: string[] = []
  lines.push(lean==='egen'
    ? '당신은 애정 표현과 상호 확인을 통해 관계의 온도를 끌어올리는 데 능숙합니다.'
    : '당신은 자율성과 효율을 중시하며, 느슨하지만 신뢰로운 연결을 선호합니다.'
  )
  lines.push(style==='expressive'
    ? '표현형 기질로 감정과 의도를 언어와 행동으로 신속히 드러내 상대의 이해를 돕습니다.'
    : style==='warm'
      ? '따뜻형 기질로 안정적인 케어와 배려를 제공해 관계의 안전기반을 단단히 만듭니다.'
      : style==='balanced'
        ? '균형형 기질로 과열과 냉각 사이의 간격을 조절하며 현실적인 합의점을 찾아갑니다.'
        : '실용형 기질로 문제를 구조화하고 해결책을 우선 제시해 관계 운영의 효율을 높입니다.'
  )
  lines.push(lean==='egen'
    ? '다만 확인과 리액션의 기대치가 높아지면 상대의 에너지 소모가 커질 수 있습니다.'
    : '다만 소통 밀도가 낮아지면 감정 신호를 놓칠 위험이 있으므로 정기 점검이 필요합니다.'
  )
  lines.push(intensity===0
    ? '현재 강도는 라이트로, 성향이 유연하게 발현되어 상대의 스타일에 맞추기 수월합니다.'
    : intensity===1
      ? '강도는 미들로, 상황에 따라 장점이 뚜렷해지며 때때로 과하거나 부족해 보일 수 있습니다.'
      : intensity===2
        ? '강도는 하이로, 장점이 강하게 드러나는 대신 리스크도 비례해 관리가 요구됩니다.'
        : '강도는 울트라로, 일관된 패턴이 강력한 힘이지만, 조율 장치가 없으면 충돌로 연결될 수 있습니다.'
  )
  lines.push(style==='expressive'
    ? '오해를 줄이기 위해 핵심 메시지를 문장 하나로 정리하고, 합의 사항을 작은 행동으로 연결해 보세요.'
    : style==='warm'
      ? '케어의 지속성을 위해 본인의 회복 루틴을 스케줄로 고정하고, 도움 요청 신호를 미리 합의하면 좋습니다.'
      : style==='balanced'
        ? '결정이 흐려질 땐 우선순위 표를 활용해 10분 내 결론을 내리는 연습이 유익합니다.'
        : '해결 우선 접근 전에 10초 감정 요약을 붙이면 거리감 인식을 크게 줄일 수 있습니다.'
  )
  lines.push('실행 팁: 주간 1회 15분 체크인, 연락·데이트 리듬 문서화, 갈등 시 선택지 2~3개 제시, 합의 리마인드 자동화 등 운영 습관을 도입해 보세요.')

  const longDetails = lines.join(' ')

  return { key: `${lean}-${intensity}-${style}`, title, subtitle, badges, color, summary, longDetails }
}
