import * as React from 'react'
import { cn } from './utils'

type Variant = 'primary'|'outline'|'pink'|'blue'
export function Button({ className, variant='primary', ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }){
  const base = 'inline-flex items-center justify-center rounded-2xl px-3.5 py-2.5 text-sm font-semibold transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
  const styles = {
    primary: 'bg-black text-white hover:opacity-90 focus:ring-black/40',
    outline: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus:ring-slate-300',
    pink: 'bg-egen-500 text-white hover:bg-egen-600 shadow-glowPink focus:ring-egen-300',
    blue: 'bg-teto-500 text-white hover:bg-teto-600 shadow-glowBlue focus:ring-teto-300',
  }[variant]
  return <button className={cn(base, styles, className)} {...props} />
}
