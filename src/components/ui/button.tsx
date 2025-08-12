import * as React from 'react'
import { cn } from './utils'

type Variant = 'primary' | 'outline' | 'ghost'

export function Button({
  className, variant='primary', ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }){
  const base = 'inline-flex items-center justify-center rounded-xl px-3.5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const styles = {
    primary: 'bg-black text-white hover:opacity-90 focus:ring-black/40',
    outline: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus:ring-slate-300',
    ghost: 'text-slate-700 hover:bg-slate-100'
  }[variant]
  return <button className={cn(base, styles, className)} {...props} />
}
