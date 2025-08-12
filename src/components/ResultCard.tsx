import * as React from 'react'
import html2canvas from 'html2canvas'
import { resultDict, Lean } from '@/data/results'
import { Avatar } from './Avatar'
import { Button } from './ui/button'
import { Share2, Download } from 'lucide-react'

export function ResultCard({
  lean, pct, gender
}: { lean: Lean; pct: number; gender: 'male'|'female'|'none' }){
  const ref = React.useRef<HTMLDivElement>(null)
  const copy = resultDict[lean]
  async function capture(){
    if(!ref.current) return
    const canvas = await html2canvas(ref.current as HTMLElement, {backgroundColor: '#ffffff', scale: 2})
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url; a.download = `teto-egen-${lean}.png`; a.click()
  }
  function webShare(){
    const text = `나의 연애 성향: ${copy.title} (${pct}%)`
    if(navigator.share){ navigator.share({title:'테토/에겐 테스트 결과', text}) }
    else { navigator.clipboard.writeText(text); alert('결과 텍스트를 복사했어요!') }
  }
  return (
    <div className="space-y-4">
      <div ref={ref} className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
        <div className="p-5 md:p-7 bg-gradient-to-b from-white to-slate-50">
          <div className="text-sm font-semibold text-slate-500">나의 테토/에겐 결과는…</div>
          <div className="text-2xl md:text-3xl font-extrabold mt-1" style={{color: copy.color}}>{copy.title}</div>
          <div className="text-slate-600 mt-1">{copy.subtitle}</div>
        </div>
        <div className="p-5 md:p-7">
          <Avatar type={lean} gender={gender} />
          <div className="mt-4 flex items-center gap-3">
            <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full" style={{ width: `${Math.abs(pct)}%`, background: copy.color }} />
            </div>
            <div className="text-sm font-semibold" style={{color: copy.color}}>{pct}%</div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {copy.badges.map(b => (
              <span key={b} className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{background: copy.color+'20', color: copy.color}}>
                {b}
              </span>
            ))}
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <List title="핵심 특징 (3)" items={copy.traits}/>
            <List title="커뮤니케이션 팁 (3)" items={copy.tips}/>
          </div>
          <div className="mt-6 p-4 rounded-2xl bg-slate-50 text-slate-700 text-sm">
            <b>궁합 포인트</b> · {copy.match}
          </div>
          <div className="mt-6 text-[11px] text-slate-400">* 본 테스트는 오락/자가 인식 목적의 비진단 도구입니다.</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={webShare} variant="outline" className="gap-2"><Share2 className="w-4 h-4"/>공유</Button>
        <Button onClick={capture} className="gap-2"><Download className="w-4 h-4"/>결과 이미지 저장</Button>
      </div>
    </div>
  )
}

function List({ title, items }: { title: string; items: string[] }){
  return (
    <div>
      <div className="text-sm font-semibold text-slate-700">{title}</div>
      <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
        {items.map((t, i) => <li key={i}>• {t}</li>)}
      </ul>
    </div>
  )
}
