export type Lean = 'egen'|'teto'|'neutral'
export type Style = 'expressive'|'warm'|'balanced'|'pragmatic'

export type Archetype = {
  key: string
  title: string
  subtitle: string
  badges: string[]
  tips: string[]
  color: string
  bubble: string
}

const baseColors = { egen: '#ff4da2', teto: '#2563eb', neutral: '#7c8aa0' }

export function buildMainProfile(lean: Lean, intensity: 0|1|2|3, style: Style): Archetype {
  const color = baseColors[lean]
  const leanName = lean==='egen' ? '에겐' : lean==='teto' ? '테토' : '중립'
  const intensityName = ['라이트','미들','하이','울트라'][intensity]
  const styleName = {expressive:'표현형', warm:'따뜻형', balanced:'균형형', pragmatic:'실용형'}[style]
  const key = `${lean}-${intensity}-${style}`

  const bubbles: Record<string,string> = {
    'egen-expressive': '앞머리 너무 잘 어울려~',
    'egen-warm': '오늘도 수고했어! 토닥토닥',
    'egen-balanced': '잠깐 통화 어때?',
    'egen-pragmatic': '마음은 이렇고, 이렇게 해보자!',
    'teto-expressive': '좋아, 오늘 일정부터 공유하자',
    'teto-warm': '필요한 거 있으면 말해줘',
    'teto-balanced': '신뢰면 충분. 간격은 지키자',
    'teto-pragmatic': '해결책부터! 바로 실행해보자',
    'neutral-expressive': '상황 보면서 톤 맞출게!',
    'neutral-warm': '너 페이스에 맞출게',
    'neutral-balanced': '조화가 답!',
    'neutral-pragmatic': '선택지 몇 개 준비했어'
  }
  const bubble = bubbles[`${lean}-${style}`] ?? '좋은 관계로 가자!'

  const title = `${intensityName} ${leanName}·${styleName}`
  const subtitle = lean==='egen' ? '애정 표현과 상호 확인으로 온도를 높이는 타입'
    : lean==='teto' ? '자율과 효율을 중시하는 신뢰 기반 타입'
    : '맥락에 따라 거리/속도를 유연하게 조절하는 타입'

  const badgesBase: Record<Lean,string[]> = {
    egen: ['다정함','리액션','케어'],
    teto: ['독립성','합리성','신뢰'],
    neutral: ['유연함','균형','상호존중']
  }
  const styleBadge = {expressive:'표현력', warm:'온기', balanced:'조화', pragmatic:'실용'}[style]
  const badges = [...badgesBase[lean], styleBadge]

  const tips = lean==='egen'
    ? ['요청은 “감정+행동”으로','하루 10분 소통 리추얼','개인 시간 경계 합의']
    : lean==='teto'
    ? ['의도-사실-요청 3단 구성','주 2회 15분 체크인','피드백은 짧고 명료하게']
    : ['연락/데이트 리듬 문서화','갈등 시 선택지 2~3개','합의사항 정기 업데이트']

  return { key, title, subtitle, badges, tips, color, bubble }
}
