import * as React from 'react'
import { cn } from './utils'

type Variant = 'default' | 'outline'

export function Button({
  className,
  variant = 'default',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-medium transition shadow-sm'
  const styles = {
    default: 'bg-black text-white hover:opacity-90',
    outline: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50',
  }[variant]
  return <button className={cn(base, styles, className)} {...props} />
}