import type { Q, Tag } from '@/tests/config'

export type LeanSide = 'egen'|'teto'
export type Style = 'expressive'|'warm'|'balanced'|'pragmatic'

export function compute(answers: Record<number, number>, questions: Q[]){
  let main=0, style=0, mainMax=0, styleMax=0
  const weight = (tag: Tag) => ({
    egen: +1, teto: -1,
    expr: +1, prag: -1,
    face: +1, avoid: -1,
    emo: +1,  sol: -1,
    plan: +1, spont: -1,
    flex: +1, frugal: -1,
    active: +1, calm: -1,
    group: +1, duo: -1
  } as Record<Tag, number>)[tag]

  questions.forEach((q,i)=>{
    const v = answers[i]; if(v==null) return
    const base = (v-3)
    q.tags.forEach(t=>{
      const w = weight(t)
      if (t==='egen' || t==='teto'){ main += base*w; mainMax += 2 }
      if (t==='expr' || t==='prag'){ style += base*w; styleMax += 2 }
    })
  })

  const norm = (s:number,m:number)=> m? (s/m*100):0
  const axisMain = Math.max(-100, Math.min(100, Math.round(norm(main, mainMax))))
  const axisStyle = Math.max(-100, Math.min(100, Math.round(norm(style, styleMax))))

  // 32 타입 분류: lean × intensity(4) × style(4)
  let side: LeanSide = axisMain>5? 'egen' : axisMain<-5 ? 'teto' : (axisStyle>=0 ? 'egen' : 'teto')
  const absA = Math.abs(axisMain)
  const intensity: 0|1|2|3 = absA>=70?3: absA>=45?2: absA>=20?1:0

  const styleType: Style =
    axisStyle >= 45 ? 'expressive' :
    axisStyle >= 10 ? 'warm' :
    axisStyle <= -45 ? 'pragmatic' :
    'balanced'

  // 가독성 높은 퍼센트(곡선 증폭)
  const pctDisplay = Math.min(100, Math.max(0, Math.round(Math.pow(Math.abs(axisMain)/100, 0.8) * 100)))

  return { side, intensity, style: styleType, pctDisplay, axisMain, axisStyle }
}
