import * as React from 'react'
import { cn } from './ui/utils'

export type Gender = 'male'|'female'|'none'
export function GenderToggle({value,onChange}:{value:Gender; onChange:(g:Gender)=>void}){
  return (
    <div className="inline-flex rounded-2xl bg-white border border-slate-200 p-1">
      <ToggleItem active={value==='male'} label="남성" onClick={()=>onChange('male')} />
      <ToggleItem active={value==='female'} label="여성" onClick={()=>onChange('female')} />
      <ToggleItem active={value==='none'} label="선택 안 함" onClick={()=>onChange('none')} />
    </div>
  )
}
function ToggleItem({active,label,onClick}:{active:boolean;label:string;onClick:()=>void}){
  const base = 'px-3 py-2 rounded-xl text-sm font-semibold'
  return <button onClick={onClick} className={cn(base, active?'bg-black text-white':'text-slate-700 hover:bg-slate-100')}>{label}</button>
}
