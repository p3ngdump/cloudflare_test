import * as React from 'react'
import EgenMale from '@/illustrations/EgenMale'
import EgenFemale from '@/illustrations/EgenFemale'
import TetoMale from '@/illustrations/TetoMale'
import TetoFemale from '@/illustrations/TetoFemale'
import Neutral from '@/illustrations/Neutral'

export default function ResultIllustration({ lean, gender }:{ lean:'egen'|'teto'|'neutral'; gender:'male'|'female'|'none' }){
  const titleColor = lean==='egen' ? '#ff4da2' : lean==='teto' ? '#2563eb' : '#64748b'
  if(lean==='egen') return gender==='female'? <EgenFemale titleColor={titleColor}/> : <EgenMale titleColor={titleColor}/>
  if(lean==='teto') return gender==='female'? <TetoFemale titleColor={titleColor}/> : <TetoMale titleColor={titleColor}/>
  return <Neutral titleColor={titleColor}/>
}
