import type { LeanSide, Style } from '@/data/engine'

export type Archetype = {
  key: string
  title: string
  subtitle: string
  badges: string[]
  tips: string[]
  color: string
  summary: string[]
  longDetails: string
}

const baseColors = { egen: '#ff4da2', teto: '#2563eb' } as const

export function buildProfile(lean: LeanSide, intensity: 0|1|2|3, style: Style): Archetype {
  const color = baseColors[lean]
  const leanName = lean==='egen' ? '에겐' : '테토'
  const intensityName = ['라이트','미들','하이','울트라'][intensity]
  const styleName = {expressive:'표현형', warm:'따뜻형', balanced:'균형형', pragmatic:'실용형'}[style]
  const key = `${lean}-${intensity}-${style}`
  const title = `${intensityName} ${leanName}·${styleName}`
  const subtitle = lean==='egen'
    ? '애정 표현과 상호 확인으로 온도를 높이는 타입'
    : '자율과 효율을 중시하는 신뢰 기반 타입'

  const badgesBase: Record<LeanSide,string[]> = {
    egen: ['다정함','리액션','케어'],
    teto: ['독립성','합리성','신뢰']
  }
  const styleBadge = {expressive:'표현력', warm:'온기', balanced:'조화', pragmatic:'실용'}[style]
  const badges = [...badgesBase[lean], styleBadge]

  const pros: Record<LeanSide,string> = {
    egen: '장점: 관계의 온도와 몰입을 높여 유대감 강화.',
    teto: '장점: 자율과 신뢰를 바탕으로 안정적 밸런스 유지.'
  }
  const risks: Record<LeanSide,string> = {
    egen: '주의: 확인/리액션 요구가 과하면 피로감 유발.',
    teto: '주의: 소통 밀도가 낮아 감정 신호를 놓칠 수 있음.'
  }
  const styleTips = {
    expressive: '팁: 표현을 행동과 합의로 연결해 과열 방지.',
    warm: '팁: 따뜻함을 일정한 리듬으로 유지해 안정감 제공.',
    balanced: '팁: 균형 원칙을 문서화해 갈등 시 기준으로 활용.',
    pragmatic: '팁: 해결안 제시 전, 감정 요약 10초 루틴화.'
  } as const

  const summary = [ pros[lean], risks[lean], styleTips[style] ]

  const detailsPieces: string[] = []
  detailsPieces.push(lean==='egen'
    ? '당신은 애정 표현과 상호 확인을 중요하게 생각하며, 관계의 감정적 온도를 높이는 데 능숙합니다.'
    : '당신은 자율성과 효율을 중시하며, 신뢰 기반의 여유 있는 소통을 선호합니다.'
  )
  detailsPieces.push(style==='expressive'
    ? '표현형 특성으로 감정과 생각을 언어·행동으로 빠르게 드러내 상대가 의도를 파악하기 쉽습니다.'
    : style==='warm'
      ? '따뜻형 특성으로 안정적인 케어와 배려를 통해 관계의 안전기반을 단단히 만듭니다.'
      : style==='balanced'
        ? '균형형 특성으로 상대와의 간격과 속도를 조절하며 무리 없는 합의점을 찾아갑니다.'
        : '실용형 특성으로 문제를 구조화하고 해결책을 우선 제시해 관계 운영의 효율을 높입니다.'
  )
  detailsPieces.push(lean==='egen'
    ? '다만 확인과 리액션의 빈도가 높아지면 상대의 피로도가 상승할 수 있으므로 리듬을 설계하는 것이 중요합니다.'
    : '다만 소통 밀도가 낮아지면 감정 신호를 놓칠 수 있으므로 최소한의 정기 리추얼이 필요합니다.'
  )
  detailsPieces.push(style==='expressive'
    ? '주요 리스크는 과열과 오해로, 핵심 메시지를 합의·행동으로 연결해 의미를 고정하는 습관이 도움이 됩니다.'
    : style==='warm'
      ? '주요 리스크는 과잉 케어로 인한 에너지 소모이며, 본인의 경계와 회복 루틴을 명확히 해두면 좋습니다.'
      : style==='balanced'
        ? '주요 리스크는 우유부단함으로 비칠 수 있다는 점이며, 결정이 필요한 순간엔 기준표로 빠르게 결론을 돕는 것이 유익합니다.'
        : '주요 리스크는 감정 생략으로 인한 거리감이며, 해결책 제시 전에 10초 감정 요약을 덧붙이면 완충됩니다.'
  )
  detailsPieces.push('실행 팁: 주간 1회 15분 체크인, 갈등 시 선택지 2~3개 제시, 연락/데이트 리듬 문서화, 합의 사항 리마인드 등 운영 습관을 도입해 보세요.')

  const longDetails = detailsPieces.join(' ')

  const tips = lean==='egen'
    ? ['요청은 “감정+행동”으로','하루 10분 소통 리추얼','개인 시간 경계 합의']
    : ['의도-사실-요청 3단 구성','주 2회 15분 체크인','피드백은 짧고 명료하게']

  return { key, title, subtitle, badges, tips, color, summary, longDetails }
}
