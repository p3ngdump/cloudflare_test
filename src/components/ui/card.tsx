import * as React from 'react'
import { cn } from './utils'

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>){
  return <div className={cn('rounded-3xl border border-slate-200 bg-white shadow-sm', className)} {...props}/>
}
export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>){
  return <div className={cn('p-6', className)} {...props}/>
}
export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>){
  return <div className={cn('text-xl font-bold tracking-tight', className)} {...props}/>
}
export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>){
  return <div className={cn('p-6 pt-0', className)} {...props}/>
}
