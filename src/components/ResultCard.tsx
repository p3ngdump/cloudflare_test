import * as React from 'react'
import html2canvas from 'html2canvas'
import { Button } from './ui/button'
import { Share2, Download, ChevronDown, ChevronUp } from 'lucide-react'
import ResultIllustration from './ResultIllustration'
import type { LeanSide, Style } from '@/data/engine'
import { buildProfile } from '@/data/profiles'

export function ResultCard({
  side, intensity, style, pctDisplay, nickname
}: {
  side: LeanSide;
  intensity: 0|1|2|3;
  style: Style;
  pctDisplay: number;
  nickname?: string;
}){
  const ref = React.useRef<HTMLDivElement>(null)
  const profile = buildProfile(side, intensity, style)
  const [open, setOpen] = React.useState(false)

  async function capture(){
    if(!ref.current) return
    const canvas = await html2canvas(ref.current as HTMLElement, {backgroundColor: '#ffffff', scale: 2})
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a'); a.href = url; a.download = `teto-egen-32-${profile.key}.png`; a.click()
  }
  function webShare(){
    const who = nickname ? `${nickname}님의 결과는` : '나의 메인 타입은'
    const text = `${who} ${profile.title} (${pctDisplay}%)`
    if(navigator.share){ navigator.share({title:'테토/에겐 연애 성향 테스트', text}) }
    else { navigator.clipboard.writeText(text); alert('결과 텍스트를 복사했어요!') }
  }

  const headerText = nickname ? `${nickname}님의 결과는…` : '나의 메인 타입은…'

  return (
    <div className="space-y-4">
      <div ref={ref} className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xl">
        <div className="p-6 md:p-8">
          <div className="text-sm font-semibold text-slate-500">{headerText}</div>
          <div className="text-3xl md:text-4xl font-extrabold mt-1" style={{color: profile.color}}>{profile.title}</div>
          <div className="text-slate-600 mt-1">{profile.subtitle}</div>
        </div>

        <div className="px-6 md:px-8">
          <ResultIllustration />
        </div>

        <div className="p-6 md:p-8">
          <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
            <div className="h-full" style={{width:`${Math.abs(pctDisplay)}%`, background: profile.color}}/>
          </div>
          <div className="mt-2 text-sm font-semibold" style={{color: profile.color}}>{pctDisplay}%</div>

          <ul className="summary mt-4">
            {profile.summary.map((s,i)=>(<li key={i}>{s}</li>))}
          </ul>

          <button
            onClick={()=>setOpen(v=>!v)}
            className="mt-4 inline-flex items-center gap-1 rounded-xl border border-slate-300 px-3 py-2 text-sm">
            {open ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}
            {open ? '자세히 접기' : '자세히 보기'}
          </button>

          {open && (
            <div className="disclosure">
              {profile.longDetails}
            </div>
          )}

          <div className="mt-6 text-[11px] text-slate-400">* 본 테스트는 오락/자가 인식 목적의 비진단 도구입니다.</div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" className="gap-2" onClick={webShare}><Share2 className="w-4 h-4"/>공유</Button>
        <Button className="gap-2" onClick={capture}>이미지 저장</Button>
      </div>
    </div>
  )
}
