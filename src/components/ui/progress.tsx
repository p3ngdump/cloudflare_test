import * as React from 'react'
import { cn } from './utils'

export function Progress({ value = 0, className }: { value?: number; className?: string }) {
  return (
    <div className={cn('w-full h-2 rounded-full bg-slate-200 overflow-hidden', className)}>
      <div className="h-full bg-black transition-all" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  )
}
