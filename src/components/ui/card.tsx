import * as React from 'react'
import { cn } from './utils'
export const Card = ({className,...p}:React.HTMLAttributes<HTMLDivElement>) => <div className={cn('section',className)} {...p}/>
export const CardHeader = ({className,...p}:React.HTMLAttributes<HTMLDivElement>) => <div className={cn('p-6',className)} {...p}/>
export const CardTitle = ({className,...p}:React.HTMLAttributes<HTMLDivElement>) => <div className={cn('text-xl font-extrabold tracking-tight',className)} {...p}/>
export const CardContent = ({className,...p}:React.HTMLAttributes<HTMLDivElement>) => <div className={cn('p-6 pt-0',className)} {...p}/>
