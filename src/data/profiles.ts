export type LeanSide = 'egen'|'teto'
export type Style = 'expressive'|'warm'|'balanced'|'pragmatic'
export type Archetype = {
  key: string
  title: string
  subtitle: string
  badges: string[]
  tips: string[]
  color: string
  summary: string[]
}
const baseColors = { egen: '#ff4da2', teto: '#2563eb' } as const
export function buildMainProfile32(lean: LeanSide, intensity: 0|1|2|3, style: Style): Archetype {
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
    egen: ['다정함','리액션','케어'], teto: ['독립성','합리성','신뢰']
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
  const styleTips: Record<Style,string> = {
    expressive: '팁: 표현을 행동과 합의로 연결해 과열 방지.',
    warm: '팁: 따뜻함을 일정한 리듬으로 유지해 안정감 제공.',
    balanced: '팁: 균형 원칙을 문서화해 갈등 시 기준으로 활용.',
    pragmatic: '팁: 해결안 제시 전, 감정 요약 10초 루틴화.'
  }
  const summary = [ pros[lean], risks[lean], styleTips[style] ]
  const tips = lean==='egen'
    ? ['요청은 “감정+행동”으로','하루 10분 소통 리추얼','개인 시간 경계 합의']
    : ['의도-사실-요청 3단 구성','주 2회 15분 체크인','피드백은 짧고 명료하게']
  return { key, title, subtitle, badges, tips, color, summary }
}
