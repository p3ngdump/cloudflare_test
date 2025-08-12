import * as React from 'react'
export function Progress({value=0, color='black'}:{value?:number;color?:string}){
  return (<div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
    <div className="h-full transition-all" style={{width:`${Math.min(100,Math.max(0,value))}%`, background: color}}/>
  </div>)
}
