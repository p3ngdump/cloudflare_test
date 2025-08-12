import type { Q, Tag } from '@/tests/config'
import { buildMainProfile, type Lean, type Style } from './profiles'

export type Scores = {
  axisMain: number
  axisStyle: number
  pctDisplay: number
  lean: Lean
  intensity: 0|1|2|3
  style: Style
  aux: {
    conflict: { approach: number, focus: number },
    planner: number,
    spending: number,
    energy: number,
    social: number
  }
}

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

export function computeScores(answers: Record<number, number>, questions: Q[]): Scores {
  let main=0, style=0, mainMax=0, styleMax=0
  const aux = { approach:0, approachMax:0, focus:0, focusMax:0, planner:0, plannerMax:0, spending:0, spendingMax:0, energy:0, energyMax:0, social:0, socialMax:0 }

  questions.forEach((q, i) => {
    const v = answers[i]; if (v==null) return
    const base = (v - 3)
    q.tags.forEach(t=>{
      const w = weight(t)
      if (t==='egen' || t==='teto'){ main += base*w; mainMax += 2 }
      if (t==='expr' || t==='prag'){ style += base*w; styleMax += 2 }
      if (t==='face' || t==='avoid'){ aux.approach += base*w; aux.approachMax += 2 }
      if (t==='emo' || t==='sol'){ aux.focus += base*w; aux.focusMax += 2 }
      if (t==='plan' || t==='spont'){ aux.planner += base*w; aux.plannerMax += 2 }
      if (t==='flex' || t==='frugal'){ aux.spending += base*w; aux.spendingMax += 2 }
      if (t==='active' || t==='calm'){ aux.energy += base*w; aux.energyMax += 2 }
      if (t==='group' || t==='duo'){ aux.social += base*w; aux.socialMax += 2 }
    })
  })

  const norm = (sum:number,max:number)=> max? Math.round(sum/max*100):0
  const axisMain = norm(main, mainMax)
  const axisStyle = norm(style, styleMax)

  const lean: Lean = axisMain>5? 'egen' : axisMain<-5 ? 'teto':'neutral'
  const absA = Math.abs(axisMain)
  const intensity: 0|1|2|3 = absA>=75?3: absA>=50?2: absA>=25?1:0
  const styleType: Style =
    axisStyle>=50? 'expressive' :
    axisStyle>=10? 'warm' :
    axisStyle<=-50? 'pragmatic' : 'balanced'

  const pctDisplay = Math.min(100, Math.round(Math.abs(axisMain) * 1.25))

  const auxOut = {
    conflict: { approach: norm(aux.approach, aux.approachMax), focus: norm(aux.focus, aux.focusMax) },
    planner: norm(aux.planner, aux.plannerMax),
    spending: norm(aux.spending, aux.spendingMax),
    energy: norm(aux.energy, aux.energyMax),
    social: norm(aux.social, aux.socialMax)
  }

  return { axisMain, axisStyle, pctDisplay, lean, intensity, style: styleType, aux: auxOut }
}

export function buildProfile(scores: Scores){
  return buildMainProfile(scores.lean, scores.intensity, scores.style)
}
