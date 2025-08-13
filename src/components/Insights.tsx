import * as React from 'react'
export function InsightRow({title, value, left, right}:{title:string; value:number; left:string; right:string}){
  const pct=(value+100)/2
  return (
    <div className="p-4 rounded-2xl border border-slate-200 bg-white">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <div className="h-full bg-black" style={{width: pct+'%'}}/>
      </div>
      <div className="mt-1 text-[11px] text-slate-500 flex justify-between">
        <span>{left}</span><span>{right}</span>
      </div>
    </div>
  )
}
export function Insights3({conflict, planner, spending}:{conflict:{approach:number,focus:number}, planner:number, spending:number}){
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="space-y-3">
        <div className="text-sm font-bold">갈등 성향</div>
        <InsightRow title="접근" value={conflict.approach} left="회피" right="직면"/>
        <InsightRow title="초점" value={conflict.focus} left="감정" right="해결"/>
      </div>
      <div className="space-y-3">
        <div className="text-sm font-bold">데이트 플래너</div>
        <InsightRow title="준비도" value={planner} left="즉흥" right="계획"/>
      </div>
      <div className="space-y-3">
        <div className="text-sm font-bold">소비/선물 경향</div>
        <InsightRow title="선호" value={spending} left="절약" right="플렉스"/>
      </div>
    </div>
  )
}
