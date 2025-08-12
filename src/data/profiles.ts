export type Lean = 'egen'|'teto'|'neutral'
export type Style = 'expressive'|'warm'|'balanced'|'pragmatic'

export type Archetype = {
  key: string
  title: string
  subtitle: string
  badges: string[]
  traits: string[]
  tips: string[]
  match: string
  color: string
  bubble: string
}

const baseColors = { egen: '#ff4da2', teto: '#2563eb', neutral: '#64748b' }

export function buildArchetype(lean: Lean, intensity: 0|1|2|3, style: Style): Archetype {
  const color = baseColors[lean]
  const leanName = lean==='egen' ? '에겐' : lean==='teto' ? '테토' : '중간'
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
  const subtitle = lean==='egen' ? '애정 표현과 상호 확인을 통해 온도를 높이는 타입'
    : lean==='teto' ? '자율과 효율을 중시하는 신뢰 기반 타입'
    : '맥락에 따라 거리/속도를 유연하게 조절하는 타입'

  const baseBadges: Record<Lean,string[]> = {
    egen: ['다정함','리액션','케어'],
    teto: ['독립성','합리성','신뢰'],
    neutral: ['유연함','균형','상호존중']
  }
  const styleBadge = {expressive:'표현력', warm:'온기', balanced:'조화감', pragmatic:'실용성'}[style]
  const badges = [...baseBadges[lean], styleBadge]

  const traits: string[] = []
  const tips: string[] = []

  if (lean==='egen') {
    traits.push('감정 신호에 빠르게 반응','관계의 빈도/온도에 민감','칭찬·확인이 동력')
    if (style==='expressive') traits.push('문장보다 이모티콘이 많음')
    if (style==='pragmatic') traits.push('감정 뒤에 실행 제안이 뒤따름')
    tips.push('요청은 “감정+구체 행동”으로','정해진 소통 리추얼(하루 10분)','상대 개인시간 경계 합의')
  } else if (lean==='teto') {
    traits.push('연락 텀에 유연','결과지향 대화 선호','혼자만의 시간으로 충전')
    if (style==='expressive') traits.push('중요할 때만 포인트로 표현')
    if (style==='pragmatic') traits.push('의사결정 프레임워크를 선호')
    tips.push('의도-사실-요청 3단 구성','주 2회 15분 정기 점검','확인/피드백은 짧고 명료하게')
  } else {
    traits.push('강약 조절 스위칭','상대 성향에 맞춤형 대응','과몰입/방임 모두 경계')
    tips.push('연락/데이팅 리듬 문서화','갈등 시 선택지 2~3개 제시','합의사항을 주기적으로 업데이트')
  }

  if (intensity>=2) traits.push('성향 일관성이 높음')
  else traits.push('상황에 따라 변동 여지 큼')

  const matchMap: Record<Lean,string> = {
    egen: '테토와는 “소통 리추얼” 합의 시 만족도 상승',
    teto: '에겐과는 “자율 경계” 명문화가 핵심',
    neutral: '양쪽과 모두 조화롭지만 규칙이 느슨하면 흐트러짐'
  }

  return { key, title, subtitle, badges, traits, tips, match: matchMap[lean], color, bubble }
}
