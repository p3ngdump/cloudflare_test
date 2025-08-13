export type Tag =
  | 'egen' | 'teto'
  | 'expr' | 'prag'
  | 'face' | 'avoid'
  | 'emo'  | 'sol'
  | 'plan' | 'spont'
  | 'frugal' | 'flex'
  | 'calm' | 'active'
  | 'duo' | 'group'
export type Q = { text: string; tags: Tag[] }
export const QUESTIONS: Q[] = [
  { text: '연인과는 자주 연락하며 하루의 일을 자세히 공유하고 싶다.', tags: ['egen','expr'] },
  { text: '연애를 하더라도 나만의 루틴은 지키고 싶다.', tags: ['teto','prag'] },
  { text: '갈등이 생기면 바로 만나서 풀고 싶다.', tags: ['egen','face','emo'] },
  { text: '감정 과잉 표현은 관계에 방해가 될 수 있다.', tags: ['teto','prag','sol'] },
  { text: '사소한 칭찬과 확인이 큰 힘이 된다.', tags: ['egen','expr'] },
  { text: '중요한 결정은 스스로의 판단을 우선한다.', tags: ['teto','prag'] },
  { text: '서로 일정이 달라도 시간을 맞춰보려 한다.', tags: ['egen'] },
  { text: '연애는 인생의 일부일 뿐 다른 우선순위에 간섭받지 않길 원한다.', tags: ['teto'] },
  { text: '사과와 애정 표현은 자주 해도 과하지 않다.', tags: ['egen','expr'] },
  { text: '연락 텀이 길어도 신뢰만 있다면 괜찮다.', tags: ['teto','prag'] },
  { text: '기념일/행사에 정성을 들이는 편이다.', tags: ['egen','expr','plan'] },
  { text: '문제가 생기면 해결책과 실행을 먼저 생각한다.', tags: ['teto','prag','sol'] },
  { text: '연인의 기분 변화를 민감하게 살핀다.', tags: ['egen','emo'] },
  { text: '관계에서 과한 의존은 서로에게 부담이다.', tags: ['teto'] },
  { text: '몸이 힘들어도 연인의 부탁이면 웬만하면 들어준다.', tags: ['egen','emo'] },
  { text: '혼자만의 시간이 충전의 핵심이다.', tags: ['teto'] },
  { text: '서운함은 바로 표현하고 확인받고 싶다.', tags: ['egen','expr','face','emo'] },
  { text: '감정적 거리 두기가 있어야 건강한 관계가 된다.', tags: ['teto','prag'] },
  { text: '데이트 계획을 세밀히 준비해 상대가 행복해하는 걸 좋아한다.', tags: ['egen','plan'] },
  { text: '상대의 잦은 확인 요청이나 보고는 다소 피곤하다.', tags: ['teto','sol'] },
  { text: '여행은 계획표를 꼼꼼히 준비하는 편이다.', tags: ['plan'] },
  { text: '즉흥 데이트도 즐겁다.', tags: ['spont'] },
  { text: '선물은 매일 쓰는 실용품이 좋다.', tags: ['prag','frugal'] },
  { text: '특별한 날엔 과감하게 플렉스!', tags: ['flex','expr'] },
  { text: '취미/클래스에 투자하는 편이다.', tags: ['flex'] },
  { text: '가성비가 가장 중요하다.', tags: ['frugal'] },
  { text: '여가 활동은 차분한 게 좋다.', tags: ['calm','duo'] },
  { text: '액티브한 활동으로 스트레스를 푼다.', tags: ['active'] },
  { text: '둘이 함께하는 시간을 선호한다.', tags: ['duo'] },
  { text: '여럿이 어울리며 노는 게 좋다.', tags: ['group','active'] },
  { text: '문제는 피하지 말고 바로 이야기해야 한다.', tags: ['face','sol'] },
  { text: '상황을 지켜보고 차분히 풀어가는 편이다.', tags: ['avoid','calm'] },
  { text: '긴 메시지보다 요점이 좋은 편이다.', tags: ['prag','sol'] },
  { text: '하루 있었던 일을 상세히 나누고 싶다.', tags: ['expr','emo'] },
  { text: '여행은 자유 일정이 더 끌린다.', tags: ['spont'] },
  { text: '선물은 로맨틱/경험 쪽이 더 좋다.', tags: ['expr','flex'] },
  { text: '갈등 상황에서도 유머로 분위기를 환기한다.', tags: ['expr','avoid'] },
  { text: '계획표를 공유하고 역할을 나누는 걸 선호한다.', tags: ['plan','sol'] },
  { text: '연락은 짧고 간결하게 보내는 편이다.', tags: ['prag'] },
  { text: '데이터보다 감정이 우선일 때가 많다.', tags: ['emo','egen'] }
]
