import * as React from 'react'
import html2canvas from 'html2canvas'
import { Button } from './ui/button'
import { Share2, Download } from 'lucide-react'
import ResultIllustration from './ResultIllustration'
import type { Scores } from '@/data/engine'
import { buildProfile } from '@/data/engine'
import { Insights3 } from './Insights'

export function ResultCard({
  scores,
  gender,
  nickname
}: {
  scores: Scores;
  gender: 'male'|'female'|'none';
  nickname?: string;
}){
  const ref = React.useRef<HTMLDivElement>(null)
  const profile = buildProfile(scores)

  async function capture(){
    if(!ref.current) return
    const canvas = await html2canvas(ref.current as HTMLElement, {backgroundColor: '#ffffff', scale: 2})
    const url = canvas.toDataURL('image/png')
    const a = document.createElement('a'); a.href = url; a.download = `teto-egen-${profile.key}.png`; a.click()
  }
  function webShare(){
    const who = nickname ? `${nickname}님의 결과는` : '나의 메인 타입은'
    const text = `${who} ${profile.title} (${scores.pctDisplay}%)`
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

        {/* 일러스트가 있다면 그대로 사용, 없다면 이 섹션은 유지해도 무방 */}
        <div className="px-6 md:px-8">
          <ResultIllustration lean={(scores as any).lean ?? 'neutral'} gender={gender} />
        </div>

        <div className="p-6 md:p-8">
          <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
            <div className="h-full" style={{width:`${Math.abs(scores.pctDisplay)}%`, background: profile.color}}/>
          </div>
          <div className="mt-2 text-sm font-semibold" style={{color: profile.color}}>{scores.pctDisplay}%</div>

          <div className="mt-5 flex flex-wrap gap-2">
            {profile.badges.map(b => (<span key={b} className="badge" style={{background: profile.color+'20', color: profile.color}}>{b}</span>))}
          </div>

          <div className="mt-8">
            <Insights3 conflict={scores.aux.conflict} planner={scores.aux.planner} spending={scores.aux.spending} />
          </div>

          <div className="mt-6 text-[11px] text-slate-400">* 본 테스트는 오락/자가 인식 목적의 비진단 도구입니다.</div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" className="gap-2" onClick={webShare}><Share2 className="w-4 h-4"/>공유</Button>
        <Button className="gap-2" onClick={capture}><Download className="w-4 h-4"/>이미지 저장</Button>
      </div>
    </div>
  )
}
