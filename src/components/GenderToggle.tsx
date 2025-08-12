import * as React from 'react'
import { Button } from './ui/button'
import { cn } from './ui/utils'

export type Gender = 'male'|'female'|'none'
export function GenderToggle({value,onChange}:{value:Gender; onChange:(g:Gender)=>void}){
  return (
    <div className="inline-flex rounded-2xl bg-white border border-slate-200 p-1">
      <ToggleItem active={value==='male'} label="남성" color="blue" onClick={()=>onChange('male')} />
      <ToggleItem active={value==='female'} label="여성" color="pink" onClick={()=>onChange('female')} />
      <ToggleItem active={value==='none'} label="선택 안 함" color="black" onClick={()=>onChange('none')} />
    </div>
  )
}

function ToggleItem({active,label,color,onClick}:{active:boolean;label:string;color:'blue'|'pink'|'black';onClick:()=>void}){
  const base = 'px-3 py-2 rounded-xl text-sm font-semibold'
  const activeCls = color==='blue' ? 'bg-teto-500 text-white shadow-glowBlue' :
                    color==='pink' ? 'bg-egen-500 text-white shadow-glowPink' : 'bg-black text-white'
  const idle = 'text-slate-600 hover:bg-slate-100'
  return <button onClick={onClick} className={cn(base, active?activeCls:idle)}>{label}</button>
}
