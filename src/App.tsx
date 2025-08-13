import React, { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ResultCard } from '@/components/ResultCard'
import { RotateCcw, ChevronRight } from 'lucide-react'
import { GenderToggle, Gender } from '@/components/GenderToggle'
import { QUESTIONS, type Q } from '@/tests/config'
import { computeScores, type Scores } from '@/data/engine'

const choices = [
  { label: '매우 아니다', value: 1 },
  { label: '아니다', value: 2 },
  { label: '보통이다', value: 3 },
  { label: '그렇다', value: 4 },
  { label: '매우 그렇다', value: 5 },
] as const

function compute(answers:Record<number,number>): Scores {
  return computeScores(answers as any, QUESTIONS as any)
}

export default function App(){
  const [gender, setGender] = useState<Gender>('none')
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const scores = useMemo(()=>compute(answers), [answers])
  const progress = Math.round((Object.keys(answers).length/QUESTIONS.length)*100)

  function setAnswer(i:number, v:number){ setAnswers(p=>({...p,[i]:v})) }
  function reset(){ setAnswers({}); setSubmitted(false); setGender('none') }
  function onSubmit(){
    if(Object.keys(answers).length<QUESTIONS.length){ alert('모든 문항에 응답해 주세요.'); return }
    setSubmitted(true); setTimeout(()=>document.getElementById('result')?.scrollIntoView({behavior:'smooth'}),0)
  }

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-egen-50 via-white to-teto-50" />
        <div className="relative mx-auto max-w-5xl px-4 py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">테토/에겐 연애 성향 테스트</h1>
          <p className="mt-3 text-slate-600">40문항으로 메인 축 기반 <b>32타입</b>과 보조 인사이트 3개를 확인해 보세요.</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-14">
        <Card className="mt-6">
          <CardHeader><CardTitle>기본 정보</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <GenderToggle value={gender} onChange={setGender} />
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-600">진행도</div>
              <Progress value={progress} />
              <div className="text-sm tabular-nums text-slate-600">{progress}%</div>
            </div>
          </CardContent>
        </Card>

        <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
          {QUESTIONS.map((q:Q,i:number)=>(
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="text-slate-400 font-mono pt-1">{i+1}.</div>
                  <div className="flex-1">
                    <div className="font-medium leading-relaxed">{q.text}</div>
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {choices.map(c=>(
                        <Button key={c.value}
                          variant={answers[i]===c.value ? 'solid':'outline'}
                          className="w-full"
                          onClick={()=>setAnswer(i,c.value)}>{c.label}</Button>
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
            <ResultCard scores={scores} gender={gender} />
            <div className="small mt-2">
              메인: -100 테토 ← 0 → +100 에겐 · 스타일: -100 실용 ← 0 → +100 표현
            </div>
          </div>
        )}

        <footer className="text-xs text-slate-400 mt-10">© 2025 테토/에겐 연애 성향 테스트 · 오락/자가 인식 목적의 비진단 도구</footer>
      </div>
    </div>
  )
}
