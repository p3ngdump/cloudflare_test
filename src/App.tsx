import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ResultCard } from '@/components/ResultCard'
import { resultDict, Lean } from '@/data/results'
import { RotateCcw, ChevronRight } from 'lucide-react'

const choices = [
  { label: '매우 아니다', value: 1 },
  { label: '아니다', value: 2 },
  { label: '보통이다', value: 3 },
  { label: '그렇다', value: 4 },
  { label: '매우 그렇다', value: 5 },
] as const

const rawQuestions = [
  { text: '연인과는 자주 연락하며 하루의 일을 상세히 공유하고 싶다.', type: 'egen' },
  { text: '연애를 하더라도 나만의 시간과 루틴은 반드시 지켜야 한다.', type: 'teto' },
  { text: '갈등이 생기면 빨리 감정과 생각을 털어놓고 풀어야 속이 편하다.', type: 'egen' },
  { text: '감정 과잉 표현은 관계에 오히려 방해가 될 수 있다고 본다.', type: 'teto' },
  { text: '사소한 일이라도 연인의 칭찬과 확인이 큰 힘이 된다.', type: 'egen' },
  { text: '중요한 결정을 내릴 때 타인보다 스스로의 판단을 우선한다.', type: 'teto' },
  { text: '서로의 일정이 달라도 가능한 한 시간을 맞추려 노력한다.', type: 'egen' },
  { text: '연애는 인생의 일부일 뿐, 다른 우선순위에 간섭받지 않길 원한다.', type: 'teto' },
  { text: '사과와 애정 표현은 자주 해도 과하지 않다고 생각한다.', type: 'egen' },
  { text: '연락 텀이 길어도 신뢰만 있다면 큰 문제는 아니라고 본다.', type: 'teto' },
  { text: '기념일/행사에 정성을 들이는 편이다.', type: 'egen' },
  { text: '문제가 생기면 감정보다 해결책과 실행을 먼저 생각한다.', type: 'teto' },
  { text: '연인의 기분 변화를 민감하게 살피는 편이다.', type: 'egen' },
  { text: '관계에서 과한 의존은 서로에게 부담이라고 느낀다.', type: 'teto' },
  { text: '몸이 힘들어도 연인의 부탁이면 웬만하면 들어주려 한다.', type: 'egen' },
  { text: '혼자 보내는 시간이 충전의 핵심이라고 느낀다.', type: 'teto' },
  { text: '서운함을 쌓아두기보다 바로 표현하고 확인받고 싶다.', type: 'egen' },
  { text: '감정적 거리 두기가 있어야 건강한 관계가 유지된다고 본다.', type: 'teto' },
  { text: '데이트 계획을 세밀히 준비해 상대가 행복해하는 걸 좋아한다.', type: 'egen' },
  { text: '상대의 잦은 확인 요청이나 보고는 다소 피곤하다.', type: 'teto' },
] as const

function mapScore(choiceValue: number){ return choiceValue - 3 } // -2..+2

function computeLean(answers: Record<number, number>){
  let sum=0
  const answered = Object.keys(answers).length
  rawQuestions.forEach((q, i) => {
    const v = answers[i]; if(v==null) return
    const base = mapScore(v)
    const signed = q.type==='egen'? base : -base
    sum += signed
  })
  const max = rawQuestions.length*2
  const pct = answered ? Math.round((sum/max)*100) : 0 // -100..+100
  const lean: Lean = pct > 5 ? 'egen' : pct < -5 ? 'teto' : 'neutral'
  return { pct: Math.abs(pct), lean, answered }
}

export default function App(){
  const [gender, setGender] = useState<'male'|'female'|'none'>('none')
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const { pct, lean, answered } = useMemo(()=>computeLean(answers), [answers])
  const progress = Math.round((answered / rawQuestions.length) * 100)

  function setAnswer(i:number, v:number){ setAnswers(p => ({...p, [i]: v})) }
  function reset(){ setAnswers({}); setSubmitted(false); setGender('none') }
  function onSubmit(){
    if(answered < rawQuestions.length){ alert('모든 문항에 응답해 주세요.'); return }
    setSubmitted(true); setTimeout(() => document.getElementById('result')?.scrollIntoView({behavior:'smooth'}), 0)
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <motion.h1 initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} className="text-3xl font-extrabold tracking-tight">
          테토/에겐 연애 성향 테스트 <span className="text-slate-400">Pro</span>
        </motion.h1>
        <p className="text-slate-600 mt-2">20문항으로 에겐/테토 성향을 진단하고, 결과 이미지를 생성해 공유할 수 있어요.</p>

        <Card className="mt-6">
          <CardHeader><CardTitle>기본 정보</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Button onClick={()=>setGender('male')}>남성 표시</Button>
              <Button onClick={()=>setGender('female')}>여성 표시</Button>
              <Button variant="outline" onClick={()=>setGender('none')}>표시 안 함</Button>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-600">진행도</div>
              <Progress value={progress} className="w-full" />
              <div className="text-sm tabular-nums text-slate-600">{progress}%</div>
            </div>
          </CardContent>
        </Card>

        <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
          {rawQuestions.map((q, i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="text-slate-400 font-mono pt-1">{i+1}.</div>
                  <div className="flex-1">
                    <div className="font-medium leading-relaxed">{q.text}</div>
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {choices.map(c => (
                        <Button key={c.value} type="button"
                          variant={answers[i]===c.value? 'primary':'outline'}
                          className="w-full"
                          onClick={()=>setAnswer(i, c.value)}>{c.label}</Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="flex gap-2 pt-2">
            <Button onClick={onSubmit} className="gap-2">결과 보기 <ChevronRight className="w-4 h-4"/></Button>
            <Button variant="outline" onClick={reset} className="gap-2"><RotateCcw className="w-4 h-4"/>다시 하기</Button>
          </div>
        </form>

        {submitted && (
          <div id="result" className="mt-10">
            <ResultCard lean={lean} pct={pct} gender={gender} />
          </div>
        )}

        <footer className="text-xs text-slate-400 mt-10">© {new Date().getFullYear()} Teto/Egen Test · 오락/자가 인식 목적의 비진단 도구</footer>
      </div>
    </div>
  )
}
