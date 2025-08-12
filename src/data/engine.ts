import { buildArchetype, Lean, Style } from './profiles'

export type Scores = {
  axisA: number
  axisB: number
  pctDisplay: number
  lean: Lean
  intensity: 0|1|2|3
  style: Style
}

export function computeScores(answers: Record<number, number>, questions: {type:'egen'|'teto', style?:'expr'|'prag'}[]) : Scores {
  let sumA = 0
  questions.forEach((q, i) => {
    const v = answers[i]; if (v==null) return
    const base = (v - 3)
    const signed = q.type==='egen'? base : -base
    sumA += signed
  })
  const maxA = questions.length * 2
  const axisA = Math.round((sumA / maxA) * 100)

  let sumB = 0, cntB = 0
  questions.forEach((q, i) => {
    if(!q.style) return
    const v = answers[i]; if (v==null) return
    const base = (v - 3)
    const signed = q.style==='expr' ? base : -base
    sumB += signed; cntB += 2
  })
  const maxB = cntB || 1
  const axisB = Math.round((sumB / maxB) * 100)

  const lean: Lean = axisA > 5 ? 'egen' : axisA < -5 ? 'teto' : 'neutral'
  const absA = Math.abs(axisA)
  const intensity: 0|1|2|3 = absA >= 75 ? 3 : absA >= 50 ? 2 : absA >= 25 ? 1 : 0

  const style: Style =
    axisB >= 50 ? 'expressive' :
    axisB >= 10 ? 'warm' :
    axisB <= -50 ? 'pragmatic' : 'balanced'

  const pctDisplay = Math.min(100, Math.round(Math.abs(axisA) * 1.25))

  return { axisA, axisB, pctDisplay, lean, intensity, style }
}

export function buildProfile(scores: Scores){
  return buildArchetype(scores.lean, scores.intensity, scores.style)
}
