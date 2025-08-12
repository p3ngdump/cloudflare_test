import * as React from 'react'
export function Progress({value=0}:{value?:number}){
  return (<div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
    <div className="h-full bg-black transition-all" style={{width:`${Math.min(100,Math.max(0,value))}%`}}/>
  </div>)
}
